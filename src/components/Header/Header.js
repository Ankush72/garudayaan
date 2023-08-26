import React from "react";
import banner from "../Image/Banner1.png";

const Header = () => {
  return (
    <div
      className="w-full h-[400px] relative flex items-center justify-center sm:pl-10 sm:pr-10 rounded "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        objectFit: "cover"
      }}
    >
      {/* <img
        className="w-full h-[400px] 	 rounded shadow-2xl"
        src={require("../Image/Banner1.png")}
        alt=""
      /> */}

      {/* <div className="absolute bottom-5 flex flex-col items-center justify-center space-y-2">
        <h1 className="font-bold text-xl sm:text-3xl text-[#192A53] uppercase">Quick</h1>
        <p className="bg-blue pl-5 pr-5 pt-1 pb-1 text-white uppercase font-semibold text-xl ms:text-3xl rounded">
          easy solution
        </p>
        <p className="font-bold text-center text-xl sm:text-3xl text-[#192A53] uppercase">
          for your logistics needs
        </p>
      </div> */}
    </div>
  );
};

export default Header;
