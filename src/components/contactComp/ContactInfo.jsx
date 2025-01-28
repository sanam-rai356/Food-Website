import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <>
      <section className="main_padding mt-[87px] h-[100vh] flex items-center bg-[#E3E3E3] py-12">
        <div className="w-full ">
          <div className="text-center mb-4">
            <h3 className="aboutH3 text-4xl md:text-5xl text-[#0C6967] mb-6">
              Our Contact
            </h3>
            <p className="mb-2 text-xl text-[#575757]">GET IN TOUCH</p>
            <h4 className="text-lg md:text-2xl font-bold">
              <span className="text-[#D95204]">Our friendly team</span> would
              love to hear from you
            </h4>
          </div>
          {/* hello div */}

          <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="flex gap-2 items-center mb-6">
                <MdLocationOn className="text-[#D95103] text-3xl font-bold" />
                <p className="text-lg font-semibold">Location</p>
              </div>

              <p className="italic text-[17px] font-semibold">
                New Baneshwor - 41232
              </p>
              <p className="italic text-[17px] font-semibold">
                Kathmandu, Bagmati, Nepal
              </p>
            </div>
            {/* first div */}

            <div className="bg-white rounded-lg shadow-md p-5 ">
              <div className="flex gap-2 items-center mb-6">
                <FaPhoneAlt className="text-[#D95103] text-3xl font-bold" />
                <p className="text-lg font-semibold">Phone</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#0D6A68] font-semibold">Mobile : </p>
                <div>
                  <p className="italic font-semibold">(+977) 9876787654</p>
                  <p className="italic font-semibold">(+977) 9876676545</p>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <p className="text-[#0D6A68] font-semibold">Tel : </p>
                <div>
                  <p className="italic font-semibold">01-4587687</p>
                </div>
              </div>
            </div>
            {/* second div */}

            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="flex gap-2 items-center mb-6">
                <FaClock className="text-[#D95103] text-3xl font-bold" />
                <p className="text-lg font-semibold">Service Time</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#0D6A68] font-semibold">Mon - Fri: </p>
                <div>
                  <p className="italic font-semibold">8 am to 8 pm</p>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <p className="text-[#0D6A68] font-semibold">Sat - Sun: </p>
                <div>
                  <p className="italic font-semibold">Closed</p>
                </div>
              </div>
            </div>
            {/* third div */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
