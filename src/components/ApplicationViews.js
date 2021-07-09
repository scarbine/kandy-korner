import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

        <ProductProvider>
      <ProductTypeProvider>
          <Route path="/products">
            <ProductList />
          </Route>
      </ProductTypeProvider>
        </ProductProvider>
    </>
  );
};
