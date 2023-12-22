import React, { useState } from 'react';

const EventScheduler = () => {
  const [eventSummary, setEventSummary] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleScheduleEvent = async () => {
    try {
      // Fetch request to your backend API to schedule the event
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/calendarId/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          summary: eventSummary,
          description: eventDescription,
          startTime,
          endTime,
          // Other necessary details like attendees, calendar ID, etc.
        }),
      });

      if (response.ok) {
        // Event scheduled successfully
        console.log('Event scheduled successfully!');
      } else {
        // Handle error if event scheduling fails
        console.error('Failed to schedule event');
      }
    } catch (error) {
      console.error('Error scheduling event:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Event Summary"
        value={eventSummary}
        onChange={(e) => setEventSummary(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button onClick={handleScheduleEvent}>Schedule Event</button>
    </div>
  );
};

export default EventScheduler;
