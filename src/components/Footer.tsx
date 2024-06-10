import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="links-row">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/promotions">Bethany Rewards</Link>
          {/* <Link to="/giftcards">Gift Cards</Link> */}
          <Link to="/about">About</Link>
        </div>
        <p>Open Daily: 11am to 10pm</p>
      </div>

      <div className="social-media-section">
        <div className="social-media-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100063817472361"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/bethanycafe_arlington/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.yelp.com/biz/bethany-boba-tea-and-cafe-arlington"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYelp} />
          </a>
        </div>
        <p className="copyright">
          © {currentYear} Bethany Cafe LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
