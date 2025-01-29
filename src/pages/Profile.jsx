import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  console.log(user);
  console.log(isAuthenticated);
  console.log(isLoading);
  return (
    <>
      {isAuthenticated ? (
        <section className="main_padding mt-[87px] h-[70vh] bg-[#a7a7a7] flex flex-col items-center justify-center">
          <div className="bg-white w-[50%] mx-auto rounded-lg shadow-md p-5 flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-semibold">Welcome</h1>
            <img
              src={user.picture}
              alt="user picture"
              className="size-24 rounded-full border-[2px]"
            />
            <h2 className="text-3xl font-semibold">{user.name}</h2>
            <p className="text-xl">Email: {user.email}</p>
            <button
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
