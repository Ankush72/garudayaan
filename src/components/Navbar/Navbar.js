import React, { useState } from "react";
// import logo from "../Image/Logo_1-removebg-preview.png";
import logo from "../Image/Garudayaan logo PNG.png";
import { NavLink, Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import "./Navbar.css";
import Menu from "../Hamberger/Menu";
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar_bg flex items-center justify-between sm:pl-10 pr-3 sm:pr-10 shadow-2xl font-montserrat font-medium fixed w-full z-20  h-[65px]">
      <Link to="/" className="flex items-center justify-center  pr-5 logo ">
           <img
              className="w-[200px]"
              src={logo}
              alt=""
            />
      </Link>
      <div className="flex hidden md:block">
        <div>
          <ul className="flex items-center justify-center space-x-5 ">
            <li>
              <NavLink
                className=" text-base font-medium text-black cursor-pointer hover:underline hover:rounded hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-base font-medium text-black cursor-pointer hover:underline hover:rounded hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-base font-medium text-black cursor-pointer hover:underline hover:rounded hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
                to="/our-service"
              >
                Our Service
              </NavLink>
            </li>
            
            {/* <li>
          <NavLink
            className=" text-base font-medium text-black cursor-pointer hover:underline hover:rounded hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
            to="/blog"
          >
            Blog
          </NavLink>
        </li> */}

            <li>
              <NavLink
                className="text-base font-medium text-black cursor-pointer hover:underline hover:rounded hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <Link className="" to="/contact">
              <button
                className="text-base  w-[140px] h-[40px] bg-red rounded  hover:bg-[#192a53] hover:border-2 hover:border-white  flex items-center justify-center  font-medium text-white cursor-pointer transition duration-150 ease-out hover:ease-in	"
              >
                Book Now
              </button>
            </Link>
          </ul>
        </div>
      </div>
      <div className="block md:hidden absolute right-3 sm:right-10" onClick={() => setMenu(!menu)}>
        {menu ?
         <AiOutlineClose color="white" size={40} /> :<LuMenu color="white" size={40} /> 
        }
      </div>
      <div className="block md:hidden">
        {menu ? <Menu setMenu={setMenu} menu={menu} /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
