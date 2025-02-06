import React from "react";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function() {
    return (
        <><div className="flex flex-col mx-10">
            <h1 className="text-2xl font-bold my-10">Checkout</h1>
            <label className="text-xl font-semibold">Shipping Information</label>
            <form className="flex flex-col justify-center py-5" action="" method="post">
                <div className="flex gap-4">
                    <div className="flex justify-between gap-3 border border-blue-500 text-blue-500 rounded-md p-4">
                        <input type="radio" name="delivery" />
                        <LocalShippingOutlinedIcon />
                        Deliverly
                    </div>
                    <div className="flex justify-between gap-3 border  border-blue-500 text-blue-500 rounded-md p-4">
                        <input type="radio" name="pick-up" />
                        <HomeOutlinedIcon />
                        Pick-Up
                    </div>
                   
                    
                </div>
                <label className="text-md font-medium mb-1 mt-3" htmlFor="full-name">Full Name</label>
                <input className="border border-gray-400 p-2 rounded-md" type="text" id="full-name" name="full-name" placeholder="Enter Full name"/>
                
                <label className="text-md font-medium mb-1 mt-3" htmlFor="email">Email Address</label>
                <input className="border border-gray-400 p-2  rounded-md" type="email" id="email" name="email" placeholder="Enter Email Address"/>

                <label className="text-md font-medium mb-1 mt-3" htmlFor="number">Phone Number</label>
                <input className="border border-gray-400 p-2 rounded-md" type="number" id="number" name="number" placeholder="Enter Phone number"/>
                
            
                <label className="text-md font-medium mb-1 mt-3" htmlFor="country">Country</label>
                <select className="border border-gray-400 p-2 rounded-md" name="country" id="country">
                    <option >Select Country</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                </select>

                <div className="flex gap-3">
                    <div className="flex flex-col">
                        <label className="text-md font-medium mb-1 mt-3" htmlFor="city">City</label>
                        <input className="border border-gray-400 p-2 w-40 rounded-md" type="text" id="city" name="city" placeholder="Enter City"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-md font-medium mb-1 mt-3" htmlFor="state">State</label>
                        <input className="border border-gray-400 p-2 w-45 rounded-md" type="text" id="state" name="state" placeholder="Enter State"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-md font-medium mb-1 mt-3" htmlFor="zipcode">Zip Code</label>
                        <input className="border border-gray-400 p-2 w-45 rounded-md" type="number" id="zipcode" name="zipcode" placeholder="Enter Zip Code"/>
                    </div>
                    
                </div>
            </form>
        </div>
        </>
    )
}