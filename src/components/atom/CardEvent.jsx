import React from "react";
import Button from "./Button";
import imgComingsoon from "../../assets/img/KSLweb-not-found.png"

const CardEvent = ({ JenisEvent, JudulEvent, keterangan, tambahan }) => {
    return ( 
        <div className=" md:flex my-8 ml-4 md:ml-0 justify-evenly md:justify-start ">
            <h2 className=" md:hidden mb-2 text-base md:text-xl  opacity-80 w-72 ">{JenisEvent}</h2>
            <h3 className="md:hidden font-bold text-lg lg:text-3xl mb-2  opacity-80 w-60 md:text-left">{JudulEvent}</h3>
            <div className=" w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 xl:w-[23rem] xl:h-[30rem] bg-[#3e2849] rounded-lg xl:rounded-3xl md:mr-8 overflow-auto">
                <img src={imgComingsoon} alt="" />
            </div>
            <div className="w-max-xl text-justify md:text-left lg:w-[22rem] xl:w-[24rem] md:w-72 mt-4  opacity-80">
                <h2 className="hidden md:block mb-2 xl:mb-4 text-base md:text-xl xl:text-2xl ">{JenisEvent}</h2>
                <h3 className="hidden md:block font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl  mb-2 xl:mb-4  ">{JudulEvent}</h3>
                <p className="mb-2 xl:mb-4 text-sm md:text-base w-60 ">{keterangan}</p>
                <Button styleH={"py-2"} style={"mb-2 xl:mb-4  cursor-not-allowed"} title={"Daftar"} />
                <p className="text-xs md:text-sm w-60 ">{tambahan}</p>
            </div>
        </div>
    )
}
export default CardEvent;