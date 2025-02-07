import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../context/CartContext";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function Header() {
    const { cartCount } = useContext(CartContext);
    return (
        <>
            <header className="flex items-center justify-between mx-[4%] p-4">
                <Link to="/" >
                    <h1 className="font-mono uppercase text-3xl font-black ">Tush Fashion</h1>
                </Link>
                <div className="flex items-end justify-between gap-4">
                    <Tooltip title="Search">
                        <IconButton color="inherit">
                            <SearchOutlinedIcon /> 
                        </IconButton>
                    </Tooltip>
                    <Link to="/cart" className="relative">
                            <Tooltip title="My Cart">
                                <IconButton color="inherit">
                                    <ShoppingCartOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        {cartCount > 0 &&  <span className="absolute -top-1 right-0 bg-red-500 text-xs text-white font-bold h-5 w-5 flex justify-center items-center rounded-md">{cartCount}</span> }
                    </Link>
                    <Tooltip title="Wishlist">
                        <IconButton color="inherit">
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Link to="auth">
                        <Tooltip title="Login/Sign Up">
                            <IconButton color="inherit">
                                <PersonOutlineOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>   
                </div>
            </header>
            
        </>
    )
}
export default Header;