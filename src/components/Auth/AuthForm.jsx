import React, { useState, useContext, useEffect } from "react";
import { login, register, googleSignIn, logout} from "../../firebase/authService";
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";



export default function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ user, loading] = useAuthState(auth);
    const [isRegistered, setIsRegistered] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate("/admin/dashboard");
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegistered) {
                await register(email, password);
                alert("User registered successfully");
            } else {
                await login(email, password);
                alert("User logged in successfully");
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
        
    }
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            alert("User Signed in successfully");
        } catch(error) {
            alert(error.message);
            console.log(error);
        }
    }
    
    return (
        <>
            <h1 className="text-2xl text-center font-semibold">{isRegistered ? "Register Here" : "Login Here"}</h1>
            <div className="flex flex-col">
            <button onClick={handleGoogleSignIn} className="bg-red-500 border cursor-pointer text-white my-5 rounded-3xl h-9 hover:bg-red-400"><GoogleIcon className="mr-2"/>Sign in with google</button>
            <h1 className="text-center font-semibold">OR</h1>
                <label className="text-md font-medium mb-1 mt-3" htmlFor="email">Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                    className="border border-gray-400 bg-white p-2  rounded-md" 
                    type="email"
                    placeholder="Enter Email Address" 
                    required/>
                <label className="text-md font-medium mb-1 mt-3" htmlFor="email">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    className="border border-gray-400 bg-white p-2  rounded-md" 
                    type="password" 
                    placeholder="Enter Password" 
                    required/>
                <Link onClick={() => setIsRegistered(!isRegistered)} className="text-blue-500 underline my-1">{isRegistered ? "Already have an account? Login" :" Don't have an account? Register"}</Link>
                <button onClick={handleSubmit} className="bg-black border cursor-pointer text-white mt-2 rounded-3xl h-9 hover:bg-white hover:text-black">{isRegistered ? "Sign Up" : "Login" }</button>
               
            </div> 
        </>
    )
}