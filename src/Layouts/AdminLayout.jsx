import React from "react";
import Sidebar from "../components/Admin/Sidebar";
import TopNavbar from "../components/Admin/TopNavbar";

export default function AdminLayout({children}) {
    return (
        <>
        <div className="flex h-screen">
          <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopNavbar />
                <main>{children}</main>
            </div>
        </div>
        </>
        
    )
}