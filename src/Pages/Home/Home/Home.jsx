import React, { useEffect, useState } from "react";
import Dentist from "../../../components/Dentist/Dentist";
import Feature from "../../../components/Feature/Feature";
import LatestBlog from "../../../components/LatestBlog/LatestBlog";
import Service from "../../../components/Service/Service";
import About from "../About/About";
import Promo from "../Appoinment-promo/Promo";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Slick from "../Slick/Slick";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  const [appoint, setAppoint] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppoint(true);
    }, 5000);
  }, []);

  return (
    <>
      <Banner />
      {appoint ? (
        <div className="appoint-container">
        <div className="appoint-subcontainer">
          <Appoinment onClose={() => setAppoint(!appoint)} />
        </div>
        </div>
      ) : (
        <div>
          <Feature />
          <About />
          <Service />
          <Dentist />
          <Gallery />
          <Testimonial />
          <LatestBlog />
          <Promo />
          <Slick />
        </div>
      )}
    </>
  );
};

export default Home;
