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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        explicabo ipsum nisi. Quo exercitationem magni quas beatae quis nemo ea
        sapiente, dolore, debitis fugiat consectetur aspernatur molestias omnis
        expedita architecto delectus possimus officiis vitae doloribus
        perspiciatis reiciendis. Ad consequuntur voluptates accusantium
        laboriosam laborum qui, culpa vel molestiae perspiciatis dolorem ex,
        eaque illo odit laudantium, recusandae aliquam. Provident ipsa
        praesentium libero veniam, quis tempore mollitia impedit totam esse
        ipsam voluptates repudiandae corrupti molestiae asperiores et dolore
        fugiat eligendi distinctio quia? Amet necessitatibus dolor nemo nostrum
        veniam ea praesentium aut, ex ab id cum, voluptate non? Dolorum aliquid
        non quisquam repellat dolores dolorem perspiciatis dolor! Neque
        doloribus culpa quae illo ab eveniet voluptates quisquam. Repudiandae
        quis exercitationem quaerat dolorum omnis reiciendis harum, eaque
        similique vitae magni. Incidunt voluptatibus officia nihil? Tempore
        porro, praesentium deserunt sequi quia ipsum incidunt, doloribus quas
        delectus accusamus odit. Rerum, tenetur. Minus possimus aliquid
        nesciunt, voluptate laboriosam hic tempore reiciendis ratione ducimus ex
        enim iste eius ullam eos aspernatur blanditiis pariatur? Dicta velit
        accusamus vel quod, sequi nobis praesentium quam voluptatibus in facilis
        sed nihil, vitae totam fugit eos atque laborum natus. Vel autem sint ad
        sed, sit tenetur asperiores necessitatibus atque rem temporibus deleniti
        laborum labore voluptate.
      </section>
    </>
  );
};

export default Menu;
