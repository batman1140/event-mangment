import EventCard from "../../components/EventCard/EventCard";
import { eventList, deleteEvent } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import "./EventList.css";

const EventList = () => {
  const [events, setEvents] = useState(eventList);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
      setEvents([...eventList]); // Update state with the modified list
    }
  };

  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-header">
          <h2>Upcoming Events</h2>
          <Link to="/create-event" className="create-btn">
            <MdAdd /> Create New Event
          </Link>
        </div>

        {events.length > 0 ? (
          <div className="event-grid">
            {events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <h3>No Events Available</h3>
            <p>Create your first event to get started!</p>
            <Link to="/create-event" className="create-btn">
              <MdAdd /> Create New Event
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventList;
