import { Link } from "react-router-dom";
import { MdHelp, MdContactSupport } from "react-icons/md";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find-events">Find Events</Link>
          </li>
        </ul>
        <div className="logo">
          <span className="logo-text">Event</span>
        </div>
        <div className="nav-actions">
          <button className="nav-btn help-btn" onClick={() => alert('Help functionality coming soon!')}>
            <MdHelp /> Help
          </button>
          <button className="nav-btn contact-btn" onClick={() => alert('Contact form coming soon!')}>
            <MdContactSupport /> Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;