import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";

export default function CartList() {
    const { cartProducts, clearCart } = useContext(CartContext)
    return (
        <>
        {cartProducts.length === 0 ? (
            <div className="flex justify-center">
                <h1 className="text-2xl font-semibold">Oops...Your Cart is Empty!</h1>
            </div> 
        ) : ( 
            <>
                <div className="">
                <button onClick={() => clearCart()} className="h-10 w-1/4 text-white text-xl font-semibold rounded-md bg-red-500 hover:bg-red-400 mb-5 cursor-pointer">Clear Cart</button>
                </div>
                {cartProducts.map((cart) => <CartItem key={cart.id} cart={cart} />)}
            </>
            )}
            
        </>
    )
}