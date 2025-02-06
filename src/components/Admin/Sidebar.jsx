import React from "react";
import { Link } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col w-50 border border-gray-400 border-y-0 p-5">
                <div className="mb-20">
                <h1 className="text-2xl font-black">Tush Fashion</h1>
                </div>
                
                <div className="flex flex-col text-gray-500 font-medium">
                    <Link className="mb-3"><DashboardOutlinedIcon className="mr-1"/> Dashboard</Link>
                    <Link className="mb-3"><CategoryOutlinedIcon className="mr-1"/> Products</Link>
                    <Link className="mb-3"><InventoryOutlinedIcon className="mr-1"/> Orders</Link>
                </div>
            </div>
        </>
    )
}