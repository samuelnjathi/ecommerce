import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";

export default function ProductTable() {
    const { products, deleteProduct } = useContext(ProductContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (!products || products.length === 0) {
        return <p className="text-xl mt-4 text-center font-medium text-red-500">Ooops...No Products Found!</p>
    }

    const handleDelete = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }
    const confirmDelete = () => {
        if (selectedProduct) {
            deleteProduct(selectedProduct.id);
            setIsModalOpen(false);
        }
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full border border-gray-200 shadow-md rounded-2xl">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="px-4 py-3 border-b">Image</th>
                            <th className="px-4 py-3 border-b">Product Name</th>
                            <th className="px-4 py-3 border-b">Price</th>
                            <th className="px-4 py-3 border-b">Stock</th>
                            <th className="px-4 py-3 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <img src={product.image} 
                                        alt={product.name}
                                        className="h-16 w-16 object-cover rounded-md" />
                                </td>
                                <td className="py-3 px-4">{product.title.slice(0, 70)}</td>
                                <td className="py-3 px-4">{product.price}</td>
                                <td className="py-3 px-4">in Stock</td>
                                <td className="py-3 px-4">
                                <Link
                                    to={`/admin/products/edit/${product.id}`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm mr-2 inline-flex items-center"
                                    >
                                       <EditIcon  fontSize="small" /> Edit
                                </Link>
                                    <button onClick={() => handleDelete(product)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm inline-flex items-center cursor-pointer">
                                        Delete <DeleteIcon fontSize="small" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                <ConfirmModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={confirmDelete}
                    title="Confirm Delete"
                    message={`Are you sure you want to delete "${selectedProduct?.title}"?`}
                />
            </div>
        </>
    )
}