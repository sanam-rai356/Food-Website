import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  console.log(user);
  console.log(isAuthenticated);
  console.log(isLoading);
  return (
    <>
      {isAuthenticated ? (
        <section className="main_padding mt-[87px] h-[70vh] bg-gradient-to-r from-[#51A4BE] to-[#63B076] flex flex-col items-center justify-center">
          <div className="bg-white w-[40%] mx-auto rounded-lg shadow-md p-5 flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-semibold">Welcome</h1>
            <img
              src={user.picture}
              alt="user picture"
              className="size-24 rounded-full border-[2px] border-[#c1c1c1]"
            />
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-xl">Email: {user.email}</p>
            <button
              className=" bg-gradient-to-r from-[#D43C3D] to-[#EC8F7A] border-none py-2 px-12 rounded-full text-lg shadow-sm"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Profile;
