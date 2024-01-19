
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AccessTokenContext } from '../StyledButtons/ButtonLogInGoogle';

  const { accessToken } = useContext(AccessTokenContext);
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  // ... outras constantes e estados
  useEffect(() => {
    // Quando a página carregar
    setLoading(true); // Ativar tela de carregamento
    getEvents()
      .then(() => setLoading(false)) // Desativar tela de carregamento quando a chamada terminar
      .catch(() => setLoading(false)); // Em caso de erro, também desativar
  }, [accessToken]);
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
      console.log(accessToken)
      const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          key: API_KEY,
        },
      });
      console.log(response)
      setEvents(response.data.items);
      console.log(events)
      
    } catch (error) {
      console.error('Error fetching events: ', error);
    }
  };

  const createEvent = async (e) => {
    e.preventDefault();
    try {
      const event = {
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
        conferenceData: {
          createRequest: {
            conferenceSolutionKey: {
              type: 'hangoutsMeet',
            },
            requestId: "<<randomString>>",
          },
        },
      };
  
      const response = await axios.post(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?conferenceDataVersion=1`,
        event,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      console.log('Evento criado: ', response.data);
  
      // Verifica se a resposta inclui os dados da conferência
      if (response.data.conferenceData && response.data.conferenceData.entryPoints) {
        const meetLink = response.data.conferenceData.entryPoints.find(
          (entry) => entry.entryPointType === 'video' && entry.uri
        )?.uri;
  
        if (meetLink) {
          console.log('Link para a reunião do Google Meet:', meetLink);
          // Faça o que precisar com o link do Meet aqui
        } else {
          console.log('Não foi possível encontrar o link do Google Meet na resposta.');
        }
      } else {
        console.log('Não há dados de conferência na resposta do evento.');
      }
  
      /*setFormData({
        summary: '',
        location: '',
        description: '',
        startDateTime: '',
        endDateTime: '',
        attendees: '',
        emailReminders: '',
        popupReminders: '',
      });*/
      getEvents()
      closeCreateModal();
    } catch (error) {
      console.error('Erro ao criar evento: ', error);
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
      console.log('Event updated: ', response.data);
      // Atualiza a lista de eventos após a atualização bem-sucedida, chamando a função `getEvents`
      getEvents();
    } catch (error) {
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
      console.log('Event deleted: ', response);
      // Atualiza a lista de eventos após a remoção bem-sucedida, chamando a função `getEvents`
      getEvents();
    } catch (error) {
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
      console.error('Erro ao atualizar evento: ', error);
    }
  };