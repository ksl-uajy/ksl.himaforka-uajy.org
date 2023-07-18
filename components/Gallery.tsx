import FotoTest3 from "@/public/anon.jpg";
import FotoTest2 from "@/public/hengker.jpeg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Gallery: FC = () => {
  return (
    <>
      <div className="container mx-auto items-center justify-center pl-6 md:pl-0">
        <h1 className="pb-10 font-rubik text-3xl font-bold text-[#FAFFC4]">Galeri Kegiatan</h1>
        <div className="w-10/12 flex-none rounded-xl bg-[#353520] lg:flex lg:w-full">
          <div className="flex gap-6 p-10 pb-8">
            <Image alt="test" className="rounded-lg md:h-44 md:w-44" src={FotoTest2} />
            <Image alt="test" className="rounded-lg md:h-44 md:w-44" src={FotoTest2} />
          </div>
          <div className="ml-auto flex px-10 md:p-10 md:pb-0">
            <div className="mb-10 rounded-lg bg-white shadow-2xl dark:bg-[#4A4E24]">
              <a href="#">
                <Image
                  alt="test"
                  className="mx-4 mt-4 mb-4 w-48 rounded-xl shadow-2xl md:w-[46rem] lg:mx-auto lg:mb-8 lg:mt-12 lg:h-96 lg:w-10/12"
                  src={FotoTest3}
                />
              </a>
              <div className="px-6 text-center font-rubik">
                <a href="#">
                  <h5 className="pb-2.5 text-lg font-medium text-gray-900 dark:text-[#FAFFC4] md:text-2xl">
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
