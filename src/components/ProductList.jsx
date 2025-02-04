import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const {filteredProducts, loading} = useContext(ProductContext);
    if (loading) return ( <>
        <div className="loading">Loading...</div>
    </>)
    return (
        <>
        {filteredProducts.map((product) => (<ProductCard key={product.id} product={product}/>))}
            
        </>
    )
}