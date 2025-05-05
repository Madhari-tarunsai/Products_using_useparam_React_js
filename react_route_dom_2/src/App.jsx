import React from "react";
import Navbar from "./Components/Navabar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products"
import data from "./Components/Products/PData"
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Recipes from "./Components/Recipes/Recipes";
import ReDetails from "./Components/ReDetails/ReDetails";


const App = () => {
  
  
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Products/Product/:id" element={<ProductDetails />} />
          <Route path="/recipes/recipe/:id" element={<ReDetails/>} />
          <Route path="/food" element={<Recipes />} />
          <Route path="/products" element={<Products ProductsData={data.products} />} />
          
      </Routes>
    </div>
  );
};

export default App;
