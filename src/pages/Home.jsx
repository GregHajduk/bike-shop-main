import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <TopProducts />
    </>
  );
};

export default Home;
