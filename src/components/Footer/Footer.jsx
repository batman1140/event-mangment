import { Link } from 'react-router-dom';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Event</h3>
          <p>Creating memorable experiences through seamless event management.</p>
          <div className="social-links">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/find-events">Find Events</Link></li>
            <li><Link to="/create-event">Create Event</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>
              <MdEmail className="icon" />
              <span>info@events.com</span>
            </li>
            <li>
              <MdPhone className="icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <MdLocationOn className="icon" />
              <span>123 Event Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Event. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;