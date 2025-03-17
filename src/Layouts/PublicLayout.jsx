import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PublicLayout({children}) {
    return (
        <div className="bg-gray-100"> 
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}