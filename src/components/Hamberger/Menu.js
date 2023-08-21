import React,{useState} from 'react'
import logo from "../Image/Logo_1-removebg-preview.png";
import { Link } from 'react-router-dom';
import {MdOutlineClose} from "react-icons/md"
import {IoMdClose} from "react-icons/io"
import {FiPlus} from "react-icons/fi"
import {FaFacebook} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"



const Menu = ({setMenu,menu}) => {
    const [toggle, setToggle] = useState(false);
    return (
      <div className="w-screen h-screen absolute top-0 right-0 flex font-roboto ">
        <div
          className="sm:w-full bg-lightblack"
          onClick={() => setMenu(!menu)}
        ></div>
        <div className="bg-white w-full sm:w-[600px] h-full pt-[3rem] pb-5 pl-5 relative">
          <div
            className="absolute right-10 top-10 border-2 z-20 rounded-full opacity-70 text-black"
            onClick={() => setMenu(!menu)}
          >
            <MdOutlineClose size={30} />
          </div>
          <div className="navbar-start w-full">
          <Link to="/" className="flex  pr-5 logo " onClick={() => setMenu(!menu)}>
        <div className="nav_logo bg-red">
          <div className="border-[2px] border-black rounded-full  ">
            <img
              className="h-[40px] w-[40px] bg-white rounded-full"
              src={logo}
              alt=""
            />
          </div>
          <h1 className="flex flex-col	items-end ml-2 font-semibold text-lg text-white leading-5">
            Garudayaan <span> logistics</span>
          </h1>
        </div>
      </Link>
          </div>
          <div className="navbar-center  flex flex-col  font-roboto opacity-75">
            <ul className=" font-medium text-sm mt-5 space-y-3 uppercase ml-2 mr-[3rem] mb-5">
              <li className="border-b-[1.5px] text-black">
                <Link onClick={() => setMenu(!menu)} to="/">
                  Home
                </Link>
              </li>
  
              <li className="border-b-[1.5px] text-black">
                <Link onClick={() => setMenu(!menu)} to="/about-us">
                 About Us
                </Link>
              </li>
  
              <li className=" ">
                <div className="flex  items-center justify-between border-b-[1.5px] text-black">
                  <div onClick={() => setMenu(!menu)}>
                    Our Service
                  </div>
                  <div
                    className="mr-5 border mb-2 rounded"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? <IoMdClose size={18} /> : <FiPlus size={18} />}
                  </div>
                </div>
                <div>
                  {toggle ? (
                    <div>
                      <div className=""></div>
                      <li className="border-b-[1.5px] mt-2 text-black">
                        <Link
                          onClick={() => setMenu(!menu)}
                          to="/our-service/parcel-delivery"
                        >
                         Parcel Delivery Services
                        </Link>
                      </li>
                      <li className="border-b-[1.5px] mt-2 text-black">
                        <Link
                          onClick={() => setMenu(!menu)}
                          to="/our-service/container-load-service"
                        >
                         Full Container Load (FCL) Services
                        </Link>
                      </li>
                      <li className="border-b-[1.5px] mt-2 text-black">
                        <Link
                          onClick={() => setMenu(!menu)}
                          to="/our-service/road-freight-delivery"
                        >
                        Road Freighting Services
                        </Link>
                      </li>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
  
              <li className="text-black">
                <Link onClick={() => setMenu(!menu)} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
          <h1 className="font-medium text-xl capitalize mb-5 text-center">
            Social media links :- 
          </h1>
          <div className="flex items-center  space-x-3 capitalize">
            <a
              className="rounded bg-black border border-black p-1 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.facebook.com/garudayaan"
            >
              <FaFacebook color="#1877F2" size={30} />
            </a>
            <a
              className="rounded bg-black border border-black p-1 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.instagram.com/garudayaanlogistics/"
            >
              <BsInstagram color="#F50781" size={30} />
            </a>
            <a
              className="rounded bg-black border border-black p-1 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.linkedin.com/company/garudayaan/"
            >
              <FaLinkedin color="#0A66C2" size={30} />
            </a>
            <a
              className="flex items-center justify-center rounded bg-black border border-black p-1 text-base font-medium text-white cursor-pointer hover:underline hover:rounded hover:text-red hover: underline-offset-4 transition duration-150 ease-out hover:ease-in	"
              href="https://www.youtube.com/@garudayaanlogistics"
            >
              <AiFillYoutube color="red" size={30} />
            </a>
          </div>
        </div>
       </div>

      </div>
    );
  };

export default Menu