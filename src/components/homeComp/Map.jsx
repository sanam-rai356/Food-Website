import React from "react";

const Map = () => {
  return (
    <>
      <section className="w-full bg-[#eeeeee]">
        <div className="px-5 mb-8">
          <h3 className="text-center text-3xl md:text-4xl font-semibold">
            Our <span className="text-[#D95103] underline">Location</span>
          </h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.98504395763!2d85.3327296751469!3d27.68685712639547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc4b11c08f%3A0x12e1bae294ead9bd!2sPizza%20Station!5e0!3m2!1sen!2snp!4v1737184269839!5m2!1sen!2snp"
          width="600"
          height="450"
          allowFullScreen=""
          className="w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Map;
