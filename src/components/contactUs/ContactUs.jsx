import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ContactUS.css";
import headerLogo from "../../assets/images/header-logo.jpg";
import contactUsImg from "../../assets/images/contactUs-img.png";
import linkedIn from "../../assets/images/linkedIn.jpg";
import locationn from "../../assets/images/location.svg";
import mail from "../../assets/images/mail.svg";
import twitter from "../../assets/images/twitter.jpg";
import call from "../../assets/images/call.svg";
import facebook from "../../assets/images/facebook.jpg";
import fax from "../../assets/images/fax.svg";
import google from "../../assets/images/g+.jpg";
import insta from "../../assets/images/insta.jpg";
import Gmap from "../map/Gmap";

const ContactUs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="contactUs-header-container">
        <header className="contactUs-header">
          <img src={headerLogo} alt="" />
          <div className="contactUs-links">
            <Link to="/Bruin-Logistics-beta/">Home</Link>
            <Link to="/Bruin-Logistics-beta/about-us">About Us</Link>
            <Link to="/Bruin-Logistics-beta/services">Services</Link>
            <a
              href="https://tracking.magaya.com/?orgname=36187#livetrack"
              target="_blank"
            >
              Live Track
            </a>
            <Link to="/Bruin-Logistics-beta/carrier-registration">
              Carrier Registration
            </Link>
            <Link
              to="/Bruin-Logistics-beta/contact-us"
              className={
                isActive("/Bruin-Logistics-beta/contact-us") ? "active" : ""
              }
            >
              Contact Us
            </Link>
          </div>
        </header>
      </div>
      <div className="contactUs-introduction">
        <div className="contactUs-intro-container">
          <img src={contactUsImg} alt="" />
          <div className="rectangle-position">
            <div className="rectangle-carrier-contactUs">
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUs-footer">
        <div className="contactUs-footer-content">
          <div className="contactUs-contacts">
            <div className="group-contacts">
              <div className="contactUs-info">
                <img src={call} alt="" />
                <a href="">
                  <span>(773) 796-5168</span>
                </a>
              </div>
              <div className="contactUs-info">
                <img src={mail} alt="" />
                <a href="">
                  <span>info@bruinlogistics.com</span>
                </a>
              </div>
            </div>
            <div className="group-contacts">
              <div className="contactUs-info">
                <img src={fax} alt="" />
                <a href="">
                  <span>(773) 789-6778</span>
                </a>
              </div>
              <div className="contactUs-info">
                <img src={locationn} alt="" />
                <a href="">
                  <span>
                    5649 W 31 st St., Ste A, <br />
                    Cicero, IL 60804
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="contactUs-icons">
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={insta} alt="" />
            </a>
            <a href="#">
              <img src={linkedIn} alt="" />
            </a>
            <a href="#">
              <img src={google} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Gmap />
      <footer className="under-footer-contactUs">
        <span>©2018 by Bruin Logistics LLC.</span>
      </footer>
    </>
  );
};

export default ContactUs;
