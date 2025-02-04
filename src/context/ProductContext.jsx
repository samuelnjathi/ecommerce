import React, {createContext, useEffect, useState} from "react";
import { getProducts } from "../services/ProductApi";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false); 
            } catch (error) {
                setLoading(false)
            }
            
        }
        fetchProducts();
    }, []);

    function filterProducts(category) {
        if (category === "all"){
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered)
        }
    } 

return (
    <ProductContext.Provider value={{products, filterProducts, filteredProducts, loading}}>
        {children}
    </ProductContext.Provider>
)
} 