import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Loader from "../Loader";
import { toast } from "react-toastify";

export default function EditProduct() {
    const { fetchProducts } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        rating: {
            rate: "",
            count: ""
        },
        image: "",
        description: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching product", error);
                setError("Error fetching product");
                setLoading(false);
            }
        } 
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProdusts => {
            return {...prevProdusts,
            [name] : value}
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "PUT",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json"
                }
                });
            fetchProducts();
            if (response.ok) {
                setSuccess(true);
                setError("");
                setLoading(false);
                setTimeout(() => {
                    navigate("/admin/products");
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setError("Unable to update Product data");
            setLoading(false);
        }
    }
    return (
        <>
         <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && toast.success("Product updated successfully!") }
            {loading ? <Loader /> : 
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium">Product Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={product.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Price:</label>
                    <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Rating:</label>
                    <input
                    type="decimal"
                    name="rating"
                    value={product.rating.rate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Image URL:</label>
                    <input
                    type="text"
                    name="imageUrl"
                    value={product.image}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Description:</label>
                    <textarea 
                        className="w-full p-2 border rounded"
                        name="description"
                        onChange={handleChange}
                        value={product.description} 
                        rows={8}></textarea>
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer"
                    disabled={loading}
                   >
                        {loading ? "Updating..." : "Update Product"} 
                </button>
            </form>}
            </div>
        </>
    )
}