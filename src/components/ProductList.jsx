import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

export default function ProductList() {
    const {filteredProducts, loading} = useContext(ProductContext);
    if (!filteredProducts || filteredProducts.length === 0) {
        return <p className="text-xl mt-4 text-center font-medium text-red-500">Ooops...Error fetching Products!</p>
    }
    if (loading) return <Loader />
    return (
        <>
        {filteredProducts.map((product) => (<ProductCard key={product.id} product={product}/>))}
            
        </>
    )
}