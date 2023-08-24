import React from "react";
import { NavLink } from "react-router-dom";

const ReliableService = () => {
  return (
    <div className="w-full mt-10 flex flex-col lg:flex-row space-x-4">
      <div className="w-full lg:w-1/2">
        <img
          className="w-full  object-contain rounded"
          src={require("../Image/Banner2.png")}
          alt="banner"
        />
      </div>
      <div className="w-full lg:w-1/2 pr-10 pt-5 lg:pt-0">
        <h1 className="font-bold text-xl sm:text-4xl text-center">
          We Provide a Reliable Services
        </h1>
        <p className="font-normal text-sm sm:text-base mt-5 ">
          "At GARUDAYAAN Top Logistics Company in Bangalore, we are dedicated to providing our
          clients with top-notch logistics solutions. Our team of experienced
          professionals is committed to ensuring that your shipments are
          delivered on time and in perfect condition. We offer a wide range of
          services, including air and ocean freight, ground transportation,
          warehousing and distribution, and customs brokerage. Whether you're
          shipping a small package or a full container, we have the expertise to
          handle your logistics needs.
          <NavLink to="/about-us"><button className="text-base font-medium ml-2 text-orange ">
            
            ...read more
            
          </button></NavLink>
        </p>
      </div>
    </div>
  );
};

export default ReliableService;
