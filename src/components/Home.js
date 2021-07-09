import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import "./Home.css";

export const Home = () => {
  return (
    <>
      
        <h2>Kandy Korner</h2>

        <h3> Locations</h3>
        <LocationProvider>
          <LocationList />
        </LocationProvider>

        <h3> Products</h3>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
     
    </>
  );
};
