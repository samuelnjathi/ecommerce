import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../context/CartContext";

function Header() {
    const { cartCount } = useContext(CartContext);
    return (
        <>
            <header className="flex items-center justify-between mx-[3%]">
                <Link to="/" >
                    <h1 className="font-mono uppercase text-3xl font-black p-4">Tush Fashion</h1>
                </Link>
                <ul className="flex p-4">
                    <li className="pr-6 cursor-pointer"><SearchOutlinedIcon /> </li>
                    <Link to="/cart" className="flex justify-center relative">
                        <li className="pr-6 cursor-pointer"><ShoppingCartOutlinedIcon /></li>
                       
                        {cartCount > 0 &&  <span className="absolute -top-2 right-3 bg-red-500 text-xs text-white font-bold h-5 w-5 flex justify-center items-center rounded-md">{cartCount}</span> }
                    </Link>
                    <li className="pr-6 cursor-pointer"><LocalMallOutlinedIcon /></li>
                    <li className="pr-6 cursor-pointer"><FavoriteBorderOutlinedIcon /></li>
                    <li className="pr-6 cursor-pointer"><PersonOutlineOutlinedIcon /></li>
                </ul>
            </header>
            
        </>
    )
}
export default Header;