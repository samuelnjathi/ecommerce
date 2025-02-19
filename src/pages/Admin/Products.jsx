import React from "react";
import ProductTable from "../../components/Admin/ProductTable";

export default function Products() {
    return (
        <>
        <div className="m-7">
            <h1 className="text-2xl font-semibold mb-4">Products</h1>
            <ProductTable />
        </div>
        </>
    )
}