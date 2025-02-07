import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

export default function ProductList() {
    const {filteredProducts, loading} = useContext(ProductContext);
    if (loading) return <Loader />
    return (
        <>
        {filteredProducts.map((product) => (<ProductCard key={product.id} product={product}/>))}
            
        </>
    )
}