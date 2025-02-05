import React from "react";
import CheckoutForm from "../components/CheckoutForm";  

export default function Checkout() {
    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mx-[4%]">
                <div className="my-5">
                    <CheckoutForm />
                </div>
                <div className="my-5"></div>
            </div>
        </>
    )
}
