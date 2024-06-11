import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="main-nav">
        <img src="/logo.png" alt="Bethany Cafe" className="logo-image" />

        <div
          className="menu-icon"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <FontAwesomeIcon icon={isDrawerOpen ? faTimes : faBars} />
        </div>

        <div className={`link-container ${isDrawerOpen ? "open" : ""}`}>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/promotions">Combo Deal</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            {/* <li>
              <Link to="/cgiftcards">Gift Cards</Link>
            </li> */}
          </ul>
        </div>
        <div className="button-container">
          {/* <Link to="/about" className="find-us-button">
            Find Us
          </Link> */}
          <a
            href="https://bethany-cafe.redbirdtab.com/"
            className="order-online-button"
          >
            Order Online
          </a>
        </div>
      </div>
      <div>
        {/* Mobile Drawer */}
        <Transition
          show={isDrawerOpen}
          enter="transition-transform duration-300"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition-transform duration-300"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
          className={`mobile-drawer ${
            isDrawerOpen ? "mobile-drawer-open" : "mobile-drawer-closed"
          }`}
        >
          <button
            onClick={() => setIsDrawerOpen(false)}
            type="button"
            className="menu-icon-close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="mobile-drawer-links-container">
            <li className="mobile-drawer-link">
              <Link to="/" onClick={() => setIsDrawerOpen(false)}>
                Home
              </Link>
            </li>
            <li className="mobile-drawer-link">
              <Link to="/promotions" onClick={() => setIsDrawerOpen(false)}>
                Combo Deal
              </Link>
            </li>
            <li className="mobile-drawer-link">
              <Link to="/menu" onClick={() => setIsDrawerOpen(false)}>
                Menu
              </Link>
            </li>
            <li className="mobile-drawer-link">
              <Link to="/events" onClick={() => setIsDrawerOpen(false)}>
                Events
              </Link>
            </li>

            {/* <li className="mobile-drawer-link">
              <Link to="/giftcards" onClick={() => setIsDrawerOpen(false)}>
                Gift Cards
              </Link>
            </li> */}
            {/* <li className="mobile-drawer-link">
              <Link to="/about" onClick={() => setIsDrawerOpen(false)}>
                Find Us
              </Link>
            </li> */}
            <li className="mobile-drawer-link">
              <Link
                to="https://bethany-cafe.redbirdtab.com/"
                onClick={() => setIsDrawerOpen(false)}
              >
                Order Online
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
