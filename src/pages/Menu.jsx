import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Menu = () => {
  const [apiData, setApiData] = useState([]);

  const DataFetch = async () => {
    const URL = "https://dummyjson.com/recipes";
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data.recipes);
    setApiData(data.recipes);
  };

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum magnam
      quas fugiat sequi inventore exercitationem molestiae pariatur similique
      debitis?
      <section className="mt-[87px] py-10 main_padding ">
        <div className="w-full">
          <h3 className="text-center text-3xl mb-8 md:text-4xl font-semibold">
            Our <span className="text-[#D95103] underline">Menu</span>
          </h3>
          {apiData.length > 0 ? (
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
              {apiData.map((food) => (
                <div
                  className="border-[1.5px] border-gray-300 p-5 rounded-lg shadow hover:shadow-lg flex flex-col items-center gap-2"
                  key={food.id}
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-56 h-48 object-cover rounded-lg"
                  />
                  <h1 className="text-xl font-semibold">{food.name}</h1>
                  <p>Cuisine : {food.cuisine}</p>
                  <p className="flex items-center gap-1">
                    Rating : {food.rating}{" "}
                    <FaStar className="text-yellow-400 text-lg" />
                  </p>
                  <Link
                    to={`/product/${food.id}`}
                    className="bg-[#ff7d32] hover:bg-[#D95103] text-white py-2 px-8 text-lg rounded-full"
                  >
                    View More
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;
