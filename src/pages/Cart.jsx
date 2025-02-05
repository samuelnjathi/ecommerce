import React, {useContext} from "react";
import CartList from "../components/CartList";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";  

function Cart() {
    const { cartTotal } = useContext(CartContext);
    return (
        <>
        
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mx-[4%]">
            <div className="my-5">
                <h1 className="text-2xl font-semibold uppercase mb-3">My Cart</h1>
                <CartList />
            </div>
            <div className="my-5">
                <h1 className="text-2xl font-semibold mb-3">Order Summary</h1>
                <h3 className="text-gray-500">Subtotal <span className="text-black float-right font-bold">{cartTotal.toFixed(2)}</span></h3>
                <h3 className="text-gray-500">Shipping <span className="text-black float-right font-bold">0</span></h3>
                <h3 className="text-gray-500">Tax <span className="text-black float-right font-bold">0</span></h3>
                <hr className="text-gray-500 mt-4"/>
                <h3 className="text-black font-bold text-xl py-3">Total <span className="text-black text-3xl float-right font-semibold">{cartTotal.toFixed(2)}</span></h3>
                <hr className="text-gray-500 my-3"/>
                <Link to="/checkout">
                    <button className="bg-black hover:bg-green-500 text-white w-full h-[3rem] rounded-3xl items-center mb-3 cursor-pointer">Checkout Now</button>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Cart;