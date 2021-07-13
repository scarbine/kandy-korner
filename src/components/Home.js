import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider";
import "./Home.css";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";

export const Home = () => {
  return (
    <>
      <h2>Kandy Korner</h2>

      <h3> Locations</h3>
      <LocationProvider>
        <LocationList />
      </LocationProvider>

      <h3> Products</h3>
      <ProductTypeProvider>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </ProductTypeProvider>

      <h3>Employees</h3>
      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>
    </>
  );
};
