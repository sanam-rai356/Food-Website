import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Auth0Provider
      domain="dev-ytco100ahha4ui08.us.auth0.com"
      clientId="L065yIhaUTtjkCHXPP3Uc3pdeBOtbES7"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    ,
  </CartProvider>
);
