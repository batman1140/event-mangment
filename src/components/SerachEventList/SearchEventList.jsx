import EventCard from "../EventCard/EventCard";
import { eventList } from '../../utils/EventDatabase';
import { Link } from "react-router-dom";
import "./SearchEventList.css";

const SearchEventList = ({ monthYear }) => {
  const { selectedMonth, selectedYear } = monthYear;
  const filteredEvents = eventList.filter((eventDetail) => {
    return (
      eventDetail.date.year === selectedYear &&
      eventDetail.date.month === selectedMonth
    );
  });

  if (filteredEvents.length === 0) {
    return (
      <div className="no-events">
        <h3>No Events Found</h3>
        <p>There are no events scheduled for {selectedMonth} {selectedYear}</p>
        <Link to="/create-event" className="create-event-btn">
          Create New Event
        </Link>
      </div>
    );
  }

  return (
    <div className="search-results">
      {filteredEvents.map((event) => (
        <div key={event.id} className="search-event-card">
          <EventCard
            id={event.id}
            date={event.date}
            heading={event.heading}
            location={event.location}
            img={event.img}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchEventList;