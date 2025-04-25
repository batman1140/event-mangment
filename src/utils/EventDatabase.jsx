const API_URL = 'http://localhost:5000/api';

// Initial static event data
export let eventList = [
  {
    id: 1,
    heading: "Tech Conference 2025",
    date: {
      month: "April",
      year: 2025
    },
    location: "San Francisco",
    description: "Annual technology conference featuring the latest innovations",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    heading: "Music Festival",
    date: {
      month: "May",
      year: 2025
    },
    location: "Los Angeles",
    description: "Three-day music festival featuring top artists",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop"
  }
];

// Add new event
export const addEvent = (event) => {
  const newEvent = {
    ...event,
    id: eventList.length + 1
  };
  eventList.push(newEvent);
  return newEvent;
};

// Update event
export const updateEvent = (id, updatedEvent) => {
  const index = eventList.findIndex(event => event.id === Number(id));
  if (index !== -1) {
    eventList[index] = { ...updatedEvent, id: Number(id) };
    return eventList[index];
  }
  return null;
};

// Delete event
export const deleteEvent = (id) => {
  const index = eventList.findIndex(event => event.id === Number(id));
  if (index !== -1) {
    eventList.splice(index, 1);
  }
};

// Get event by ID
export const getEventById = (id) => {
  return eventList.find(event => event.id === Number(id)) || null;
};
