import React from "react";

export default function OverviewCard({name, value, icon, color }) {
    return ( 
    <>
        <div className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-5"> 
            <div className={`text-white p-3 rounded-full ${color}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-gray-500">{name}</h3>
                <p className="text-2xl font-semibold">{value}</p>
            </div>
        </div>
    </>
    )
}