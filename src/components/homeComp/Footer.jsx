import Footerimg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="main_padding bg-[#eeeeee] pt-24 pb-6">
        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <img src={Footerimg} alt="footer img" className="w-16" />
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, sequi cumque eveniet veritatis veniam recusandae ea
                  quasi commodi! Ut, nisi ratione blanditiis unde quaerat fuga
                  ullam voluptatibus doloremque quo necessitatibus!
                </p>
              </div>
            </div>
            {/* first div */}

            <div className="text-left md:text-center">
              <h3 className="text-[#1E7472] text-xl font-semibold mb-4">
                Links
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/about"
                    className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                    to="/menu"
                  >
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                    to="/service"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                    to="/allergy"
                  >
                    Allergy Advice
                  </Link>
                </li>
              </ul>
            </div>
            {/* second div */}

            <div className="text-left md:text-center">
              <h3 className="text-[#1E7472] text-xl font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex justify-start md:justify-center gap-3 flex-wrap">
                <FaFacebook className="cursor-pointer text-4xl text-[#7a7b7b] hover:text-[#1773EA]" />
                <FaInstagramSquare className="cursor-pointer text-4xl text-[#7a7b7b] hover:text-[#E88042] " />
                <FaLinkedin className="cursor-pointer text-4xl text-[#7a7b7b] hover:text-[#0A63BC]" />
                <SiYoutubemusic className="cursor-pointer text-4xl text-[#7a7b7b] hover:text-[#FF0033]" />
                <FaTwitterSquare className="cursor-pointer text-4xl text-[#7a7b7b] hover:text-[#1C9CEA]" />
              </div>
            </div>
            {/* third div */}
          </div>

          <p className="text-left md:text-center text-gray-600 mt-7">
            Copyright @2025 Best Food Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
