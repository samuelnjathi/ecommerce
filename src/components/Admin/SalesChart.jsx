import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function SalesChart() {
    const mockSalesData = [
        { date: "Jan 1", revenue: 500 },
        { date: "Jan 2", revenue: 700 },
        { date: "Jan 3", revenue: 400 },
        { date: "Jan 4", revenue: 650 },
        { date: "Jan 5", revenue: 900 },
        { date: "Jan 6", revenue: 1200 },
        { date: "Jan 7", revenue: 800 },
        { date: "Jan 8", revenue: 1500 },
        { date: "Jan 9", revenue: 1300 },
        { date: "Jan 10", revenue: 1100 },
      ];
return (
    <>
    <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-3">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
    </>
)
}