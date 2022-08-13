import React from "react";
import LOGOKSL from "../assets/icon/KSL-header.png";
import { BsInstagram, BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
    const [sizeNormal, setSizeNormal] = useState(40);

    useEffect(()=>{
        if (screen.width < 768) {
            setSizeNormal(25)
        }
        console.log("ini sizenya" , sizeNormal);
    }, [sizeNormal])


    return (
        <div className="bg-secondaryBG max-w-full rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] font-display text-fontColor mt-8">
            <div className="mx-auto xl:w-[72rem] lg:w-[56rem] md:w-[44rem] w-screen">
                <div className="py-8 px-4 md:py-16 flex justify-between xl:w-[72rem] lg:w-[56rem]  md:w-[44rem]">
                    <div className=" w-44 xl:w-72 md:w-56">
                        <img srcSet={LOGOKSL} alt="logo" />
                    </div>
                    <div className="ml-4 my-auto">
                        <div className="flex">
                            <a href="https://www.instagram.com/ksl.uajy/" target="_blank">
                                <BsInstagram size={sizeNormal} className="opacity-80 hover:scale-125 hover:opacity-95 mr-6 " />
                            </a>
                            <a href="https://github.com/ksl-uajy" target="_blank">
                                <BsGithub size={sizeNormal} className="opacity-80 hover:scale-125 hover:opacity-95 mr-6 " />
                            </a>
                            <a href="mailto:ksl@himaforka-uajy.org">
                                <MdEmail size={sizeNormal} className="opacity-80 hover:scale-125 hover:opacity-95 mr-6 " />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-right opacity-80 mx-auto pb-4 px-2 xl:w-[72rem] lg:w-[56rem] md:w-[44rem] w-screen mt-4 ">
                    <h1 className=" text-sm md:text-base">KSL web redesign by KSL 2022/2023</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;