import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./locations/LocationCard";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/*Render the animal list when http://localhost:3000/locations */}
      <Route path="/locations">
        <LocationCard />
      </Route>

    
    </>
  );
};
