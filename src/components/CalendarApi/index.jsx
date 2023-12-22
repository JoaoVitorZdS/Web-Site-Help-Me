
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AccessTokenContext } from '../StyledButtons/ButtonLogInGoogle';

const CalendarAPI = () => {
  
  const { accessToken } = useContext(AccessTokenContext);
  //const CLIENT_ID = '752267844561-7d4860a0jkr77s0jal0cft1s0lbp2f8f.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyDJOolUKb_Ry280HLro6uNSug9WWhwzPBA '; // Replace with your API key
  //const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  //const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
  const CALENDAR_ID = 'zacarias.joao112@gmail.com'
  //const REDIRECT_URI = 'http://localhost:3000/callback';
  const [events, setEvents] = useState([]);
  
  



  
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

  const createEvent = async () => {
    try {
      const event = {
        'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'}
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
      };
      const response = await axios.post(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`, event, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },  
      params: {
          key: API_KEY,
        },
      });
      console.log('Event created: ', response.data);
    } catch (error) {
      console.error('Error creating event: ', error);
    }
  };

  const updateEvent = async (eventId, updatedEventData) => {
    try {
      const response = await axios.patch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}`, updatedEventData, {
        params: {
          key: API_KEY,
        },
      });
      console.log('Event updated: ', response.data);
    } catch (error) {
      console.error('Error updating event: ', error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}`, {
        params: {
          key: API_KEY,
        },
      });
      console.log('Event deleted: ', response);
    } catch (error) {
      console.error('Error deleting event: ', error);
    }
  };

  const handleGetEvents = () => {
    getEvents();
  };

  const handleCreateEvent = () => {
    createEvent();
  };

  const handleUpdateEvent = (eventId, updatedEventData) => {
    updateEvent(eventId, updatedEventData);
  };

  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId);
  };

  return (
    <>
    
      <button onClick={handleGetEvents}>Get Events</button>
      <button onClick={handleCreateEvent}>Create Event</button>
      <button onClick={handleUpdateEvent}>Update Event</button>
      <button onClick={handleDeleteEvent}>Delete Event</button>
      {/* Other buttons for update and delete with respective onClick handlers */}
      {/* Display events */}
      <ul>
      {events ? (
  <ul>
    {events.map((event) => (
      <li key={event.id}>
        {event.summary} - 
      </li>
    ))}
  </ul>
) : (
  <p>Sem Compromissos Agendados</p>
)}
      </ul>
    </>
  );
}

export default CalendarAPI