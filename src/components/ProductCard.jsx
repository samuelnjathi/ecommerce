import React, {useContext} from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../context/CartContext";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function ProductCard({product}) {
    const { addToCart } = useContext(CartContext)
    return (
        <>
            <div className="flex flex-col p-4  h-[430px] w-full border border-gray-500 rounded-2xl">
                <div className="flex-1">
                    <img  className="rounded-md h-[150px] w-full" src={product.image} alt={product.title} />
                    <h3 className="font-bold text-xl py-2" >{product.title}</h3>
                </div>
                <h3 className="font-bold text-2xl py-3">$ {product.price}</h3>
                <div className="flex justify-center items-baseline gap-4">
                    <div className="flex-1">
                        <Link to={`/product/${product.id}`} >
                            <button className="hover:text-black border hover:bg-white border-gray-500 bg-black  text-white w-full h-[3rem] rounded-3xl items-center mb-3 cursor-pointer">View Details</button>
                        </Link>
                    </div>
                    <Tooltip title="Add to Wishlist">
                        <IconButton color="inherit">
                             <FavoriteBorderOutlinedIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add to Cart" >
                        <IconButton color="inherit">
                            <ShoppingCartOutlinedIcon onClick={() => addToCart(product)} /> 
                        </IconButton>
                    </Tooltip>
                        
                    <div>
                        
                    </div>
                        
                   




                </div>
                
            </div>

        </>
    )
}
export default ProductCard;