import Foto from "@/public/foto_dummy.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Contact: FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm font-rubik">
        <div className="flex items-center justify-center">
          <div className="py-6 text-center text-white">
            <p className="text-xl font-bold">Ada pertanyaan?</p>
            <p className="">Kami siap membantu Anda</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex h-[80px] w-[200px] gap-6 rounded-2xl bg-[#213E2C] py-5 pl-5">
            <Image alt="Foto dummy" className="h-16 w-16 flex-initial rounded-full" src={Foto} />
            <div className="text-[#B4FFD2]">
              <h1 className="pb-2 font-bold">Kak nama</h1>
              <a href="#">
                <div className="h-6 w-10 rounded-md bg-[#34694A]">
                  <p className="text-center">WA</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex h-[80px] w-[200px] gap-6 rounded-2xl bg-[#213E2C] py-5 pl-5">
            <Image alt="Foto dummy" className="h-16 w-16 flex-initial rounded-full" src={Foto} />
            <div className="text-[#B4FFD2]">
              <h1 className="pb-2 font-bold">Kak nama</h1>
              <a href="#">
                <div className="h-6 w-10 rounded-md bg-[#34694A]">
                  <p className="text-center">WA</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
