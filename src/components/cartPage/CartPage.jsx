import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import EmptyCartImage from "./../../assets/empty.png";

const CartPage = () => {
  const { state, dispatch } = useContext(CartContext);
  //   console.log(state.CartItems);
  const CarItems = state.CartItems;

  const TotalCartItems = CarItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  const TotalAmount = CarItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);
  return (
    <>
      {CarItems.length > 0 ? (
        <section className="main_padding mt-[87px] py-10">
          <div className="flex lg:flex-row flex-col  justify-between gap-10">
            <div className="flex-1">
              {CarItems.map((item) => {
                return (
                  <>
                    <div key={item.id} className="w-full mb-14">
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="flex w-[25%]  gap-2 items-center">
                            <img
                              src={item.image}
                              className="size-16"
                              alt={item.name}
                            />
                            <h1>{item.name}</h1>
                          </div>

                          <div className=" w-[20%]  flex flex-col items-center">
                            <p className="">Rs.{item.caloriesPerServing}</p>
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "Delete",
                                  payload: { id: item.id },
                                });
                              }}
                              className="bg-red-500 mt-2 border-none text-white py-2 px-8 rounded-lg"
                            >
                              Delete
                            </button>
                          </div>

                          <div className="flex gap-3 items-center">
                            <FaSquareMinus
                              onClick={() => {
                                dispatch({
                                  type: "Decrement",
                                  payload: { id: item.id },
                                });
                              }}
                              className="text-3xl cursor-pointer hover:text-[#6b6b6b]"
                            />
                            <span className="text-lg">{item.qty}</span>
                            <FaPlusSquare
                              onClick={() => {
                                dispatch({
                                  type: "Increment",
                                  payload: { id: item.id },
                                });
                              }}
                              className="text-3xl cursor-pointer hover:text-[#6b6b6b]"
                            />
                          </div>
                        </div>
                      </div>
                      {/* first div */}

                      {/* second div */}
                    </div>
                  </>
                );
              })}
            </div>

            <div className="w-[50%] lg:w-[30%] h-[300px]  ml-auto border-[1.5px]  flex flex-col items-center justify-center gap-3 border-gray-400 p-5 rounded">
              <h3 className="text-xl font-bold">Order Summary</h3>
              <h4 className="text-lg">
                <span className="font-bold">Total Price</span> : Rs.{" "}
                {TotalAmount}
              </h4>
              <NavLink
                to="/payment"
                state={[...CarItems]}
                className="bg-black text-white py-3 px-7 rounded-md"
              >
                Proceed To Checkout ({TotalCartItems})
              </NavLink>

              <button
                className="bg-red-500 text-white py-3 px-10 rounded-md"
                onClick={() => {
                  dispatch({ type: "ClearCart" });
                }}
              >
                Empty Cart
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className="main_padding mt-[87px] pt-5 pb-16 flex flex-col items-center">
          <img src={EmptyCartImage} alt="Empty Image" className="w-[250px]" />
          <h1 className="">
            Cart is empty
            <NavLink to="/menu" className="text-red-400 underline ml-2">
              Shop Now
            </NavLink>
          </h1>
        </div>
      )}
    </>
  );
};

export default CartPage;
