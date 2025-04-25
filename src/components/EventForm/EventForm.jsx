import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addEvent, updateEvent, getEventById } from "../../utils/EventDatabase";
import Navigation from "../Navigation/Navigation";
import { months } from "../../utils/DataRender";
import { BiTime } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./EventForm.css";

const EventForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    heading: "",
    date: {
      month: "January",
      year: new Date().getFullYear()
    },
    location: "",
    mapLink: "",
    startTime: "09:00",
    endTime: "17:00",
    description: "",
    img: ""
  });

  useEffect(() => {
    if (isEditing) {
      const event = getEventById(Number(id));
      if (event) {
        setFormData({
          ...event,
          startTime: event.startTime || "09:00",
          endTime: event.endTime || "17:00",
          mapLink: event.mapLink || ""
        });
      } else {
        alert('Event not found');
        navigate('/');
      }
    }
  }, [id, isEditing, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateEvent(Number(id), formData);
    } else {
      addEvent(formData);
    }
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "month" || name === "year") {
      setFormData(prev => ({
        ...prev,
        date: {
          ...prev.date,
          [name]: name === "year" ? Number(value) : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <Navigation />
      <div className="event-form-container page-transition">
        <h2>{isEditing ? 'Edit Event' : 'Create New Event'}</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                required
                placeholder="Enter event name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Month</label>
                <select
                  name="month"
                  value={formData.date.month}
                  onChange={handleChange}
                  required
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.date.year}
                  onChange={handleChange}
                  min={new Date().getFullYear()}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location</label>
              <div className="input-with-icon">
                <FaMapMarkerAlt className="input-icon" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Event location"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Google Maps Link</label>
              <div className="input-with-icon">
                <FaMapMarkerAlt className="input-icon" />
                <input
                  type="url"
                  name="mapLink"
                  value={formData.mapLink}
                  onChange={handleChange}
                  placeholder="Paste Google Maps link"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Start Time</label>
                <div className="input-with-icon">
                  <BiTime className="input-icon" />
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>End Time</label>
                <div className="input-with-icon">
                  <BiTime className="input-icon" />
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Event description"
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                name="img"
                value={formData.img}
                onChange={handleChange}
                required
                placeholder="Enter image URL"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/')} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {isEditing ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;