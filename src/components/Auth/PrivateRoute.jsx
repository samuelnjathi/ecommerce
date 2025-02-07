import React from "react";
import { Navigate } from "react-router-dom"
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import Loader from "../Loader";

export default function PrivateRoute({children}) {
    const [ user, loading, error] = useAuthState(auth);
    if (loading) return <Loader />;
    if (error) return <p>Error: {error.message}</p>;
    return user ? children : <Navigate to="/auth" />
}