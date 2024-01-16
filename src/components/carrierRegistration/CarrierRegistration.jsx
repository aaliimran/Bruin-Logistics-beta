import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CarrierRegistration.css";
import headerLogo from "../../assets/images/header-logo.jpg";
import carrierRegistrationIntro from "../../assets/images/carrier-registration-intro.png";
import heavyDriving from "../../assets/images/Heavy-Driving.jpg";

const CarrierRegistration = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="registration-header-container">
        <header className="registration-header">
          <img src={headerLogo} alt="" />
          <div className="registration-links">
            <Link to="/Bruin-Logistics-beta/">Home</Link>
            <Link to="/Bruin-Logistics-beta/about-us">About Us</Link>
            <Link to="/Bruin-Logistics-beta/services">Services</Link>
            <a
              href="https://tracking.magaya.com/?orgname=36187#livetrack"
              target="_blank"
            >
              Live Track
            </a>
            <Link
              to="/Bruin-Logistics-beta/carrier-registration"
              className={
                isActive("/Bruin-Logistics-beta/carrier-registration")
                  ? "active"
                  : ""
              }
            >
              Carrier Registration
            </Link>
            <Link to="/Bruin-Logistics-beta/contact-us">Contact Us</Link>
          </div>
        </header>
      </div>
      <div className="registration-introduction">
        <div className="registration-intro-container">
          <img src={carrierRegistrationIntro} alt="" />
          <div className="rectangle-position">
            <div className="rectangle-carrier-registration">
              <p>CARRIER REGISTRATION</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carrier-registration-content">
        <div className="carrier-registration-title">
          <p>Become a Carrier</p>
          <span>
            Log in to submit information and documentation to become a carrier
          </span>
          <a
            href="https://customers.xpresstrax.com/PGCommon/Registration.aspx?id=dj0JbxJjrgY%3d&ltr=6zcOsHDiKmw%3d"
            target="_blank"
          >
            <button>Registrationn</button>
          </a>
        </div>
        <div>
          <div className="img-container-about-registration">
            <img src={heavyDriving} alt="" />
          </div>
        </div>
      </div>
      <footer className="footer-registration">
        <span>©2018 by Bruin Logistics LLC.</span>
      </footer>
    </>
  );
};

export default CarrierRegistration;
