import ServiceImage1 from "../../assets/serviceImg1.jpg";
import ServiceImage2 from "../../assets/serviceImg2.jpg";
import QR from "../../assets/qr.png";

const ServiceList = () => {
  return (
    <>
      <section className="main_padding py-24 bg-[#E4E4E4]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 mb-24 items-center">
          <div>
            <h3 className="text-xl font-bold">Private Party</h3>
            <p className="my-4 text-[#656565] leading-[26px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              possimus explicabo sunt quibusdam sit fugit. Suscipit et, voluptas
              commodi, eius blanditiis sint doloribus excepturi qui labore
              facere quae aperiam rerum.
            </p>
            <div className="bg-white rounded-md shadow-md p-6 flex justify-between gap-6 items-center">
              <div className=" flex-1">
                <h4 className="text-[#116C6A] text-xl font-bold">
                  Scan the QR Code
                </h4>
                <p className="text-[#656565]">
                  You can also check our services.
                </p>
              </div>

              <div>
                <img src={QR} alt="qr" className="w-28" />
              </div>
            </div>
          </div>

          <div>
            <img
              src={ServiceImage1}
              alt="service image 1"
              className="w-full rounded-2xl shadow-md"
            />
          </div>
        </div>
        {/* first div */}

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src={ServiceImage2}
              alt="service image 1"
              className="w-full rounded-2xl shadow-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Categring</h3>
            <p className="my-4 text-[#656565] leading-[26px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              possimus explicabo sunt quibusdam sit fugit. Suscipit et, voluptas
              commodi, eius blanditiis sint doloribus excepturi qui labore
              facere quae aperiam rerum.
            </p>
            <div className="bg-white rounded-md shadow-md p-6 flex justify-between gap-6 items-center">
              <div className=" flex-1">
                <h4 className="text-[#116C6A] text-xl font-bold">
                  Scan the QR Code
                </h4>
                <p className="text-[#656565]">
                  You can also check our services.
                </p>
              </div>

              <div>
                <img src={QR} alt="qr" className="w-28" />
              </div>
            </div>
          </div>
        </div>
        {/* second div */}
      </section>
    </>
  );
};

export default ServiceList;
