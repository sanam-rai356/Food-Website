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
            Copyright @2025 Best Food Pvt Ltd. All Rights Reserved. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Voluptates est
            doloribus illo sint laborum officia earum iusto dolorum aspernatur
            hic molestias dolores, sapiente aliquam, dicta odit autem nam
            nostrum. Non commodi facere, deleniti atque officiis numquam,
            veritatis voluptatem quia harum iste earum molestiae beatae quasi
            corrupti voluptate mollitia quaerat eveniet et a doloribus porro
            architecto. Aperiam cumque optio voluptas aliquid dolores reiciendis
            deserunt quae minima magni molestiae facere iure ducimus voluptates
            cupiditate, impedit illum quis perspiciatis libero accusantium totam
            possimus accusamus modi. Obcaecati sapiente tempore nemo quia eum
            harum odio, pariatur neque nihil repellat quam deleniti blanditiis
            adipisci at, qui, delectus quisquam ipsa nisi repudiandae illum eius
            quidem? Est laboriosam autem aliquid soluta suscipit. Excepturi,
            voluptatum? Fugiat, excepturi obcaecati. Dicta consequatur
            blanditiis vel officia tenetur debitis quas expedita id,
            necessitatibus molestiae ratione illum omnis sint eos fugit eligendi
            ad fugiat incidunt similique provident in. Repudiandae ab assumenda,
            temporibus magnam, quaerat voluptatem cumque tempore laborum
            sapiente, saepe dicta nobis obcaecati at dolores et ipsa impedit
            repellendus quod adipisci ea corrupti incidunt illo laudantium
            cupiditate. Magni libero, numquam nisi veritatis et repellendus,
            ducimus ratione vel temporibus voluptatibus cupiditate. Soluta,
            aspernatur ipsa! Provident itaque libero quam atque a corporis
            beatae ducimus recusandae impedit.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
