import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AccessTokenContext } from '../StyledButtons/ButtonLogInGoogle';
import { toast } from 'react-toastify';
import { StyledCalendarAPIBody } from './style';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const { accessToken } = useContext(AccessTokenContext);

  const CALENDAR_ID = 'primary';

  const getEvents = async () => {
    if (!accessToken) return;
    try {
      const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      setEvents(response.data.items);
    } catch (error) {
      toast.error("Erro de conexão com a agenda. Atualize a Página e tente novamente.");
      console.error('Error fetching events: ', error);
    }
  };

  useEffect(() => {
    getEvents();
  }, [accessToken]);

  const createEvent = async (eventDetails) => {
    try {
      const { summary, startDateTime, description, attendees } = eventDetails;
      const startDateTimeISO = new Date(startDateTime).toISOString();
      const endDateTimeObj = new Date(startDateTime);
      endDateTimeObj.setHours(endDateTimeObj.getHours() + 1);
      const endDateTimeISO = endDateTimeObj.toISOString();
  
      const event = {
        summary: summary,
        location: 'Online',
        description: description,
        start: { dateTime: startDateTimeISO, timeZone: 'America/Sao_Paulo' },
        end: { dateTime: endDateTimeISO, timeZone: 'America/Sao_Paulo' },
        attendees: attendees.map(email => ({ email })),
        conferenceData: { // Adicionando dados de conferência para criar um Google Meet
            createRequest: {
                requestId: "meeting-" + new Date().getTime(), // Um identificador único para a requisição de criação de conferência
                conferenceSolutionKey: { type: "hangoutsMeet" } // Especifica que a conferência será um Google Meet
            }
        },
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'email', minutes: 180 },
                { method: 'popup', minutes: 60 }
            ]
        }
    };
    
    // Garanta que a requisição para criar o evento inclua o campo 'conferenceDataVersion' com valor 1
    // para indicar que você deseja usar os recursos de conferência.
    
  
      const token = accessToken; // Assegure-se de que accessToken é o token atualizado
      if (!token) {
        toast.error("Token de acesso não disponível. Faça login novamente.");
        return;
      }
  
      const response = await axios.post(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?conferenceDataVersion=1`,
        event,
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      if (response.status === 200) {
        toast.success("Consulta Marcada!");
        getEvents();
      }
    } catch (error) {
      toast.error("Erro ao marcar consulta. Tente novamente em alguns minutos");
      console.error('Erro ao criar evento: ', error);
    }
  };
  
  

  const value = { events, createEvent, getEvents };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
};

 const CalendarAPI = () => {
  const { events, getEvents } = useContext(EventContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then(() => setLoading(false));
  }, [getEvents]);

  return (
    <StyledCalendarAPIBody>
      {loading ? <div>Carregando...</div> : (
        <ul>
          {events.length > 0 ? events.map((event) => (
            <li key={event.id}>{event.summary}</li>
          )) : <p>Sem Compromissos Agendados</p>}
        </ul>
      )}
    </StyledCalendarAPIBody>
  );
};

export default CalendarAPI;