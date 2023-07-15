import Foto from "@/public/foto_dummy.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

function Teams() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 font-rubik">
        <h1 className="text-3xl font-bold text-[#FAFFC4]">Tim Kami</h1>
        <div className="flex gap-4 py-6">
          <div className="h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-base text-[#FDFFB0]">
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </div>
          <div className="h-10 w-44 rounded-lg border-2 border-[#85865D] text-base text-[#85865D]">
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </div>
          <div className="h-10 w-44 rounded-lg border-2 border-[#85865D] text-base text-[#85865D]">
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex h-[80px] w-[250px] gap-6 rounded-2xl bg-[#3B3E21] py-5 pl-5">
            <Image alt="Foto dummy" className="h-16 w-16 flex-initial rounded-full" src={Foto} />
            <div className="text-[#FDFFB4]">
              <h1 className="pb-2 text-xl">Kak nama</h1>
              <p className="text-base">Peran 1</p>
            </div>
          </div>
          <div className="flex h-[80px] w-[250px] gap-6 rounded-2xl bg-[#3B3E21] py-5 pl-5">
            <Image alt="Foto dummy" className="h-16 w-16 flex-initial rounded-full" src={Foto} />
            <div className="text-[#FDFFB4]">
              <h1 className="pb-2 text-xl">Kak nama</h1>
              <p className="text-base">Peran 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
