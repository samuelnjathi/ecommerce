import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';



export default function TopNavbar() {
    return (
        <>
            <div className="flex border border-gray-400 border-x-0 h-15 p-5 text-gray-500">
                <div className="flex-1">
                    <h2 className="text-xl">Hello, <span className="text-black font-medium">Samuel</span></h2>
                </div>
                <div className="flex justify-end items-center">
                    <Tooltip title="Notications">
                        <IconButton>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Sign Out">
                        <IconButton>
                            <ExitToAppOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </>
    )

}