import React from "react";
import "../Styles/Home.css";
import Products from "./Products";
import Product from "./Product";
import Mobile from "./Mobile";
import "react-lazy-load-image-component/src/effects/blur.css";
import Produc from "./Produc";
import Elec from "./Elec";
import MiniTV from "./MiniTV";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_V3._CB591760151_.jpg"
          alt="img"
          className="home__image"
        />

        <div className="home__row">
          <Products />
        </div>
      </div>
      <div className="home__row2">
        <Product />
      </div>
      <div className="home__row3">
        <Mobile />
      </div>
      <div className="home__row5">
        <MiniTV />
      </div>
      <div className="home__row2">
        <Produc />
      </div>

      <div className="home__row3">
        <Elec />
      </div>
    </div>
  );
};

export default Home;
