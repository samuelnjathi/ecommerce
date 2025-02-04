import React, { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../context/CartContext";


function CartItem({cart}) {
    const { removeToCart, updateToCart } = useContext(CartContext);
    return (
        <>
            <div className="flex gap-5 border border-black-200 rounded-md h-[200px] p-4 mb-3">
                <div className="flex-1">
                    <img src={cart.image} alt={cart.title} className="h-[120px] w-full"/>
                </div>
                <div className="flex-2">
                    <h3 className="font-semibold text-xl" >{cart.title}</h3>
                    <h3 className="font-semibold text-xl py-2">$: {cart.price}</h3>
                    <div className="flex justify-between items-center">
                        <h5 className="text-gray-500 pb-2">Size: xs</h5>
                        <div className="flex justify-between border border-black rounded-md cursor-pointer px-2 h-[2rem] w-1/4 text-xl ">
                            <button className="text-center cursor-pointer hover:bg-black hover:text-white" onClick={(e) => {
                                e.preventDefault();
                                updateToCart(cart.id, cart.quantity - 1);
                            } } disabled={cart.quantity <= 1}>-</button>
                            {/* <input className="text-center w-1/2 placeholder:text-black" type="text" placeholder="1" disabled /> */}
                            <p>{cart.quantity}</p>
                            <button  className="text-center cursor-pointer hover:bg-black hover:text-white" onClick={(e) => {
                                e.preventDefault()
                                updateToCart(cart.id, cart.quantity + 1 );
                            } }>+</button> 
                            
                        </div>
                        <DeleteIcon onClick={(e) => {
                            removeToCart(cart.id);
                            e.preventDefault()}} className="text-gray-500 cursor-pointer my-3"/>
                    </div>         
                </div>
            </div>
        </>
    )
}
export default CartItem;