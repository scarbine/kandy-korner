

import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { ProductTypeContext} from "../productTypes/ProductTypeProvider"
import './Product.css'


export const ProductList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes} = useContext(ProductTypeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getProductTypes()
    .then(getProducts)

  }, [])


  return (
    <div className="products">
      {console.log("ProductList: Render", products, productTypes)}
      {
        products.map(product => {
          const productType = productTypes.find(pt => pt.id === product.productTypes.id)
          return <ProductCard key={product.id} product={product} productType={productType} />
        })
      }
    </div>
  )
}

