import Hero from "./../components/homeComp/Hero";
import Customer from "./../components/homeComp/Customer";
import Services from "./../components/homeComp/Services";
import Testimonial from "./../components/homeComp/Testimonial";
import Form from "../components/homeComp/Form";
import Map from "../components/homeComp/Map";

const Home = () => {
  return (
    <>
      <Hero />
      <Customer />
      <Services />
      <Testimonial />
      <Form />
      <Map />
    </>
  );
};

export default Home;
