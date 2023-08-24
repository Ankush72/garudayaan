import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import OurService from "./components/OurService/OurService";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/usefullLinks/PrivacyPolicy";
import TermsConditions from "./components/usefullLinks/TermsConditions";
import ReturnsRefunds from "./components/usefullLinks/ReturnsRefunds";
import Disclaimer from "./components/usefullLinks/Disclaimer";
import ScrollToTop from "./components/ScrollToTop";
import PackersMovers from "./components/packers-movers/Packers_Movers";
import ParcelDelivery from "./components/ParcelDelivery/ParcelDelivery.js";
import RoadFreightDelivery from "./components/RoadFreightDelivery/RoadFreightDelivery.js";
import LoadService from "./components/LoadService/LoadService";
// import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <div>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/our-service/packers-movers"
            element={<PackersMovers />}
          />
          <Route
            path="/our-service/parcel-delivery"
            element={<ParcelDelivery />}
          />
          <Route
            path="/our-service/road-freight-delivery"
            element={<RoadFreightDelivery />}
          />
          <Route
            path="/our-service/container-load-service"
            element={<LoadService />}
          />
          {/* <Route path="/blog" element={<Blog />} /> */}

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/returns-refunds" element={<ReturnsRefunds />} />
          <Route path="/driver-terms-condition" element={<Disclaimer />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default App;
