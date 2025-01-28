import { AboutTeamDetails } from "../../data/data";

const AboutTeam = () => {
  return (
    <>
      <section className="main_padding py-24">
        <div className="text-center mb-8">
          <h3 className="text-4xl mb-1  font-bold">
            Meat The <span className="text-[#D95103]">Team</span>
          </h3>
          <p className="text-lg text-[#1F7471] font-bold">
            Our talented team members who delivers only the best foods.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {AboutTeamDetails.map((list) => (
            <div key={list.id} className="relative aboutTeam">
              <img src={list.img} className="w-full" alt={list.title} />
              <h4 className="absolute bottom-4 left-2 text-white text-[22px] font-bold">
                {list.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
