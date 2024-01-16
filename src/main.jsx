import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./components/aboutUs/AboutUs.jsx";
// import Services from "./components/services/Services.jsx";
// import CarrierRegistration from "./components/carrierRegistration/CarrierRegistration.jsx";
// import ContactUs from "./components/contactUs/ContactUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/carrier-registration" element={<CarrierRegistration />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
