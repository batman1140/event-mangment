import { Link } from "react-router-dom";
import { MdCalendarMonth, MdLocationOn, MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import "./EventCard.css";

const EventCard = ({ id, heading, date, location, img, onDelete }) => {
  const { year, month } = date;

  const handleDelete = (e) => {
    e.preventDefault(); // Prevent navigation
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <Link to={`/events/${id}`}>
      <div className="card">
        <div className="card-img-wrapper">
          <img src={img} alt={heading} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{heading}</h3>
          <div className="card-info">
            <div className="info-row">
              <MdCalendarMonth className="icon" />
              <span>{month} {year}</span>
            </div>
            <div className="info-row">
              <MdLocationOn className="icon" />
              <span>{location}</span>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/events/${id}`} className="card-btn view-btn" onClick={e => e.stopPropagation()}>
              <MdVisibility /> View
            </Link>
            <Link to={`/edit-event/${id}`} className="card-btn edit-btn" onClick={e => e.stopPropagation()}>
              <MdEdit /> Edit
            </Link>
            <button className="card-btn delete-btn" onClick={handleDelete}>
              <MdDelete /> Delete
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
