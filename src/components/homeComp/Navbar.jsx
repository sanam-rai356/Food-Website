import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaCartShopping } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from "../../context/CartProvider";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const TotalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  const [nav, setNav] = useState(true);
  const { isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <nav className="main_padding fixed top-0 left-0 z-50 py-3 bg-[#FBFBFB] shadow flex justify-between items-center gap-2">
        <Link to="/">
          <img src={`/logo.png`} alt="logo" className="w-16" />
        </Link>

        <ul className=" hidden lg:flex  gap-5 items-center">
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

          {isAuthenticated ? (
            <li>
              <Link
                onClick={() => {
                  logout();
                }}
                className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
          {/* login/logout section */}

          <li className="relative">
            <Link
              className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
              to="/cartpage"
            >
              <FaCartShopping className="text-2xl" />
              {TotalItems > 0 ? (
                <span className="size-6 absolute -top-3 -right-4 bg-red-500 text-white text-lg rounded-full flex flex-col justify-center items-center">
                  {TotalItems}
                </span>
              ) : (
                ""
              )}
            </Link>
          </li>
        </ul>
        {/* first ul */}

        {nav ? (
          ""
        ) : (
          <ul className=" fixed z-50 bg-[#FBFBFB] shadow-lg h-[100vh] w-[250px] top-0 right-0 flex flex-col  gap-5 items-start p-7">
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

            <li className="relative">
              <Link
                className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                to="/cartpage"
              >
                <FaCartShopping className="text-2xl" />
                {TotalItems > 0 ? (
                  <span className="size-6 absolute -top-3 -right-4 bg-red-500 text-white text-lg rounded-full flex flex-col justify-center items-center">
                    {TotalItems}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </li>
            <ImCross
              onClick={() => setNav(true)}
              className="text-3xl cursor-pointer absolute top-5 right-5"
            />
          </ul>
        )}
        {/* second ul */}

        {/* hide part */}
        <div className=" gap-5 items-center flex ">
          <Link to="https://www.facebook.com/sanam.rai.79/" target="_blank">
            <FaFacebook className="text-3xl lg:block hidden text-[#5b5d5f]" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/sanam-rai-512818329/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl lg:block hidden text-[#5b5d5f]" />
          </Link>

          <Link to="https://www.instagram.com/" target="_blank">
            <FaInstagramSquare className="text-3xl lg:block hidden text-[#5b5d5f]" />
          </Link>

          <Link
            className="bg-[#D95103] hover:bg-white hover:text-[#5b5d5f] border-[1.5px] border-[#D95103] text-white py-2 px-8 rounded-full text-lg"
            to="/contact"
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <li>
              <Link
                className="font-semibold text-[#5b5d5f] hover:text-[#7f8182] text-[16px]"
                to="/profile"
              >
                <img
                  src={user.picture}
                  alt={user.name}
                  className="size-9 rounded-full cursor-pointer border-[2px] border-black"
                />
              </Link>
            </li>
          ) : (
            <FaUser className="text-2xl cursor-pointer" />
          )}
          {/* user profile section */}
        </div>
        {/* hide part */}

        <GiHamburgerMenu
          onClick={() => setNav(false)}
          className="text-4xl block  lg:hidden cursor-pointer"
        />
      </nav>
    </>
  );
};

export default Navbar;
