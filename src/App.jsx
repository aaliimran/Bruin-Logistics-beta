import React from "react";
import "./App.css";
import { Link, useLocation } from "react-router-dom";
import amazonFBAServices from "./assets/images/amazon-FBA-services.jpg";
import call from "./assets/images/call.svg";
import facebook from "./assets/images/facebook.jpg";
import fax from "./assets/images/fax.svg";
import google from "./assets/images/g+.jpg";
import insta from "./assets/images/insta.jpg";
import headerLogo from "./assets/images/header-logo.jpg";
import logisticsAndTransportaion from "./assets/images/logistics-transportation.jpg";
import linkedIn from "./assets/images/linkedIn.jpg";
import locationn from "./assets/images/location.svg";
import mail from "./assets/images/mail.svg";
import Slider from "./components/Slider";
import twitter from "./assets/images/twitter.jpg";
import truckAndWarehouse from "./assets/images/Truck-and-Warehouse.jpg";
import warehousingAndFulfilment from "./assets/images/warehousing-fulfilment.jpg";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="header-container">
        <header className="header">
          <img src={headerLogo} alt="" />
          <div className="links">
            <Link
              to="/Bruin-Logistics-beta/"
              className={isActive("/Bruin-Logistics-beta/") ? "active" : ""}
            >
              Home
            </Link>
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
            <Link to="/Bruin-Logistics-beta/contact-us">Contact Us</Link>
          </div>
        </header>
      </div>
      <div className="introduction">
        <Slider />
      </div>
      <div className="about-Us-content">
        <div className="img-container">
          <img src={truckAndWarehouse} alt="" />
        </div>
        <div className="about-Us-title">
          <p>About Us</p>
          <span>
            In today’s driven economy, businesses are more compelled than ever
            to seek efficiency through their entire supply chain with demand for
            the highest quality services with a high degree of flexibility,
            scalability, cost efficiency and technology optimization. Bruin
            Logistics LLC is an integrated third-party logistics service
            provider offering an array of logistic outsourcing services that
            include transportation, warehousing and eCommerce fulfillment
            services scaled and tailored to meet customers’ specific
            requirements.
          </span>
          <Link to="/about-us">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
      <div className="services">
        <p>SERVICES</p>
        <span>
          We are a premier third-party logistic and warehousing provider located
          next to Chicago, IL with specialization
          <br /> in warehouse management, Amazon FBA fulfilment, distribution,
          transload, cross-docking as well as <br /> transportation across the
          US. You can rest assured that we will provide superior customer
          service experience <br /> that exceeds our customers' expectations.
        </span>
      </div>
      <div className="services-links">
        <div className="images-and-links">
          <div className="img-container-services">
            <img src={logisticsAndTransportaion} alt="" />
          </div>
          <a href="#">Logistics & Transportation</a>
        </div>
        <div className="images-and-links">
          <div className="img-container-services">
            <img src={warehousingAndFulfilment} alt="" />
          </div>
          <a href="#">Warehousing & Fulfilment</a>
        </div>
        <div className="images-and-links">
          <div className="img-container-services">
            <img src={amazonFBAServices} alt="" />
          </div>
          <a href="#">Amazon FBA Services</a>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <p>Contact Us</p>
          <div className="contacts">
            <div className="info">
              <img src={call} alt="" />
              <a href="">
                <span>(773) 796-5168</span>
              </a>
            </div>
            <div className="info">
              <img src={fax} alt="" />
              <a href="">
                <span>(773) 789-6778</span>
              </a>
            </div>
            <div className="info">
              <img src={mail} alt="" />
              <a href="">
                <span>info@bruinlogistics.com</span>
              </a>
            </div>
            <div className="info">
              <img src={locationn} alt="" />
              <a href="">
                <span>5649 W 31 st St., Ste A, Cicero, IL 60804</span>
              </a>
            </div>
          </div>
          <div className="icons">
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
        <footer className="under-footer-home">
          <span>©2018 by Bruin Logistics LLC.</span>
        </footer>
      </div>
    </>
  );
}

export default App;

// import React from "react";

// const App = () => {
//   return (
//     <div>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quod
//       voluptates eos amet, reprehenderit neque non quis blanditiis ad ipsam,
//       labore unde fugit magni esse laboriosam accusantium possimus rem et.
//     </div>
//   );
// };

// export default App;
