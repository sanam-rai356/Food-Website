import ServiceChefImage from "../../assets/serviceChef.png";

const AllergyHero = () => {
  return (
    <>
      <section className="main_padding mt-[87px]">
        <section className="main_padding mt-[87px]  pt-14 py-56">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div>
              <h3 className="aboutH3 text-5xl text-[#0C6967] mb-6">
                Allergy Advices
              </h3>
              <span className="text-[#6d6d6d] inline-block text-lg mb-2">
                AT OUR RESTAURANT
              </span>
              <h4 className="text-2xl leadLine md:text-3xl font-bold ">
                We use only the freshest and highest quality ingredients in all
                our dishes
                <span className="text-[#D95103] ml-2">
                  and offer our transparency in our ingredients labeling
                </span>
              </h4>
            </div>

            <div className=" ">
              <img
                src={ServiceChefImage}
                alt="service chef image"
                className="max-w-[500px]"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AllergyHero;
