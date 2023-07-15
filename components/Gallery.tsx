import FotoTest3 from "@/public/anon.jpg";
import FotoTest2 from "@/public/hengker.jpeg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Gallery: FC = () => {
  return (
    <>
      <div className="mx-auto items-center justify-center">
        <h1 className="px-32 pb-10 font-rubik text-3xl font-bold text-[#FAFFC4]">
          Galeri Kegiatan
        </h1>
        <div className="mx-auto h-[40rem] w-10/12 flex-none rounded-xl bg-[#353520] lg:flex lg:w-[126rem]">
          <div className="flex gap-6 p-10 pb-8">
            <div className="h-40 w-40 rounded-lg bg-white shadow-xl">
              <Image alt="test" className="rounded-lg" src={FotoTest2} />
            </div>
            <div className="h-40 w-40 rounded-lg bg-white shadow-xl">
              <Image alt="test" className="rounded-lg" src={FotoTest2} />
            </div>
          </div>
          <div className="ml-auto flex px-10">
            <div className="my-10 rounded-lg bg-white shadow-2xl dark:bg-[#4A4E24]">
              <a href="#">
                <Image
                  alt="test"
                  className="mx-4 mt-4 mb-4 rounded-xl shadow-2xl lg:mx-auto lg:mb-8 lg:mt-12 lg:h-96 lg:w-10/12"
                  src={FotoTest3}
                />
              </a>
              <div className="px-6 py-1 text-center font-rubik lg:pt-3">
                <a href="#">
                  <h5 className="pb-2.5 text-xl font-medium text-gray-900 dark:text-[#FAFFC4] lg:text-2xl">
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
