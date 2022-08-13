import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs"

const CardQuest = ({ nama, img , linkWA, linkIG}) => {
    return (
        <div className="bg-cardColor w-72 md:w-[22rem] h-36 mx-auto md:mx-0 my-4 md:h-40 rounded-3xl py-8 pl-6 flex font-display text-fontColor lg:mr-16 md:mr-8">
            <div className="w-16 md:w-24 rounded-full h-16 md:h-24 bg-slate-300 overflow-auto">
                <img src={img} alt="" />
            </div>
            <div className="ml-8">
                <h1 className="font-medium text-base md:text-lg" >{nama}</h1>
                <div className="flex mt-6 justify-center">
                    <a href={linkWA} target="_blank" className="hover:scale-110 opacity-95">
                    <BsWhatsapp size={40} style={{ marginRight: 20 }} />
                    </a>
                    <a href={linkIG} target="_blank" className="hover:scale-110 opacity-95">
                    <BsInstagram size={40} style={{ marginLeft: 20 }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardQuest;