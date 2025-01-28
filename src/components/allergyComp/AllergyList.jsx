import { FaRegCircle } from "react-icons/fa";

const AllergyList = () => {
  return (
    <>
      <section className=" w-full allergyDIV allergyList py-10">
        <h3 className="text-center text-3xl font-[900]">
          <span className="text-[#FB5D03]">Ingredients</span> Used
        </h3>
        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">For The Dough</h4>

          <ul className="list-none">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 120 gms refined flour.
            </li>

            <li className="flex items-center gap-2 my-3">
              <FaRegCircle className="text-red-500" /> 1/4 tsp baking powder.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp salt water.
            </li>
          </ul>
        </div>
        {/* first div */}
        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">
            For The Chicken Fillings
          </h4>

          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 cup chicken minced.
            </li>

            <li className="flex items-center gap-2 ">
              <FaRegCircle className="text-red-500" /> 1/2 cup onions, finely
              chopped.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp black pepper
              powder.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tbsp oil.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp garlic paste.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp soya sauce.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> salt.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp vinegar.
            </li>
          </ul>
        </div>
        {/* second div */}

        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">
            For The Vegetarian Fillings
          </h4>

          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 cup cabbage and carots,
              grated.
            </li>

            <li className="flex items-center gap-2 ">
              <FaRegCircle className="text-red-500" /> 2 tbsp onions, finely
              chopped.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tbsp ginger, finely
              chopped.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tsp oil.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp vinegar.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp soya sauce.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> salt.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp vinegar.
            </li>
          </ul>
        </div>
        {/* third div */}

        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">For Chilli Sauce</h4>

          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 25 gram garlic peeled.
            </li>

            <li className="flex items-center gap-2 ">
              <FaRegCircle className="text-red-500" /> 6 gms whole chillies.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 3 tbsp vinegar.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tbsp oil.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> salt.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> sugar.
            </li>
          </ul>
        </div>
        {/* forth div */}
      </section>
    </>
  );
};

export default AllergyList;
