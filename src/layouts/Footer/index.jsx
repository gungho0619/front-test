import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item text-center">
        <br />
        <img className="footer-logo" src="/src/assets/img/Logo.png" alt="" />
        <br /><br />
        <p className="footer-logo-p">
          Lorem ipsum dolor sit amet, consec tetur adipisicing elig. Vivamus hes
          ndrerit suscipit egestas.
        </p>
      </div>
      <div className="footer-item">
        <p className="item-title">Quick Links</p>
        <div className="quick-links">
          <Link className="quick-link" to="/about-us">
            About Us
          </Link>
          <Link className="quick-link" to="/service">
            Service
          </Link>
          <Link className="quick-link" to="/pricing">
            Pricing
          </Link>
          <Link className="quick-link" to="/blog">
            Blog
          </Link>
        </div>
      </div>
      <div className="footer-item">
        <p className="item-title">Contact Us</p>
        <div className="contact-links">
          <div className="contact-link">
            <img className="contact-img" src="/src/assets/img/Vector.png" alt="" />
            <p className="contact-p">hello@website.com</p>
          </div>

          <div className="contact-link">
            <img className="contact-img" src="/src/assets/img/location_on.png" alt="" />
            <p className="contact-p">
              Riverside Building, County Hall, London SE17PB, United Kingdom
            </p>
          </div>
          <div className="contact-link">
            <img className="contact-img" src="/src/assets/img/call.png" alt="" />
            <p className="contact-p">+02 5421234560</p>
          </div>
        </div>
      </div>
      <div className="footer-item">
        <p className="item-title">Follow Us</p>
        <div className="follow-links">
          <img
            className="follow-twitter-img"
            src="/src/assets/img/Twitter.png"
            alt=""
          />
          <img className="follow-img" src="/src/assets/img/Ig.png" alt="" />
          <img className="follow-img" src="/src/assets/img/FB.png" alt="" />
          <img
            className="follow-img"
            src="/src/assets/img/You Tube.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
