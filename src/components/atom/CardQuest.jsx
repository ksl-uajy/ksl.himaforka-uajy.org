import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs"

const CardQuest = ({ nama, img , linkWA, linkIG}) => {
    const [size , setSize] = useState(40);

    useEffect(() =>{
        if (screen.width < 768) {
            setSize(25)
        }else if (screen.width >= 768 && screen.width <1024) {
            setSize(30)
        }
    }, [size])

    return (
        <div className="bg-cardColor w-56 md:w-[19rem] lg:w-[22rem] h-24 mx-auto md:mx-0 my-4 md:h-36 lg:h-40 rounded-3xl py-4 px-4 md:py-8 md:pl-6 flex font-display text-fontColor lg:mr-16 md:mr-8">
            <div className="w-12 md:w-20 lg:w-24 my-auto rounded-full h-12 md:h-20 lg:h-24 bg-slate-300 overflow-auto">
                <img src={img} alt="" />
            </div>
            <div className="ml-4 md:ml-8">
                <h1 className="font-medium text-sm md:text-base lg:text-lg" >{nama}</h1>
                <div className="flex mt-4 md:mt-6 justify-center">
                    <a href={linkWA} target="_blank" className="hover:scale-110 opacity-95">
                    <BsWhatsapp size={size} style={{ marginRight: 20 }} />
                    </a>
                    <a href={linkIG} target="_blank" className="hover:scale-110 opacity-95">
                    <BsInstagram size={size} style={{ marginLeft: 20 }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardQuest;