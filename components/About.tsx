import DocKelas from "@/public/DocKelas.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const About: FC = () => {
  return (
    <>
      <div className="max-w-screen h-[780px] py-6">
        <div className="relative flex w-full bg-white">
          <div className="left-0 z-40 h-[360px] w-[780px] border-r-[85px] border-t-[360px] border-r-transparent border-t-[#2F2B15]">
            <div className="absolute top-16 left-12 w-[600px] font-rubik text-[#FFF3B0]">
              <h1 className="p-2 text-3xl font-bold">Apa itu KSL UAJY?</h1>
              <p className="p-2 text-xl font-light">
                Kelompok Studi Linux (KSL) adalah kelompok studi yang berada dibawah naungan
                HIMAFORKA UAJY. Kelompok studi ini akan membahas berbagai topik yang berhubungan
                dengan GNU/Linux serta berbagai aplikasi yang sering digunakan sehari-hari sebagai
                pengguna OS Linux.
              </p>
            </div>
          </div>
          <div className="absolute right-0 h-[360px] w-[700px]">
            <Image src={DocKelas} alt="kegiatan" className="h-[360px] w-[700px] object-fill" />
          </div>
        </div>
        <div className="relative flex w-full bg-white">
          <div className="absolute left-0 h-[360px] w-[700px]">
            <Image src={DocKelas} alt="kegiatan" className="h-[360px] w-[700px] object-fill" />
          </div>
          <div className="absolute right-0 z-0 h-[360px] w-[740px] border-l-[85px] border-b-[360px] border-l-transparent border-b-[#142521]">
            <h1 className="absolute top-0 text-white">Apa Itu KSL ?</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
