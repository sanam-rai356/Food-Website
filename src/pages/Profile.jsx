import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  console.log(user);
  console.log(isAuthenticated);
  console.log(isLoading);
  return (
    <>
      {isAuthenticated ? (
        <section className="main_padding mt-[87px]">
          <h1>Welcome {user.name}</h1>
          <img src={user.picture} alt="user picture" />
          <p>Email: {user.email}</p>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Profile;
