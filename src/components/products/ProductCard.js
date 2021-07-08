import React from "react"
import './Product.css'


export const ProductCard = ({product}) => {
	return(
		<section className="product">
			<h3 className="product_name">{product.name}</h3>
			<div className="product_type">{product.productTypes.name}</div>
			<div className="product_price">{product.price}</div>
	    	</section>
	)
}