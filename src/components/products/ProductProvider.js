import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const ProductContext = createContext();

// This component establishes what data can be used.
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return fetch("http://localhost:8088/products")
      .then((res) => res.json())
      .then(setProducts);
  };

  const addProducts = (productObj) => {
    return fetch("http://localhost:8088/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    }).then(getProducts);
  };

 
  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        addProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
