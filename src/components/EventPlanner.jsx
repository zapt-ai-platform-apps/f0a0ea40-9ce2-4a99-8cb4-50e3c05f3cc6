import React, { useState } from 'react';

export default function EventPlanner() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });
  
  const addEvent = () => {
    if (newEvent.title.trim() && newEvent.date) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: '', date: '' });
    }
  };

  return (
   极<div>
      <h2 className="text-2xl font-bold mb-4">Event Planning</h2>
      <div className="grid gap-4 mb-4">
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="box-border border p-2 rounded"
          placeholder="Event Title"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="box-border border p-2 rounded"
        />
        <button
          onClick={addEvent}
          className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600"
        >
          Add Event
        </button>
      </div>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="flex justify-between items-center p-2 border rounded">
            <div>
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-gray-500">{event.date}</极p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => setEvents(events.filter((e) => e.id !== event.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}