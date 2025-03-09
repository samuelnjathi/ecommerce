import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState(() => {
        try {
            const items = localStorage.getItem("cart");
            return items ? JSON.parse(items) : []
        } catch (error) {
            console.error("Error  reading from local storage", error);
            return null;
        }
    });
    
    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cartProducts));
        } catch (error) {
            console.error("Error writng to local storage",  error)
        }
    }, [cartProducts]);

    const cartCount = cartProducts?.reduce((total, item) => total + item.quantity, 0) || 0;
    const cartTotal = cartProducts?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;
        
    function addToCart (product) {
        setCartProducts(prevCart => {
            const existingItems = prevCart.find(p => p.id === product.id);
            
            if(existingItems) {
                toast.info(`${product.title} quantity added`)
                return prevCart.map(item => {
                  item.id === product.id ? {...item, quantity: item.quantity + 1 } : item
                });
            } else {
                toast.success(`${product.title} added to cart`)
                return [...prevCart, {...product, quantity: 1}];
            }
        }); 
    }

    function removeToCart(productId) {
        setCartProducts(prevCart => {
           return prevCart.filter(item => item.id !== productId);
        })
    }

    function updateToCart(id, quantity) {
        setCartProducts(prevCart => {
          return  prevCart.map(item => {
                item.id === id ? {...prevCart, quantity: quantity} : item
            })
        })
    }

    function clearCart() {
        setCartProducts([]);
    }

    return (
        <CartContext.Provider value={{ cartProducts, cartCount, cartTotal, addToCart, removeToCart, updateToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}