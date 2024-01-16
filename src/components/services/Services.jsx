import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Services.css";
import amazonFBA2 from "../../assets/images/amazonFBA2.jpg";
import amazonFBA3 from "../../assets/images/amazonFBA3.jpg";
import amazonFBA4 from "../../assets/images/amazonFBA4.jpg";
import headerLogo from "../../assets/images/header-logo.jpg";
import servicesIntroImg from "../../assets/images/services-intro.png";
import logisticsTransportationImg from "../../assets/images/logistics-transportation-img.jpg";
import warehousing1 from "../../assets/images/warehousing1.jpg";
import warehousing2 from "../../assets/images/warehousing2.jpg";
import warehousing3 from "../../assets/images/warehousing3.jpg";

const Services = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="services-header-container">
        <header className="services-header">
          <img src={headerLogo} alt="" />
          <div className="links-services">
            <Link to="/Bruin-Logistics-beta/">Home</Link>
            <Link to="/Bruin-Logistics-beta/about-us">About Us</Link>
            <Link
              to="/Bruin-Logistics-beta/services"
              className={
                isActive("/Bruin-Logistics-beta/services") ? "active" : ""
              }
            >
              Services
            </Link>
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
      <div className="services-introduction">
        <div className="services-intro-container">
          <img src={servicesIntroImg} alt="" />
          <div className="rectangle-position">
            <div className="rectangle">
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="logistics-and-transportation">
        <div className="about-logistics-title">
          <a href="">Logistics & Transportation</a>
          <div className="title-direction">
            <div className="marker-and-title">
              <li></li>
              <p>Air or sea freight to the United States</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>US Customs Clearance</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>
                LTL & FTL to any destinations, including all <br /> Amazon DC’s
                in the United States
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="img-container-about-services">
            <img src={logisticsTransportationImg} alt="" />
          </div>
        </div>
      </div>
      <div className="warehousing-and-Fulfilment">
        <div className="about-warehousing-title">
          <a href="">Warehousing & Fulfilment</a>
          <div className="about-warehousing-title-direction">
            <div className="marker-and-title">
              <li></li>
              <p>Container Devanning & Palletizing</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Inventory Verification</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Product Quality Check</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Product Storage, Inventory Management and Tracking</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Freight Transload & Cross Docking</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Pick and pack</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Kitting & Assemblies</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Shipping via USPS, Fedex, or UPS</p>
            </div>
            <div className="marker-and-title">
              <li></li>
              <p>Reverse Logistics, Return Management, Repackaging</p>
            </div>
          </div>
          <div className="about-warehousing-img">
            <div className="img-container-about-warehousing">
              <img src={warehousing1} alt="" />
            </div>
            <div className="img-container-about-warehousing">
              <img src={warehousing2} alt="" />
            </div>
            <div className="img-container-about-warehousing">
              <img src={warehousing3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="background-amazon-content">
        <div className="amazon-FBA-services">
          <div className="about-amazon-title">
            <a href="">Amazon FBA Services</a>
            <div className="about-amazon-title-direction">
              <div className="marker-and-title">
                <li></li>
                <p>Product Packaging and Sorting</p>
              </div>
              <div className="marker-and-title">
                <li></li>
                <p>Individual package FNSKU labeling / re-labeling</p>
              </div>
              <div className="marker-and-title">
                <li></li>
                <p>Suffocation Stickers</p>
              </div>
              <div className="marker-and-title">
                <li></li>
                <p>Polybag Packaging</p>
              </div>
              <div className="marker-and-title">
                <li></li>
                <p>Crate labeling</p>
              </div>
              <div className="marker-and-title">
                <li></li>
                <p>Product Preparation and Shipping to Amazon DC’s</p>
              </div>
            </div>
            <div className="about-amazon-img">
              <div className="img-container-about-amazon">
                <img src={amazonFBA2} alt="" />
              </div>
              <div className="img-container-about-amazon">
                <img src={amazonFBA3} alt="" />
              </div>
              <div className="img-container-about-amazon">
                <img src={amazonFBA4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-services">
        <span>©2018 by Bruin Logistics LLC.</span>
      </footer>
    </>
  );
};

export default Services;
