import React from 'react';


export default function HeaderImage({imgSrc}) {
    return (
        <div className="flex justify-center mb-10">
                <img className="rounded-2xl" src={imgSrc} alt="header image"  style={{height: "80vh", width: "100%"}}/>
        </div>
    )
}
