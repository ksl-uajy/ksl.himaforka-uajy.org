import React from "react";

const CardTgl = ({tanggal, materi}) =>{
    return(
        <div className="w-[9rem] md:w-48 bg-secondaryBG rounded-3xl py-3 h-16 md:h-24 md:py-6 px-5 lg:px-6">
            <h1 className="mb-2 md:text-base text-xs">{tanggal}</h1>
            <p className="text-xs md:text-base">{materi}</p>
        </div>
    )
}

export default CardTgl;