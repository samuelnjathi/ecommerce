import React, {useContext} from "react";
import CartList from "../components/CartList";
import { CartContext } from "../context/CartContext";  

function Cart() {
    const { cartTotal } = useContext(CartContext);
    return (
        <>
        <h1 className="text-3xl font-semibold uppercase py-5 mx-[4%]">My Cart</h1>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mx-[4%]">
            <div>
                <CartList />
            </div>
            <div>
                <h1 className="text-2xl font-semibold pb-4">Order Summary</h1>
                <h3 className="text-gray-500">Subtotal <span className="text-black float-right font-bold">{cartTotal.toFixed(2)}</span></h3>
                <h3 className="text-gray-500">Shipping <span className="text-black float-right font-bold">0</span></h3>
                <h3 className="text-gray-500">Tax <span className="text-black float-right font-bold">0</span></h3>
                <hr className="text-gray-500 mt-4"/>
                <h3 className="text-black font-bold text-xl py-3">Total <span className="text-black text-3xl float-right font-semibold">{cartTotal.toFixed(2)}</span></h3>
                <hr className="text-gray-500 my-3"/>
    
                <button className="bg-black text-white w-full h-[3rem] rounded-3xl items-center mb-3 cursor-pointer">Checkout Now</button>


            </div>
        </div>
        </>
    )
}
export default Cart;