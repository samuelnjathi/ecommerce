import React from "react";
import CheckoutForm from "../components/CheckoutForm";  

export default function Checkout() {
    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:w-auto gap-10 mx-[4%] ">
                <div className="my-5 border bg-white shadow-md border-gray-400 rounded-lg">
                    <CheckoutForm />
                </div>
                <div className="my-5 border bg-white shadow-md border-gray-400 rounded-lg">
                    <h3>Review your cart</h3>
                </div>
            </div>
        </>
    )
}
