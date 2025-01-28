import { FaPlayCircle } from "react-icons/fa";

const AboutBanner = () => {
  return (
    <>
      <section className="w-full aboutBG">
        <div className="main_padding flex items-center h-full">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Process behind the making
            </h3>
            <p className="text-[16px] text-lg mt-2 mb-4">
              See how we make our foods that you like from only the best
              ingredients.
            </p>
            <button className="border-0 bg-[#0C6967] hover:bg-[#155454] text-white gap-2 flex items-center py-[14px] px-8 rounded-full">
              <FaPlayCircle className="text-2xl" />
              <span>Watch the video</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
