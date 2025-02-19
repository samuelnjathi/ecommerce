import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
    const location = useLocation();

    const menuItems = [
        {name: "Dashboard", path: "/admin/dashboard", icon: <DashboardOutlinedIcon />},
        {name: "Products", path: "/admin/products", icon: <CategoryOutlinedIcon />},
        {name: "Orders", path: "/admin/orders", icon: <InventoryOutlinedIcon />},
        {name: "Users", path: "/admin/users", icon: <GroupIcon /> },
        {name: "Settings", path: "/admin/settings", icon: <SettingsIcon />}
    ]
    return (
        <>
            <div className="w-64 bg-white shadow-lg p-5 h-full">
            <div className="text-2xl font-bold text-gray-700 mb-8">Tush Fashion</div>
            <nav>
                {menuItems.map(item => (
                    <Link 
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-4 py-3 rounded-lg mb-2 
                            ${location.pathname === item.path ? "bg-blue-200 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                    >
                        <span className="text-lg mr-3">{item.icon}</span>
                        {item.name}</Link>
                ))}
            </nav>
            </div>
        </>
    )
}