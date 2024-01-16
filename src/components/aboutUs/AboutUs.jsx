import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AboutUs.css";
import headerLogo from "../../assets/images/header-logo.jpg";
import aboutUsIntroImg from "../../assets/images/aboutUs-intro.png";
import highway from "../../assets/images/highway.jpg";

const AboutUs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="aboutUs-header-container">
        <header className="aboutUs-header">
          <img src={headerLogo} alt="" />
          <div className="aboutUs-links">
            <Link to="/Bruin-Logistics-beta/">Home</Link>
            <Link
              to="/about-us"
              className={isActive("/about-us") ? "active" : ""}
            >
              About Us
            </Link>
            <Link to="/services">Services</Link>
            <a
              href="https://tracking.magaya.com/?orgname=36187#livetrack"
              target="_blank"
            >
              Live Track
            </a>
            <Link to="/carrier-registration">Carrier Registration</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </header>
      </div>
      <div className="aboutUs-introduction">
        <div className="aboutUs-intro-container">
          <img src={aboutUsIntroImg} alt="" />
          <div className="rectangle-position">
            <div className="rectangle">
              <p>About Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="drive">
        <span>
          In today’s driven economy, businesses are more compelled than ever to
          seek efficiency through their entire supply chain with demand for the
          highest quality services with a high degree of flexibility,
          scalability, cost efficiency and technology optimization. Bruin
          Logistics LLC is an integrated third-party logistics service provider
          offering an array of logistic outsourcing services that include
          transportation, warehousing and eCommerce fulfillment services scaled
          and tailored to meet customers’ specific requirements.
        </span>
        <div>
          <div className="img-container-about">
            <img src={highway} alt="" />
          </div>
          <div className="square"></div>
        </div>
      </div>
      <footer className="footer-aboutUs">
        <span>©2018 by Bruin Logistics LLC.</span>
      </footer>
      <div className="under-footer"></div>
    </>
  );
};

export default AboutUs;
