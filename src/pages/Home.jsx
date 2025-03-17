import React, { useState, useContext } from "react";
import ProductList from "../components/ProductList";
import HeaderImage from "../components/HeaderImage";
import fashion from "../assets/images/fashion.jpg";
import Nairobi from "../assets/images/Nairobi.jpg";
import ProductFilter from "../components/ProductFilter";
import Pagination from "../components/Pagination";
import { ProductContext } from "../context/ProductContext";

function Home() {
    const { filteredProducts } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="px-[5%] mt-5">
            <HeaderImage imgSrc={fashion} height={"80vh"} />
            <ProductFilter />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl uppercase py-3">New Collection</h1>
                <p className="text-gray-500">Our latest collection where classic and contemporary styles coverage in perfect harmony</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10">
                <ProductList products={currentItems} />
            </div>
            <Pagination 
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage} 
            />
            <HeaderImage  imgSrc={Nairobi} />
        </div>
    )
}
export default Home;