import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaClock } from "react-icons/fa";

const Form = () => {
  return (
    <>
      <section className="main_padding py-24 bg-[#eeeeee]">
        <form>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-semibold mb-1">
              Get <span className="text-[#D95103]">In Touch</span>
            </h3>
            <p className="text-[#0C6967] text-lg font-semibold">
              Our friendly team would love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-10 bg-white p-5 rounded-xl">
            <div className="bg-[#0C6967] rounded-xl text-white p-5">
              <h4 className="flex gap-1 items-center font-semibold">
                <IoLocationSharp /> <span>Our Address</span>
              </h4>
              <p className="italic my-3">
                New Baneshwor, Kathmandu, Bagmati, Nepal
              </p>

              <h4 className="flex gap-1 items-center font-semibold">
                <FaPhoneAlt />
                <span>Our Contacts</span>
              </h4>

              <div className="grid grid-cols-2 gap-2 lg:gap-5 my-3">
                <div>
                  <h5 className="mb-1">Mobile</h5>
                  <p className="italic">9806578643</p>
                  <p className="italic">9806578643</p>
                </div>

                <div>
                  <h5 className="mb-1">Landline</h5>
                  <p className="italic">01-09898766</p>
                </div>
              </div>

              <h4 className="flex gap-1 items-center font-semibold">
                <FaClock />
                <span>Our Service Time</span>
              </h4>

              <div className="grid grid-cols-2 gap-5 my-3">
                <div>
                  <h5 className="mb-1">Mon - Fri</h5>
                  <p className="italic">10 Am to 8 Pm</p>
                </div>

                <div>
                  <h5 className="mb-1">Sat - Sun</h5>
                  <p className="italic">Closed</p>
                </div>
              </div>
            </div>
            {/* first div */}

            <div className="p-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="w-full border-[1.5px] border-gray-300 px-2 py-3 rounded-lg mt-1 focus:outline-none"
                  />
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="w-full border-[1.5px] border-gray-300 px-2 py-3 rounded-lg mt-1 focus:outline-none"
                  />
                </div>
              </div>

              <div className="my-6">
                <label>Email</label>
                <input
                  type="email"
                  className="w-full border-[1.5px] border-gray-300 px-2 py-3 rounded-lg mt-1 focus:outline-none"
                />
              </div>

              <div className="my-6">
                <label>Message</label>
                <textarea
                  className="w-full border-[1.5px] border-gray-300 px-2 py-3 rounded-lg mt-1 focus:outline-none resize-none"
                  rows={5}
                ></textarea>
              </div>

              <button className="border-none bg-[#D95103] hover:bg-[#a95220] text-white py-3 px-9 rounded-full text-sm">
                Send Message
              </button>
            </div>
            {/* second div */}
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
