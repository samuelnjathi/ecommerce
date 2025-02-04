import React from "react";

function Footer() {
    return (
        <>
        <footer className="mx-[4%] mt-10 ">
            <div className="flex justify-between mb-10">
                <div>
                    <h1 className="text-5xl font-black uppercase my-3">Tush Fashion</h1>
                    <p className="text-gray-500">Get newsletter updates for upcoming products and best discount for all item.</p>
                    <input className="border border-gray-500 h-[3rem] w-1/2  rounded-3xl p-5 my-5" type="text" placeholder="Your Email" />
                    <button className="h-[3rem] w-1/4 bg-black text-white rounded-3xl ml-5">Subscribe</button>
                </div>
                <div>
                    <h3 className="my-3 font-bold">Product</h3>
                    <ul className="text-gray-500">
                        <li>Tshirt</li>
                        <li>Jacket</li>
                        <li>Shoes</li>
                        <li>Pants</li>
                        <li>Sunglasses</li>
                        <li>Tuxedo</li>
                    </ul>
                </div>
                <div>
                    <h3 className="my-3 font-bold">Categories</h3>
                    <ul className="text-gray-500">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Pants</li>
                        <li>Gift</li>
                        <li>Nea Arrival</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="my-3 font-bold">Connect</h3>
                    <ul className="text-gray-500">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                
            </div>
            <div className="flex items-center justify-between bg-black text-gray-500 p-5 mt-5 -mx-[4%]">
                <p>© SoftLiving Technologies {new Date().getFullYear()}</p>
                <ul className="flex ">
                    <li className="pl-5">Terms & Conditons</li>
                    <li className="pl-5">Privacy Policy</li>
                    <li className="pl-5">Cookie Policy</li>
                </ul>
            </div>
        </footer>
        </>
    )
}
export default Footer;