import AboutImage1 from "../../assets/about.jpg";
import AboutImage2 from "../../assets/about1.jpg";
import AboutImage3 from "../../assets/about2.jpg";
const AboutList = () => {
  return (
    <>
      <section className="main_padding py-24 ">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Our foods are{" "}
                <span className="text-[#d47036]">made with love</span>
              </h3>
              <p className="text-[#5e5e5e] leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt beatae delectus tempore minus vero a vitae voluptate
                quibusdam officia fuga optio quidem alias placeat consequatur
                accusamus, tenetur earum aut quod magni repellendus aliquid!
                Doloribus numquam sapiente aut, incidunt nisi ducimus eligendi,
                accusamus facere quo praesentium quis natus quasi tempore quae.
                Quos alias illum laboriosam reiciendis tempora ipsum facere
                quasi aspernatur deserunt sed tenetur odio, sint saepe
                perferendis fugiat nobis consequuntur iure explicabo a animi
                praesentium. Odit molestiae repellendus accusantium quaerat
                voluptatum quibusdam laboriosam illum exercitationem, sed,
                facere necessitatibus blanditiis corrupti. Non dolor commodi
                odio eum maiores mollitia totam accusamus nam!
              </p>
            </div>
            <div>
              <img
                src={AboutImage1}
                alt="about image 1"
                className="rounded w-full"
              />
            </div>
          </div>
          {/* first part */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
            <div>
              <img
                src={AboutImage2}
                alt="about image 1"
                className="rounded w-full"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Taste the difference with
                <span className="text-[#d47036] ml-1">
                  one handcrafted foods
                </span>
              </h3>
              <p className="text-[#5e5e5e] leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt beatae delectus tempore minus vero a vitae voluptate
                quibusdam officia fuga optio quidem alias placeat consequatur
                accusamus, tenetur earum aut quod magni repellendus aliquid!
                Doloribus numquam sapiente aut, incidunt nisi ducimus eligendi,
                accusamus facere quo praesentium quis natus quasi tempore quae.
                Quos alias illum laboriosam reiciendis tempora ipsum facere
                quasi aspernatur deserunt sed tenetur odio, sint saepe
                perferendis fugiat nobis consequuntur iure explicabo a animi
                praesentium. Odit molestiae repellendus accusantium quaerat
                voluptatum quibusdam laboriosam illum exercitationem, sed,
                facere necessitatibus blanditiis corrupti. Non dolor commodi
                odio eum maiores mollitia totam accusamus nam!
              </p>
            </div>
          </div>
          {/* second part */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Our foods are the perfect blend
                <span className="text-[#d47036] ml-1">
                  of tradition and innovation
                </span>
              </h3>
              <p className="text-[#5e5e5e] leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt beatae delectus tempore minus vero a vitae voluptate
                quibusdam officia fuga optio quidem alias placeat consequatur
                accusamus, tenetur earum aut quod magni repellendus aliquid!
                Doloribus numquam sapiente aut, incidunt nisi ducimus eligendi,
                accusamus facere quo praesentium quis natus quasi tempore quae.
                Quos alias illum laboriosam reiciendis tempora ipsum facere
                quasi aspernatur deserunt sed tenetur odio, sint saepe
                perferendis fugiat nobis consequuntur iure explicabo a animi
                praesentium. Odit molestiae repellendus accusantium quaerat
                voluptatum quibusdam laboriosam illum exercitationem, sed,
                facere necessitatibus blanditiis corrupti. Non dolor commodi
                odio eum maiores mollitia totam accusamus nam!
              </p>
            </div>
            <div>
              <img
                src={AboutImage3}
                alt="about image 1"
                className="rounded w-full"
              />
            </div>
          </div>
          {/* third party */}
        </div>
      </section>
    </>
  );
};

export default AboutList;
