import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
