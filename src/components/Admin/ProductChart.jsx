import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4560"];
const bestSellingProducts = [
    { name: "Laptop", sales: 150 },
    { name: "Smartphone", sales: 120 },
    { name: "Headphones", sales: 90 },
    { name: "Smartwatch", sales: 80 },
    { name: "Camera", sales: 60 },
  ];

export default function ProductChart() {
    return (
        <>
        <div className="bg-white shadow-md p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Best Selling Products</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        dataKey={"sales"}
                        data={bestSellingProducts}
                        cx={"50%"}
                        cy={"50%"}
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {bestSellingProducts.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
        </>
    )
}