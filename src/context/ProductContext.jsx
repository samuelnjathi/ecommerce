import React, {createContext, useCallback, useEffect, useState} from "react";
import { getProducts } from "../services/ProductApi";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const fetchProducts = useCallback( async () => {
        try {
            const data = await getProducts();
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false); 
        } catch (error) {
            console.error("Error fetching products", error);
            setLoading(false)
        } 
    },[]) 
        
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const  filterProducts = (category) => {
        if (category === "all"){
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered)
        }
    } 

    const deleteProduct = async (id) => {
        await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: 'DELETE'
        });
        setProducts(prevProducts => {
            return prevProducts.filter(product => product.id !== id)
        });
    }
return (
    <ProductContext.Provider value={{products, fetchProducts, filterProducts, filteredProducts, loading, deleteProduct}}>
        {children}
    </ProductContext.Provider>
)
} 