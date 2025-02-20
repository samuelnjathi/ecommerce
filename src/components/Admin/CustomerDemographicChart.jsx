import React from "react";
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar, Legend, Tooltip, CartesianGrid } from "recharts";

const COLORS = ["#4F46E5", "#00C49F", "#FFBB28", "#FF8042", "#FF4560"];
const customerDemograpics = [
    { group: "18-24", count: 120 },
    { group: "25-34", count: 180 },
    { group: "35-44", count: 150 },
    { group: "45-54", count: 100 },
    { group: "55+", count: 80 },
  ];

export default function CustomerDemographicChart() {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-5">
                <div className="text-lg font-semibold">Customer Demographic Chart</div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={customerDemograpics}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="group" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill={COLORS[0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}