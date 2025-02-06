import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import login from "../../assets/images/login.jpg";

export default function Login(){
    return(
        <>
        <div className="flex gap-10 mx-[5%] bg-gray-100 rounded-2xl h-[80vh]">
            <div className="flex m-5 w-full">
                <img className="w-full rounded-2xl" src={login} alt="login image" />
            </div>
            <div className="flex flex-col justify-center m-5 w-full">
                <h1 className="text-2xl text-center font-semibold">Welcome Back</h1>
                <LoginForm />
            </div>
            
        </div>
        </>
    )

}