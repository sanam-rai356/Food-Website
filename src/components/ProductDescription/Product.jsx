import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaSquareMinus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { GiFlowerStar } from "react-icons/gi";
import { CartContext } from "../../context/CartProvider";

const Product = () => {
  const { id } = useParams();
  const [singlePage, setSinglePage] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instruction, setInstruction] = useState([]);
  const { state, dispatch } = useContext(CartContext);

  const SingleDetail = async () => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    // console.log(data.name);
    setSinglePage(data);
    setIngredients(data.ingredients);
    setInstruction(data.instructions);
  };

  useEffect(() => {
    SingleDetail();
  }, [id]);

  return (
    <>
      <section className="main_padding mt-[87px] py-10">
        <div className="w-full">
          {singlePage ? (
            <div>
              <h3 className="text-3xl mb-8 md:text-4xl flex gap-2 justify-center font-semibold">
                <span className="text-[#D95103] underline">
                  {singlePage.name}
                </span>
                Recipe
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className=" flex justify-start md:justify-end">
                  <img
                    src={singlePage.image}
                    className="w-96 rounded-md"
                    alt={singlePage.name}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold">{singlePage.name}</h1>
                  <h2 className="text-xl">Cuisine : {singlePage.cuisine}</h2>
                  <h3 className="flex items-center gap-1 text-lg">
                    Rating : {singlePage.rating}
                    <FaStar className="text-yellow-400 text-lg" />
                  </h3>
                  <h4 className="text-[#F85606] text-2xl font-semibold">
                    Rs. {singlePage.caloriesPerServing} /-
                  </h4>

                  <div className="flex gap-3 flex-wrap">
                    <button className="bordor-none bg-[#26ABD4] hover:bg-[#25829e] text-white py-2 px-12 text-lg rounded">
                      Buy Now
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "AddToCart", payload: singlePage })
                      }
                      className="bordor-none bg-[#F85606] hover:bg-[#c25d2a] text-white py-2 px-12 text-lg rounded"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              {/* first part */}

              <div className="mt-16">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Ingredients :
                    </h3>
                    {ingredients.map((list) => (
                      <ul key={list} className="flex flex-col ">
                        <li className="my-[6px] font-semibold flex gap-1 items-center">
                          <GiFlowerStar /> <span>{list}</span>
                        </li>
                      </ul>
                    ))}
                  </div>
                  {/* ingredients div */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Instructions :
                    </h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-[17px] flex gap-1">
                        <span className="font-semibold">
                          Preparation Time :
                        </span>
                        {singlePage.prepTimeMinutes} min
                      </p>
                      <p className="text-[17px] flex gap-1">
                        <span className="font-semibold">Cooking Time :</span>
                        {singlePage.cookTimeMinutes} min
                      </p>
                      <p className="text-[17px] flex gap-1">
                        <span className="font-semibold">Difficulty :</span>
                        {singlePage.difficulty}
                      </p>
                      <p className="text-[17px] ">
                        <span className="font-semibold mr-1">
                          Preparation :
                        </span>
                        {instruction.join(" ")}
                      </p>
                    </div>
                  </div>
                  {/* instruction div */}
                </div>
              </div>
              {/* second part */}
            </div>
          ) : (
            <div>
              <h1>Page is loading</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
