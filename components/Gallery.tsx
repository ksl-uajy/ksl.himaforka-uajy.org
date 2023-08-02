import FotoTest3 from "@/public/anon.jpg";
import FotoTest2 from "@/public/hengker.jpeg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Gallery: FC = () => {
  return (
    <>
      <div className="container px-6 md:px-24">
        <h1 className="pb-10 font-rubik text-3xl font-bold text-[#FAFFC4]">Galeri Kegiatan</h1>
        <div className="w-80 rounded-xl bg-[#353520] md:flex md:w-full">
          <div className="flex gap-6 p-6">
            <Image alt="test" className="rounded-lg md:h-28 md:w-28" src={FotoTest2} />
            <Image alt="test" className="rounded-lg md:h-28 md:w-28" src={FotoTest2} />
          </div>
          <div className="flex p-6 md:ml-auto md:w-5/12">
            <div className="w-72 rounded-lg bg-[#4A4E24] shadow-2xl md:w-auto">
              <a href="#">
                <Image
                  alt="test"
                  className="mx-auto mt-5 mb-4 h-32 w-auto rounded-xl shadow-2xl lg:mx-8 lg:mb-4 lg:mt-8 lg:h-60 lg:w-auto"
                  src={FotoTest3}
                />
              </a>
              <div className="font-rubik">
                <a href="#">
                  <h5 className="pb-4 text-center text-base font-medium text-[#FAFFC4] md:text-xl">
                    Tutorial Hack Bulan
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
