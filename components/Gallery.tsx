import FotoTest3 from "@/public/anon.jpg";
import FotoTest2 from "@/public/hengker.jpeg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

function Gallery() {
  return (
    <>
      <div className="mx-auto items-center justify-center pb-20">
        <h1 className="py-10 px-32 font-rubik text-3xl font-bold text-[#FAFFC4]">
          Galeri Kegiatan
        </h1>
        <div className="mx-auto flex h-[40rem] w-[126rem] rounded-xl bg-[#353520]">
          <div className="flex gap-6 p-10">
            <div className="h-40 w-40 rounded-lg bg-white shadow-xl">
              <Image alt="test" className="rounded-lg" src={FotoTest2} />
            </div>
            <div className="h-40 w-40 rounded-lg bg-white shadow-xl">
              <Image alt="test" className="rounded-lg" src={FotoTest2} />
            </div>
          </div>
          <div className="relative ml-auto flex px-10">
            <div className="my-10 rounded-lg bg-white shadow-2xl dark:bg-[#4A4E24]">
              <a href="#">
                <Image
                  alt="test"
                  className="mx-auto mt-12 mb-8 h-96 w-10/12 rounded-xl shadow-2xl"
                  src={FotoTest3}
                />
              </a>
              <div className="px-6 pt-3 text-center font-rubik">
                <a href="#">
                  <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-[#FAFFC4]">
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
}

export default Gallery;
