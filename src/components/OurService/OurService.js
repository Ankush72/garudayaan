import React, { useState } from "react";
import ServiceData from "./serviceCard";
// import Service from "./ServiceCard2";
import Features from "./OurFeaturescard";
import { Link, NavLink } from "react-router-dom";
import loggistic from "../Image/logistics.jpg";

const OurService = () => {
  const [readMore, setReadMore] = useState(false);
  console.log(readMore)

  const toggleReadMoreLess = (item) => {
      setReadMore(!readMore);
  };
  return (
    <div className="pt-[60px] pb-20 flex items-center justify-center flex-col">
      <h1 className="text-center font-bold text-4xl pt-5">Our service</h1>

      <div className="pt-[50px] flex flex-wrap items-center justify-center">
        {ServiceData &&
          ServiceData.map((item) => {
            return (
              <Link
                to={item.route}
                key={item.id}
                className="md:w-[270px] h-[350px] m-3 bg-gray hover:bg-Triadic hover:text-white rounded-lg shadow-2xl shadow-gray flex items-center justify-center flex-col space-y-3 p-3"
              >
                <img className="w-[80px] h-[80px]" src={item.img} alt="" />
                <h1 className="font-semibold text-lg">{item.title}</h1>
                <p className="text-center font-medium text-sm">
                  {item.details}
                </p>
                <Link
                  to={item.route}
                  className="w-40 h-10 rounded mt-3 text-center border flex items-center justify-center"
                >
                  Read More...
                </Link>
              </Link>
            );
          })}
      </div>

      <div className="w-full h-[500px] mt-20 flex items-center justify-center">
        <div
          className="w-full h-[500px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${loggistic})`,
            backgroundPosition: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="w-full h-full bg-[#8282828f] flex flex-col items-center justify-center text-white  pl-10 pr-10">
            <h1 className="font-bold text-center text-xl sm:text-3xl">
              PROVIDING FLEXIBLE SERVICE LEVELS
            </h1>
            <p className="font-medium text-sm sm:text-xl text-center mt-8">
              "At GARUDAYAAN top Logistics Company in Bangalore, we are
              dedicated to providing our clients with top-notch logistics
              solutions. Our team of experienced professionals is committed to
              ensuring that your shipments are delivered on time and in perfect
              condition.
            </p>
            <NavLink to="/about-us" className="flex items-center justify-center font-medium text-lg bg-red w-[150px] h-10  rounded mt-10 hover:bg-white  hover:text-black hover:text-opacity-75">
              Learn More
            </NavLink>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-center justify-center mt-10 space-x-5">
          {Service &&
            Service.map((item) => {
              return (
                <div className="w-[270px] h-[250px] flex flex-col items-center justify-center bg-red rounded-lg p-3">
                  <h1 className="font-bold text-lg text-white">{item.title}</h1>
                  <p className="text-center text-base text-white mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus tenetur porro quae praesentium sed aliquid.
                  </p>
                </div>
              );
            })}
        </div> */}
      </div>

      <div className="mt-20 ">
        <h1 className="text-center font-bold text-4xl pb-10">
          Our Core Features
        </h1>
        <div className="flex items-center justify-center flex-wrap  mt-5">
          {Features &&
            Features.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => {
                    toggleReadMoreLess(item);
                  }}
                  onMouseLeave={() => {
                    toggleReadMoreLess(item);
                  }}
                  className="md:w-[300px] h-auto m-3 flex items-center  flex-col bg-gray p-3 shadow-2xl rounded-xl relative"
                >
                  <img className="w-[200px] rounded" src={item.img} alt="" />
                  <h1 className="font-bold text-xl mt-5">{item.title}</h1>
                  <p className="text-center pb-2">
                    {readMore
                      ? item.details
                      : `${item.details.substring(0, 120)}`}
                  </p>
                  <button
                    className="absolute bottom-1 right-4 "
                    
                  >
                    {readMore ? (
                      <span className="hover:underline hover:text-underline-blue hover:text-black text-orange">
                        Read Less
                      </span>
                    ) : (
                      <span className="hover:underline hover:text-underline-blue hover:text-blue text-orange">
                        ...Read More
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mt-20  w-full flex items-center justify-center">
        <iframe
          className="w-full lg:w-6/12 h-[400px] lg:h-[350px] shadow-2xl shadow-white rounded-lg"
          src="https://www.youtube.com/embed/mQfwjRz6toM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurService;
