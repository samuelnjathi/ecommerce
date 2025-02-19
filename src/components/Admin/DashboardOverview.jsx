import React from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OverviewCard from "./OverviewCard";

export default function DashboardOverview() {
    const overviewdata = [ 
        {name: "Total Revenue", value: "$ 12,000", icon: <AttachMoneyIcon />,  color: "bg-green-500"},
        {name: "Total Orders", value: "200", icon: <ShoppingCartOutlinedIcon />,  color: "bg-blue-500"},
        {name: "Total Products", value: "100", icon: <CategoryOutlinedIcon />,  color: "bg-yellow-500"},
        {name: "Pending Orders", value: "10", icon: <AccessTimeIcon />,  color: "bg-red-500"}
    ]
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {overviewdata.map((item, index) => (
                <OverviewCard key={index} {...item} />
            ))}

        </div>
        </>
    )
}