import React from "react";
import Button from "../atom/Button";
import { Link } from "react-router-dom";

const Deskripsi = () => {
    return (
        <div className="max-w-fit mt-8 md:mt-16 xl:mt-20 lg:ml-3 xl:ml-2 md:mx-auto text-justify md:px-0 ">
            <div className="font-display text-fontColor xl:w-[72rem] lg:w-[56rem] md:w-[44rem] mx-auto">
                <div className="opacity-80">
                    <h1 className="font-bold text-xl  md:text-2xl lg:text-3xl xl:w-[72rem] lg:w-[56rem] md:w-[44rem] ">
                        Apa itu Kelompok Studi Linux?
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl mt-2 md:mt-4 xl:w-[72rem] lg:w-[56rem] md:w-[44rem] ">
                        Kelompok Studi Linux (KSL) adalah kelompok studi yang berada dibawah naungan HIMAFORKA UAJY. Kelompok studi ini akan membahas berbagai topik yang berhubungan dengan GNU/Linux serta berbagai aplikasi yang sering digunakan sehari-hari sebagai pengguna OS Linux.
                    </p>
                </div>
                <div className="opacity-80 lg:w-[56rem]">
                    <h1 className="font-bold text-xl md:text-2xl xl:w-[72rem] lg:text-3xl mt-8 lg:mt-16 xl:mt-12 xl:mb-4 mb-4 lg:mb-4 lg:w-[56rem] md:w-[44rem] ">Apa yang dilakukan di KSL?</h1>
                    <p className="text-font text-base md:text-lg xl:w-[72rem] lg:text-xl lg:w-[56rem] md:w-[44rem] ">
                        Kita akan membahas berbagai hal tentang Linux secara umum, mulai dari basic hingga networking dan peretasan etis.
                        Belum bisa memakai Linux? Tidak apa-apa dan boleh banget untuk bergabung, disini kita akan belajar dari awal kok.
                    </p>
                    <div className="">
                        <Link to="activity">
                            <Button style={"mt-4 lg:mt-10 "} styleH={"opacity-80"} title={"Selengkapnya >"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Deskripsi;