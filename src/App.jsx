import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Allergy from "./pages/Allergy";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Navbar from "../src/components/homeComp/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/homeComp/Footer";
import Product from "./components/ProductDescription/Product";
import CartPage from "./components/cartPage/CartPage";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/allergy" element={<Allergy />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/protectedRoute" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
