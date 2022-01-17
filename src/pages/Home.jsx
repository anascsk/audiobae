import React from "react";

import Categories from "../components/Categories";

import Navbar from "../components/Navbar";

import Slider from "../components/Slider"
import PopularProducts from "../components/PopularProducts"
import Footer from "../components/Footer";
import ProductList from "./ProductList";


const Home = () => {
  return (
 
    <div>
      
    
      <Slider/>
      <Categories/> 
      <PopularProducts/>
     
    
    
      
    </div>
  
  );
};

export default Home;
