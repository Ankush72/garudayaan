import React from "react";
import footerlogo from "../Image/Garudayaan logo PNG.png";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const years = date.getFullYear();
  return (
    <div className="bg-[#F2F2F2] font-roboto">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between bg-[#8d8d8d] p-5 sm:p-10  ">
        <h1 className="font-semibold text-center  text-xl text-white">
          Looking for the best transport services?
        </h1>
    
        <Link className="" to="/contact">
              <button
                className="text-base capitalize w-[180px] h-10 bg-red rounded  hover:bg-[#192a53] hover:border-2 hover:border-white  flex items-center justify-center  font-medium text-white cursor-pointer transition duration-150 ease-out hover:ease-in	"
              >
                Book your shipment
              </button>
            </Link>
      </div>
      <div className="flex  justify-between md:space-x-3 w-full flex-wrap text-black p-5 sm:p-10">
        <div className="mt-10  md:mt-0 w-full md:w-3/12 lg:w-2/12 ">
          <h1 className="font-semibold text-xl capitalize mb-5">company</h1>
          <Link className="flex items-center " to="/">
          <img
              className="w-[200px]"
              src={footerlogo}
              alt=""
            />
          </Link>
          <p className="pt-5 font-normal text-base text-lightnavyblue">
            Survey No. 183/1, Lake Side Road, Behind NCC Apartment, Mahadevapura
            Bangalore(KA). 560048
          </p>
          <a href="mailto:info@garudayaan.com"><h1 className="mt-5 text-lightnavyblue">info@garudayaan.com</h1></a>
          {/* <a href="tel:91 87222 21199"><h1 className="mt-2 text-white font-bold text-base">+91 87222 21199</h1></a> */}
        </div>
        <div className="flex flex-col mt-10  md:mt-0 w-[200px] md:w-3/12 lg:w-2/12  ">
          <h1 className="font-semibold text-xl capitalize mb-5">
            offcial info
          </h1>
          <ul className="space-y-3">
            <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
              <NavLink to="/our-service">Our service</NavLink>
            </li>
            <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-10  md:mt-0 w-[200px] md:w-3/12 lg:w-2/12  ">
          <h1 className="font-semibold text-xl capitalize mb-5">
            usefull links
          </h1>
          <div>
            <ul className="space-y-3">
              <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
                <NavLink to="/terms-conditions">Terms & conditions</NavLink>
              </li>
              {/* <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
                <NavLink to="/returns-refunds">Return & Refunds</NavLink>
              </li> */}
              <li className=" text-base font-medium text-lightnavyblue cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	">
                <NavLink to="/driver-terms-condition">Driver Terms & Condition</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10  md:mt-5 lg:mt-0  w-[200px] md:w-3/12 lg:w-2/12  ">
          <h1 className="font-semibold text-xl capitalize mb-5 text-center ml-[-40px]">
            Social media links
          </h1>
          <div className="flex flex-row lg:flex-col items-center  capitalize">
            <a
              className="m-2 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.facebook.com/garudayaan"
            >
              <FaFacebook color="#1877F2" size={23} />
            </a>
            <a
              className="m-2 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.instagram.com/garudayaanlogistics/"
            >
              <BsInstagram color="#F50781" size={23} />
            </a>
            <a
              className="m-2 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.linkedin.com/company/garudayaan/"
            >
              <FaLinkedin color="#0A66C2" size={23} />
            </a>
            <a
              className="flex items-center justify-center m-2 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.youtube.com/@garudayaanlogistics"
            >
              <AiFillYoutube color="red" size={23} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-lightgray flex items-center justify-center pt-8 pb-8 font-roboto">
        <h1 className="font-medium sm:font-semibold text-sm sm:text-base">
          Copyright @ {years} garudayaan.com.All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
