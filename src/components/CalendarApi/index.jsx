//const CLIENT_ID = '752267844561-7d4860a0jkr77s0jal0cft1s0lbp2f8f.apps.googleusercontent.com';
//const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
//const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
//const REDIRECT_URI = 'http://localhost:3000/callback';

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AccessTokenContext } from '../StyledButtons/ButtonLogInGoogle';
import { StyledCalendarAPIBody } from './style';
import { GiFountainPen } from "react-icons/gi";
import { GiTrashCan } from "react-icons/gi";
import { toast } from 'react-toastify';

const CalendarAPI = () => {
  
  const { accessToken, userData } = useContext(AccessTokenContext);
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  // ... outras constantes e estados
  const profissional = "Doctor uno"
  const API_KEY = 'AIzaSyCyPwbJLpBVm7FKBmvStuA_p8DZk7aZYIQ'; // Replace with your API key
  const CALENDAR_ID = 'primary'
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    summary: '',
    location: '',
    description: '',
    startDateTime: '',
    endDateTime: '',
    attendees: '',
    
    emailReminders: '',
    popupReminders: '',
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const openUpdateModal = (event) => {
    setShowUpdateModal(true);
    setSelectedEventId(event.id)
    setFormData({
      summary: event.summary || '',
      location: event.location || '',
      description: event.description || '',
      startDateTime: event.start.dateTime ? event.start.dateTime.slice(0, -6) : '',
      endDateTime: event.end.dateTime ? event.end.dateTime.slice(0, -6) : '',
      attendees: event.attendees ? event.attendees[0].email : '',
      emailReminders: event.reminders && event.reminders.overrides
        ? event.reminders.overrides.find(reminder => reminder.method === 'email')?.minutes || ''
        : '',
      popupReminders: event.reminders && event.reminders.overrides
        ? event.reminders.overrides.find(reminder => reminder.method === 'popup')?.minutes || ''
        : '',
    });
  };
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedEventId(null);
  };
  const getEvents = async () => {
    try {
      //console.log(accessToken)
      const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          key: API_KEY,
        },
      });
      //console.log(response)
      setEvents(response.data.items);
      //console.log(events)
      
    } catch (error) {
      toast("Erro de conexão com a agenda. Atualize a Página e tente novamente.", {type: "error"})

      console.error('Error fetching events: ', error);
    }
  };

  useEffect(() => {
    // Quando a página carregar
    setLoading(true); // Ativar tela de carregamento
    getEvents()
      .then(() => setLoading(false)) // Desativar tela de carregamento quando a chamada terminar
      .catch(() => setLoading(false)); // Em caso de erro, também desativar
      // eslint-disable-next-line
  }, [accessToken] );

  const createEvent = async (e) => {
    e.preventDefault();
    try {
      // Criação automática do endDateTime
      console.log(formData)
      const startDateTime = new Date(formData.startDateTime);
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Adiciona 1 hora

      const event = {
        summary: `${userData.name} consulta com ${profissional}`,
        location: 'Online',
        description: formData.description,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'America/Sao_Paulo',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'America/Sao_Paulo',
        },
        attendees: [{ email: userData.email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 180 }, // Lembrete por email em 3 horas
            { method: 'popup', minutes: 60 }, // Lembrete por popup em 1 hora
          ],
        },
        conferenceData: {
          createRequest: {
            conferenceSolutionKey: {
              type: 'hangoutsMeet',
            },
            requestId: "<<randomString>>",
          },
        },
      };

      try {
        const response = await axios.post(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?conferenceDataVersion=1`,
          event,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      
        if (response.status === 200) {
          toast("Consulta Marcada!", { type: "success" });
        }
      } catch (error) {
        toast("Erro ao marcar consulta. Tente novamente em alguns minutos", { type: "error" });
        console.error('Erro ao criar evento: ', error);
      }

      //console.log('Evento criado: ', response.data);

      // Atualiza a lista de eventos após a criação bem-sucedida, chamando a função `getEvents`
      getEvents();
      closeCreateModal();
    } catch (error) {
      toast("Erro ao marcar consulta. Tente novamente em alguns minutos", {type: "error"})

      //console.error('Erro ao criar evento: ', error);
    }
  };
  
  const updateEvent = async (eventId, updatedEventData) => {
    try {
      const response = await axios.patch(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}`,
        updatedEventData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      
      if (response.status === 200) {
        toast("Evento Atualizado", { type: "success" });
        // Atualiza a lista de eventos após a atualização bem-sucedida, chamando a função `getEvents`
        getEvents();
      } else {
        toast("Erro ao atualizar evento. Tente novamente em alguns minutos", { type: "error" });
      }
    } catch (error) {
      toast("Erro ao atualizar evento. Tente novamente em alguns minutos", { type: "error" });
      console.error('Error updating event: ', error);
    }
  };
  
  const deleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
        
      if (response.status === 204) {
        toast("Evento cancelado!", { type: "success" });
        // Atualiza a lista de eventos após a remoção bem-sucedida, chamando a função `getEvents`
        getEvents();
      } else {
        toast("Erro ao cancelar o evento. Tente novamente em alguns minutos", { type: "error" });
      }
    } catch (error) {
      toast("Erro ao cancelar o evento. Tente novamente em alguns minutos", { type: "error" });
      console.error('Error deleting event: ', error);
    }
  };
  
  const handleUpdateEvent = async (eventId, e) => {
    e.preventDefault();
    try {
      const updatedEventData = {
        summary: formData.summary,
        location: formData.location,
        description: formData.description,
        start: {
          dateTime: new Date(formData.startDateTime).toISOString(),
          timeZone: 'America/Los_Angeles',
        },
        end: {
          dateTime: new Date(formData.endDateTime).toISOString(),
          timeZone: 'America/Los_Angeles',
        },
        attendees: [{ email: formData.attendees }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: parseInt(formData.emailReminders) },
            { method: 'popup', minutes: parseInt(formData.popupReminders) },
          ],
        },
      };
  
      await updateEvent(eventId, updatedEventData);
  
      closeUpdateModal();
    } catch (error) {
      toast("Erro ao Atualizar Evento. Tente novamente mais tarde", {type: "error"})

      //console.error('Erro ao atualizar evento: ', error);
    }
  };
  
  return (
    <>
    <StyledCalendarAPIBody>
    {loading ? (<div>Carregando...</div>) 
    : (
      <>
      {/*<button onClick={getEvents}>Get Events</button>*/}
      
      <button onClick={openCreateModal}>Criar Evento</button>

      {/* Other buttons for update and delete with respective onClick handlers */}
      {/* Display events */}
      <ul>
          {events.length !== 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                {event.summary} - 
                <button onClick={() => openUpdateModal(event)}><GiFountainPen />Editar Evento</button>
                <button onClick={() => deleteEvent(event.id)}><GiTrashCan />Deletar Evento</button>
              </li>
                                       ))}
            </ul> 
      ) : (
        <>
        <p>Sem Compromissos Agendados</p>
        </>
      )}
      </ul>
      {showCreateModal && (
        <div className="EventCreationModal">
          <form onSubmit={(e) => createEvent(e)}>
            
           
            <label>
              Descrição:
              <input id='inputCreationEvent' type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>
            <label>
              Data e Hora de Inicio:
              <input
              id='inputCreationEvent'
                type="datetime-local"
                name="startDateTime"
                value={formData.startDateTime}
                onChange={handleChange}
              />
            </label>
     
            <label>
              Participantes:
              <input id='inputCreationEvent' type="email" name="attendees" value={formData.attendees} onChange={handleChange} />
            </label>
            
            <div id='buttonCreationContainer'>
            <button type="submit">Marcar Consulta</button>
            <button onClick={closeCreateModal}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Modal de atualização de evento */}
      {showUpdateModal && (
        <div className="modal">
          <form onSubmit={(e) => handleUpdateEvent(selectedEventId, e)}>
            <label>
              Summary:
              <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>
            <label>
              Start Date Time:
              <input
                type="datetime-local"
                name="startDateTime"
                value={formData.startDateTime}
                onChange={handleChange}
              />
            </label>
            <label>
              End Date Time:
              <input
                type="datetime-local"
                name="endDateTime"
                value={formData.endDateTime}
                onChange={handleChange}
              />
            </label>
            <label>
              Attendees:
              <input type="email" name="attendees" value={formData.attendees} onChange={handleChange} />
            </label>
          
            <label>
              Email Reminder (in minutes):
              <input
                type="number"
                name="emailReminders"
                value={formData.emailReminders}
                onChange={handleChange}
              />
            </label>
            <label>
              Popup Reminder (in minutes):
              <input
                type="number"
                name="popupReminders"
                value={formData.popupReminders}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Update Event</button>
            <button onClick={closeUpdateModal}>Cancel</button>
          </form>
        </div>
      )}</>
    )}
    </StyledCalendarAPIBody>
    </>
  );
}

export default CalendarAPI