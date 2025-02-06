import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function LoginForm() {
    const { login } = useContext(AuthContext); 
    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData(prevData => {
            return { ...prevData,
                [name] : value}
        })
    }
    return (
        <>
            <form className="flex flex-col" action="" onSubmit={() => login(inputData)}>
                {/* <label className="text-md font-medium mb-1 mt-3" htmlFor="fname">First Name</label>
                <input className="border border-gray-400 bg-white p-2 rounded-md " type="text" id="f" name="fname" placeholder="Enter First name" required/> */}
                <label className="text-md font-medium mb-1 mt-3" htmlFor="email">Email Address</label>
                <input onChange={handleChange} value={inputData.email} className="border border-gray-400 bg-white p-2  rounded-md" type="email" id="email" name="email" placeholder="Enter Email Address" required/>
                <label className="text-md font-medium mb-1 mt-3" htmlFor="email">Password</label>
                <input onChange={handleChange} value={inputData.password} className="border border-gray-400 bg-white p-2  rounded-md" type="password" id="password" name="password" placeholder="Enter Password" required/>
                {/* <label className="text-md font-medium mb-1 mt-3" htmlFor="email">Confirm Password</label>
                <input className="border border-gray-400 bg-white p-2  rounded-md" type="password" id="password" name="password" placeholder="Confirm Password" required/> */}
                <button className="bg-black border cursor-pointer text-white my-5 rounded-3xl h-9 hover:bg-white hover:text-black">Login</button>
            </form> 
        </>
    )
}