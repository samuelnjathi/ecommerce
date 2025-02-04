import React, {useState, useEffect, useContext} from "react";
import {  useParams } from "react-router-dom"; 
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext"; 

function ProductDetails() {
    const [product, setProduct] = useState([]);
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();

    useEffect(() => {
        setProduct(() => products.find(p => p.id === parseInt(id)))
    }, [])
   
    

    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 px-[4%] py-10">
                <div className="">
                    <img src={product.image} alt={product.title} className="h-[80vh] w-full rounded-md" />
                </div>
                <div className="px-5">
                    <h5 className="text-gray-500 pb-2">{product.category}</h5>
                    <h1 className="text-4xl pb-7">{product.title}</h1>
                    <h3 className="text-2xl font-medium pb-3">$ {product.price}</h3>
                    <h5 className="text-gray-500 pb-2">Size</h5>
                    <ul className="flex mb-10 cursor-pointer">
                        <li className="mr-5 w-17 text-center border border-gray-500 rounded-md p-2">XS</li>
                        <li className="mr-5 w-17 text-center border border-gray-500 rounded-md p-2">S</li>
                        <li className="mr-5 w-17 text-center border border-gray-500 rounded-md p-2">M</li>
                        <li className="mr-5 w-17 text-center border border-gray-500 rounded-md p-2">L</li>
                        <li className="mr-5 w-17 text-center border border-gray-500 rounded-md p-2">XL</li>
                        <li className="mr-5 w-17 text-center border border-gray-500 rounded-md p-2">XXL</li>
                    </ul>
                    <button className="bg-black text-white w-full h-[3rem] rounded-3xl items-center mb-3 cursor-pointer hover:bg-white hover:text-black hover:border">Checkout Now</button>
                    
                    <button onClick={() => addToCart(product)} className=" w-full h-[3rem] rounded-3xl items-center cursor-pointer hover:bg-gray-200">Add to Cart</button>
             
                    <hr className="text-gray-300 my-5"/>
                    <ul className="flex mb-5">
                        <li className="text-gray-500 mr-5 underline">Description</li>
                        <li className="text-gray-500 ">Reviews</li>
                    </ul>
                    <p className="text-gray-500">{product.description}</p>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;