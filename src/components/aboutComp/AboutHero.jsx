import AboutHeroImg from "../../assets/aboutMain.png";

const AboutHero = () => {
  return (
    <section className="main_padding mt-[87px]  pt-14 py-56">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="">
          <h3 className="aboutH3 text-5xl text-[#0C6967] mb-6">About Us</h3>
          <span className="text-[#6d6d6d] inline-block text-lg mb-2">
            WE PRIDE OURSELF ON
          </span>
          <h4 className="text-2xl leadLine md:text-3xl font-bold">
            <span className="text-[#D95103]">Our authentic food recipes</span>
            <br /> passed down through <br /> generations
          </h4>
        </div>

        <div className="">
          <img
            src={AboutHeroImg}
            alt="About Hero Image"
            className="max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
