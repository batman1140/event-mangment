import { useParams, useNavigate, Link } from "react-router-dom";
import { getEventById, deleteEvent } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5";
import {BiTime} from "react-icons/bi";
import "./EventDetails.css";

const EventDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const numId = Number(id);

  const event = getEventById(numId);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(numId);
      navigate('/');
    }
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  // Function to extract location query from map link
  const getLocationQuery = () => {
    if (!event.location) return null;
    return encodeURIComponent(event.location);
  };

  // Generate Google Maps embed URL
  const getMapUrl = () => {
    const query = getLocationQuery();
    if (!query) return null;
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&q=${query}`;
  };

  return(
    <div className="event-details-container page-transition">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={event.img} alt="Event" className="event-image hover-scale" />
        <div className="event-details-content">
          <div className="event-header-actions">
            <h3>{event.heading}</h3>
            <div className="action-buttons">
              <Link to={`/edit-event/${numId}`} className="edit-btn">Edit Event</Link>
              <button onClick={handleDelete} className="delete-btn">Delete Event</button>
            </div>
          </div>
          
          <div className="event-info-grid">
            <div className="info-item">
              <MdCalendarMonth className="icon" />
              <div className="info-text">
                <span className="label">Date</span>
                <span className="value">{event.date.month} {event.date.year}</span>
              </div>
            </div>

            <div className="info-item">
              <BiTime className="icon" />
              <div className="info-text">
                <span className="label">Time</span>
                <span className="value">
                  {event.startTime || "09:00"} - {event.endTime || "17:00"}
                </span>
              </div>
            </div>

            <div className="info-item">
              <IoLocationSharp className="icon" />
              <div className="info-text">
                <span className="label">Location</span>
                <span className="value">{event.location}</span>
              </div>
            </div>
          </div>

          <div className="description-section">
            <h4>Event Description</h4>
            <p>{event.description}</p>
          </div>

          <div className="map-section">
            <h4>Location Map</h4>
            <div className="map-container">
              <iframe
                title="Event Location"
                width="100%"
                height="300"
                frameBorder="0"
                src={getMapUrl()}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;