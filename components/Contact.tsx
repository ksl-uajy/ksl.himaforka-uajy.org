import Foto1 from "@/public/ivan.jpg";
import Foto2 from "@/public/simson.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Contact: FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm py-8 font-rubik lg:py-12">
        <div className="flex items-center justify-center">
          <div className="text-center lg:py-6">
            <p className="text-xl font-bold text-[#C3FFF4] lg:text-3xl">Ada pertanyaan?</p>
            <p className="py-3 text-white lg:text-lg">Kami siap membantu Anda</p>
          </div>
        </div>
        <div className="items-center justify-center gap-6 lg:flex">
          <div className="mx-auto my-3 flex h-[100px] w-[260px] gap-6 rounded-2xl bg-[#213E2C] py-5 pl-5 lg:my-0">
            <Image alt="Foto dummy" className="h-16 w-16 flex-initial rounded-full" src={Foto1} />
            <div className="text-[#B4FFD2]">
              <h1 className="pb-2 font-medium">Kak Ivan</h1>
              <a href="#">
                <div className="h-6 w-10 rounded-md bg-[#34694A]">
                  <p className="text-center">WA</p>
                </div>
              </a>
            </div>
          </div>
          <div className="mx-auto my-3 flex h-[100px] w-[260px] gap-6 rounded-2xl bg-[#213E2C] py-5 pl-5 lg:my-0">
            <Image alt="Foto dummy" className="h-16 w-16 flex-initial rounded-full" src={Foto2} />
            <div className="text-[#B4FFD2]">
              <h1 className="pb-2 font-medium">Kak Simson</h1>
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
