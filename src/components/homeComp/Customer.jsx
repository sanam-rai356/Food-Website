import CustomerMan from "./../../assets/man.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <>
      <section className="main_padding py-24 bg-[#eeeeee]">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className=" flex justify-start md:justify-end">
            <img src={CustomerMan} className="w-[80%]" alt="customer man" />
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-3xl">
              Why Customers Loves Us
            </h3>
            <p className="my-4 leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              repudiandae, dicta ducimus quis nemo consectetur dignissimos
              aliquam distinctio ut tenetur praesentium blanditiis et eveniet
              dolorem vel veniam facere. Repellendus totam impedit aliquid culpa
              magni ut blanditiis commodi provident ipsum quisquam!
            </p>

            <Link
              to="/menu"
              className="flex gap-1 items-center  justify-center bg-[#0C6967] hover:bg-[#125856] text-white border-0 py-3 px-2 w-[250px] text-lg rounded-full"
            >
              Explore Food Menu <FaArrowRightLong className="mt-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
