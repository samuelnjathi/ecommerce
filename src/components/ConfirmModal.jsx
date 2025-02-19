import React from "react";

export default function ConfirmModal({isOpen, onClose, onConfirm, title, message}) {
    if (!isOpen) return null
 return (
    <>
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-end space-x-3">
                    <button 
                        onClick={onClose}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Cancel
                    </button>
                    <button 
                        onClick={onConfirm}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer">
                        Confirm
                    </button>
                </div>
            </div>

        </div>
    </>
 )
}