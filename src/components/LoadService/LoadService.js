import React from "react";

const LoadService = () => {
  return (
    <>
    <div className="pt-[90px] pl-3 sm:pl-10 pr-3 sm:pr-10 ">
    <img
          className="w-full object-scale-down"
          src={require("../Image/Full Load service.png")}
          alt=""
        />
    </div>
    <div className="pl-3 sm:pl-10 pr-3 sm:pr-10 pb-10 font-roboto">
      <h1 className="pt-10 font-bold text-xl text-center underline">Full Container Load (FCL) Services</h1>
      <p className="pt-5 font-medium text-base">
        Garudayaan Logistics offers a wide range of Full Container Load (FCL)
        services to meet your shipping needs. Whether you are shipping goods
        domestically or internationally, we can help you get your cargo to its
        destination safely and efficiently.
      </p>
      <div className=" mt-4">
        <h1 className="font-semibold  text-base">Our FCL services include:</h1>
        <ul className="space-y-1">
          <li className="font-semibold  text-base mt-2">
            Booking and tracking of containers : 
            <span className="font-normal text-base ml-2">
              We can help you book a container and track its progress throughout
              the shipping process .
            </span>
          </li>
          <li className="font-semibold  text-base">
            Consolidation and deconsolidation :
            <span className="font-normal text-base ml-2">
              If you need to consolidate or deconsolidate your cargo, we can
              help you with that as well.
            </span>
          </li>
          <li className="font-semibold  text-base">
            Customs clearance :
            <span className="font-normal text-base ml-2">
              We can handle all of the customs clearance paperwork for you, so
              you can focus on other things.
            </span>
          </li>
          <li className="font-semibold  text-base">
            Door-to-door delivery :
            <span className="font-normal text-base ml-2">
              We can deliver your cargo to your door, anywhere in the world.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h1 className="font-semibold text-lg">We also offer a variety of value-added services, such as : </h1>
        <ul className="space-y-1">
          <li className="font-semibold  text-base mt-2">
            Packing and unpacking :
            <span className="font-normal text-base ml-2">
              We can pack and unpack your cargo to protect it during shipping.
            </span>
          </li>
          <li className="font-semibold  text-base">
            Hazardous materials handling :
            <span className="font-normal text-base ml-2">We are certified to handle hazardous materials.</span>
          </li>
          <li className="font-semibold  text-base">
            Project cargo shipping:
            <span className="font-normal text-base ml-2">We have experience shipping large and complex projects.</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <p className="font-medium text-base">
          Contact us today to learn more about our FCL services and how we can
          help you with your shipping needs.
        </p>
        <h1 className="mt-3 font-medium text-lg">Benefits of FCL Shipping</h1>
      </div>

      <div className="mt-4"> 
        <h1 className="font-semibold  text-base">There are many benefits to using FCL shipping, including:</h1>
        <ul className="space-y-1">
          <li className="font-semibold  text-base">
            Cost-efficiency :
            <span className="font-normal text-base ml-2">
              FCL shipping is often more cost-effective than LCL shipping,
              especially for large shipments.
            </span>
          </li>
          <li className="font-semibold  text-base">
            Convenience :
            <span className="font-normal text-base ml-2">
              FCL shipping is more convenient than LCL shipping, as you do not
              have to worry about consolidation or deconsolidation.
            </span>
          </li>
          <li className="font-semibold  text-base">
            Security : 
            <span className="font-normal text-base ml-2">
              FCL shipping is more secure than LCL shipping, as your cargo is
              not exposed to other shipments.
            </span>
          </li>
          <li className="font-semibold  text-base">
            Flexibility : 
            <span className="font-normal text-base ml-2">
              FCL shipping is more flexible than LCL shipping, as you can choose
              the type of container that best suits your needs.
            </span>
          </li>
        </ul>
        <p className="font-normal text-base mt-4">
          If you are looking for a cost-effective, convenient, secure, and
          flexible shipping solution, then FCL shipping is the right choice for
          you. Contact Garudayaan Logistics today to learn more about our FCL
          services.
        </p>
      </div>
    </div>
    </>
  );
};

export default LoadService;
