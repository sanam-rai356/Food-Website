import TestimonialImg from "./../../assets/customer.jpg";

const Testimonial = () => {
  return (
    <>
      <section className="main_padding bg-[#eeeeee] py-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              200+ <span className="text-[#D95103]">Happy Customers</span>
            </h3>
            <h4 className="mt-2 mb-5 font-semibold text-[#126D6B] text-[18px]">
              What our customers says about us.
            </h4>
            <p className="italic">
              "Only the best food you can find in the market. Different
              varieties of food to choose from. Will be visiting again soon."{" "}
            </p>
          </div>

          <div>
            <img
              src={TestimonialImg}
              alt="customer"
              className="w-full md:w-[550px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
