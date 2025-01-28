import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeroFoodImg from "./../../assets/heroFood.png";
import HeroCircle from "./../../assets/circle.png";

const Hero = () => {
  return (
    <>
      <div className="main_padding  h-[100vh] flex flex-col items-center justify-center overflow-x-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="  ">
            <span className="text-gray-600 text-lg">Restaurant</span>
            <h1 className="font-bold text-4xl my-3">
              The <span className="text-[#e86f29]">#One</span>
              <br /> Food <span className="text-[#e86f29]">Restaurant</span>
            </h1>

            <p className="mb-5 text-lg font-semibold">
              More than <span className="text-[#e86f29]">20+ Varieties</span> of
              food available for you.
            </p>

            <Link
              to="/menu"
              className="flex gap-1 items-center  justify-center bg-[#0C6967] hover:bg-[#125856] text-white border-0 py-3 px-2 w-[250px] text-lg rounded-full"
            >
              Explore Food Menu <FaArrowRightLong className="mt-1" />
            </Link>
          </div>

          <div className="relative  flex justify-end">
            <img src={HeroFoodImg} className="w-[80%]" alt="Hero Food Image" />
            <div className="absolute z-[-1] -top-32 -right-[17rem]">
              <img
                src={HeroCircle}
                className="w-[70%]"
                alt="Hero Circle Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
