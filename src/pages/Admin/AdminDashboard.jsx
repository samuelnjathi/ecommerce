import React, {useState} from "react";
import DashboardOverview from "../../components/Admin/DashboardOverview";
import SalesChart from "../../components/Admin/SalesChart";


export default function AdminDashboard() {
    
    return ( 
        <>
            <div className="flex h-screen bg-gray-100 p-6">
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold mb-4">My Dashboard</h1>
                    <div className="p-6 space-y-6">
                        <DashboardOverview />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SalesChart />
                    </div>
                </div>
                
            </div>
           
        </>
    )

}