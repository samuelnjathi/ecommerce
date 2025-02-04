import React, {useContext} from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductFilter() {
    const { filterProducts } = useContext(ProductContext);
    return (
        <>
            <div className="flex justify-center mb-10">
                <button onClick={() => filterProducts("all")} className="border border-gray-500 h-[40px] w-32 hover:bg-black hover:text-white rounded-md mr-5 ">All</button>
                <button onClick={() => filterProducts("men's clothing")} className="border border-gray-500 h-[40px] w-32 hover:bg-black hover:text-white rounded-md mr-5 ">Men's</button>
                <button onClick={() => filterProducts("women's clothing")} className="border border-gray-500 h-[40px] w-32 hover:bg-black hover:text-white rounded-md mr-5 ">Women's </button>
                <button onClick={() => filterProducts("jewelery")} className="border border-gray-500 h-[40px] w-32 hover:bg-black hover:text-white rounded-md mr-5 ">Jewelery</button>
                <button onClick={() => filterProducts("electronics")} className="border border-gray-500 h-[40px] w-32 hover:bg-black hover:text-white rounded-md mr-5 ">Electronics</button>
            </div>
        </>

    )
}