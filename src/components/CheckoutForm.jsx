import React from "react";

export default function() {
    return (
        <><div>
            <h1>Checkout</h1>
            <label>Shipping Information</label>
            <form action="" method="post">
                <select name="" id="">
                    <option >Select Shipping option</option>
                    <option>Delivery</option>
                    <option>Pick Up</option>
                </select>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name" placeholder="Enter full name"/>

                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email" placeholder="Enter email address"/>

                <label htmlFor="phone-number">Phone number</label>
                <input type="number" id="pnumber" name="number" placeholder="Enter Phone number"/>

                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                    <option >Select Country</option>
                    <option>Delivery</option>
                    <option>Pick Up</option>
                </select>

                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder="Enter City"/>
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder="Enter State"/>
                    <label htmlFor="zipcode">Zip Code</label>
                    <input type="number" id="zipcode" name="zipcode" placeholder="Enter Zip Code"/>
                </div>
            </form>
            <h2>hwr</h2>
            <input type="radio" />
            
        </div>
        </>
    )
}