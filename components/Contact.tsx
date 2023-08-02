import Foto from "@/public/foto_dummy.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Contact: FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm py-12 font-rubik">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="py-3 text-xl font-bold text-[#C3FFF4] lg:text-3xl">Ada pertanyaan?</p>
            <p className="text-white lg:text-lg">Kami siap membantu Anda</p>
          </div>
        </div>
        <div className="items-center justify-center py-6 md:flex md:gap-6 md:py-0">
          <div className="mx-auto flex h-28 w-72 gap-6 rounded-2xl bg-[#213E2C] pl-5 md:mx-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-16 w-16 flex-initial rounded-full"
              src={Foto}
            />
            <div className="my-auto text-[#B4FFD2]">
              <h1 className="pb-2 font-bold">Kak nama</h1>
              <a href="#">
                <div className="h-6 w-10 rounded-md bg-[#34694A]">
                  <p className="text-center">WA</p>
                </div>
              </a>
            </div>
          </div>
          <div className="mx-auto my-6 flex h-28 w-72 gap-6 rounded-2xl bg-[#213E2C] pl-5 md:mx-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-16 w-16 flex-initial rounded-full"
              src={Foto}
            />
            <div className="my-auto text-[#B4FFD2]">
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
