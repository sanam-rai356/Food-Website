import { FaPlayCircle } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <>
      <section className="w-full serviceBG">
        <div className="main_padding flex items-center h-full">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">Dine With Us</h3>
            <p className="text-[16px] text-lg mt-2 mb-4">
              Enjoy our foods in the comfort of your own home with our delivery
              services.
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

export default ServiceBanner;
