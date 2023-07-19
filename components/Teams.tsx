import Foto from "@/public/foto_dummy.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Teams: FC = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-16 font-rubik md:px-0">
        <h1 className="text-xl font-bold text-[#FAFFC4] md:text-3xl">Tim Kami</h1>
        <div className="flex gap-4 py-6">
          <div className="h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-sm text-[#FDFFB0] md:text-base">
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </div>
          <div className="h-10 w-44 rounded-lg border-2 border-[#85865D] text-sm text-[#85865D] md:text-base">
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </div>
          <div className="h-10 w-44 rounded-lg border-2 border-[#85865D] text-sm text-[#85865D] md:text-base">
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </div>
        </div>
        <div className="md:flex md:gap-6">
          <div className="mx-auto flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 1</p>
            </div>
          </div>
          <div className="mx-auto my-6 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] py-5 pl-5 md:mx-0 md:my-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
