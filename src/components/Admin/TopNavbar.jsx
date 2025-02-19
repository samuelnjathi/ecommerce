import React, { useState } from "react";
import { Tooltip, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Loader from "../Loader";

export default function TopNavbar() {
    const [ user, loading ] = useAuthState(auth);
    const [isOpen, setIsOpen] = useState(false);
    if (loading) return <Loader />
    return (
        <>
            <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 ">
                <div className="flex-1">
                    <h2 className="text-md">Hello, <span className="text-black font-medium">{user.displayName || user.email}</span></h2>
                </div>
                <div className="flex justify-end items-center">
                    <Tooltip title="Notications">
                        <IconButton>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <div className="relative">
                        <Tooltip title="User Profile">
                            <IconButton onClick={() => setIsOpen(!isOpen)}>
                                <AccountCircleIcon />
                            </IconButton>
                        </Tooltip>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-lg py-2">
                                <Tooltip title="Profile">
                                    <IconButton>
                                        <PersonIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Sign Out">
                                    <IconButton onClick={() => auth.signOut()}>
                                        <ExitToAppOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </>
    )

}