import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <TopProducts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
