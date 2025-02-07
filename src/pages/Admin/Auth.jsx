import React, { useState } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import login from "../../assets/images/login.jpg";

export default function Auth(){
   
    return(
        <>
            <div className="flex gap-10 m-[5%] bg-gray-100 rounded-2xl h-[80vh]">
                <div className="flex m-5 w-full">
                    <img className="w-full rounded-2xl" src={login} alt="login image" />
                </div>
                <div className="flex flex-col justify-center m-5 w-full">
                    
                    <AuthForm  />
                </div>
            </div>
        </>
    )

}