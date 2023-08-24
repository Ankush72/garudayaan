import React, { useState } from "react";
import conatctbg from "../Image/Banner3.png";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });



  const onHandleData = (e) => {
    const datas = {...data}
    data[e.target.name] = e.target.value
    setData(datas)

  };

  const submitData = (e) => {
    
    e.preventDefault();
  };
  return (
    <div className="pt-[90px] ">
      <div
        className="h-[350px] w-full "
        style={{
          backgroundImage: `url(${conatctbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-transparent h-[300px] flex items-center justify-center">
          <h1 className="font-bold text-4xl text-black opacity-75 bg-[#EEFCFF] pl-10 rounded pr-10 pt-2 pb-2">Contact Us</h1>
        </div>
      </div>

      <div className="p-10 flex flex-col-reverse lg:flex-row bg-[#F2F2F2]">
        <div className="lg:w-1/2">
          <iframe
            className="rounded-xl w-full h-[350px] sm:h-[450px] mt-10 lg:mt-0 shadow-2xl"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=420&amp;height=400&amp;hl=en&amp;q=%20Besides%20NCC%20Apartments,%20Survey%20No.%20185/1,%20Lake%20Side%20Road,%20Outer%20Ring%20Rd,%20Mahadevapura,%20Bengaluru,%20Karnataka%20560048+(garuda%20mart%20india%20pvt%20ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="map"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure area map
            </a>
          </iframe>
        </div>
        <div className="lg:w-1/2 pl-5">
          <form action="#" className="space-y-4 w-full" onSubmit={submitData}>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                value={data.name}
                onChange={onHandleData}
              />
              
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                value={data.email}
                onChange={onHandleData}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="number"
                name="mobile"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Number"
                value={data.mobile}
                onChange={onHandleData}
              />
            </div>

            <div>
              <label
                htmlFor="Address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Address"
                value={data.address}
                onChange={onHandleData}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Message..."
                value={data.message}
                onChange={onHandleData}
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="text-base capitalize w-[100px] h-10 bg-red rounded transition duration-150 ease-out hover:ease-in  flex items-center justify-center  font-medium text-white cursor-pointer"
                // className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
