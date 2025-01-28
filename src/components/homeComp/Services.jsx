import { FaPlayCircle } from "react-icons/fa";
import { ServiceDetails } from "./../../data/data";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section className="pt-24 bg-[#eeeeee]">
        <h2 className="text-center px-4 text-2xl font-semibold md:text-3xl mb-12">
          <span className="text-[#D74D00]"> We Offer People</span> The Service
          They Want
        </h2>

        <div className="serviceBG flex flex-col justify-center items-center ">
          <div className="text-white main_padding text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Process behind the making
            </h3>
            <p className="text-[16px] mt-2 mb-4">
              See how only chefs cooks only the best foods.
            </p>
            <button className="border-0 bg-[#0C6967] hover:bg-[#155454] text-white gap-2 flex mx-auto items-center py-[14px] px-8 rounded-full">
              <FaPlayCircle className="text-2xl" />
              <span>Watch the video</span>
            </button>
          </div>
        </div>

        <div className="main_padding py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ServiceDetails.map((service) => (
            <div
              key={service.id}
              className="bg-white flex flex-col items-center gap-3 rounded px-5 py-8"
            >
              <img src={service.img} alt={service.title} className="w-14" />
              <h3 className="text-[18px] md:text-xl lg:text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="text-[13px] font-semibold">{service.para}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Link
            to="/service"
            className="flex gap-1 items-center  justify-center bg-[#0C6967] hover:bg-[#125856] text-white border-0 py-3 px-2 w-[220px] md:w-[250px] text-[17px] rounded-full"
          >
            Explore Food Menu <FaArrowRightLong className="mt-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
