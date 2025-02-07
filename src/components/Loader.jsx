import React from "react";

export default function Loader() {
    return (
        <>
        <div className="flex justify-center items-center h-[80vh]">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
        </>
    )
}