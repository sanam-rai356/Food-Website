import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = { username: username, password: password };

    setAllData([...allData, newdata]);
    setUserName("");
    setPassword("");
    console.log(allData);
  };

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  console.log(user);
  console.log("isAuthenticated", isAuthenticated);
  console.log("isLoading", isLoading);

  return (
    <>
      <section className="main_padding my-[30px]">
        <div className="flex  justify-center  ">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-y-5 px-20 py-10  border-2 border-gray-300 rounded-lg my-20"
          >
            <h1 className="font-bold text-2xl cursor-pointer mb-8 ">
              Login to your account
            </h1>
            <label htmlFor="name">
              <h1 className="font-semibold">Username</h1>
              <input
                type="text"
                placeholder="Username"
                id="name"
                className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80"
                autoComplete="off"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <label htmlFor="password">
              <h1 className="font-semibold">Password</h1>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                className="border-2 border-gray-300 px-4 py-2 text-md rounded-md  w-80"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <div className="flex justify-between  w-80">
              <div className="text-gray-500">
                <input type="checkbox" className="cursor-pointer " /> Remember
                me
              </div>

              <p className=" text-blue-600 font-semibold text-md cursor-pointer hover:underline ">
                Forgot Password?
              </p>
            </div>
            {/* remember me */}

            <div className="-mb-2 flex gap-4">
              <input type="checkbox" className="cursor-pointer -ml-10" />
              <p className="text-gray-500 font-serif">
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer underline">
                  terms and conditions.
                </span>
              </p>
            </div>
            {/* terms and condition */}

            <button className=" px-6 py-2 text-md font-semibold rounded-md bg-green-600 text-white  hover:bg-orange-500 hover:text-white mt-4 w-full">
              Login
            </button>
            {/* Login */}

            <button
              onClick={() => {
                loginWithRedirect();
              }}
              className="border-[3px] border-black w-full p-3 hover:bg-black hover:text-white rounded-full flex gap-1 justify-center items-center"
            >
              <FcGoogle className="text-2xl" />
              <span className="texl-xl inline-block font-semibold">
                Login With Google
              </span>
            </button>
            {/* Login with google */}

            <h2 className="text-lg text-gray-500">
              Don't have an account?
              <NavLink
                to="/signup "
                className={"text-blue-700 ml-1 text-md font-semibold underline"}
              >
                Signup
              </NavLink>
            </h2>
            {/* do you have account */}
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
