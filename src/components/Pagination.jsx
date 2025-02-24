import React from "react";

export default function Pagination({totalItems, itemsPerPage, currentPage, onPageChange}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return(
        <>
        <div className="flex justify-center my-4 space-x-2">
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                className={`bg-black text-white p-2 rounded disabled:opacity-50 ${
                    currentPage === 1 && "cursor-not-allowed"
                }`}
                disabled={currentPage === 1} 
            >Prev</button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-4 mx-1 border rounded ${
                        currentPage === index + 1 ? "bg-black text-white" : "bg-white text-black"
                    }`}
                >{index + 1}</button>
            ))}
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                className={`bg-black text-white p-2 rounded disabled:opacity-50 ${
                    currentPage === totalPages && "cursor-not-allowed"
                }`}
                disabled={currentPage === totalPages}
            >Next</button>
        </div>
        </>
    )

}
