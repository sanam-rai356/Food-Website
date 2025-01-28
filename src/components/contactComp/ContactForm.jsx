import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="main_padding py-24 bg-[#E3E3E3]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full h-[100vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5074456974708!2d85.3172701751464!3d27.670707027107085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ae5ac9d50b%3A0xcf0c485e3e2a4e92!2sPizza%20Planet%20Kumaripati!5e0!3m2!1sen!2snp!4v1737449647370!5m2!1sen!2snp"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* iframe section */}
          <div className="w-full bg-white rounded-md shadow-md p-6">
            <h4 className="text-2xl font-bold">
              Contact <span className="text-[#D84E00]">Us</span>
            </h4>
            <p className="text-gray-500 my-5">
              If you have any queries, send us a message. Our friendly team
              would love to hear from you
            </p>

            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border-[1.5px] mt-2   border-gray-300 w-full focus:outline-none rounded-md p-2 text-lg"
                  />
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-[1.5px] mt-2  w-full  border-gray-300 focus:outline-none rounded-md p-2 text-lg"
                  />
                </div>
              </div>
              <div className="my-3">
                <label>Email</label>
                <input
                  type="email"
                  className="border-[1.5px] mt-2  border-gray-300 w-full focus:outline-none rounded-md p-2 text-lg"
                />
              </div>
              {/* email */}
              <div className="my-3">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="border-[1.5px] mt-2  border-gray-300 w-full focus:outline-none rounded-md p-2 text-lg"
                />
              </div>
              {/* phone */}
              <div className="my-3">
                <label>Message</label>
                <textarea
                  rows={5}
                  className="border-[1.5px] mt-2 border-gray-300 w-full
                  focus:outline-none rounded-md p-2 text-lg resize-none"
                ></textarea>
              </div>
              {/* message */}

              <button className="bg-[#0C6967] mt-5 hover:bg-[#184d4c] text-white border-none py-3 px-12 text-lg rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
