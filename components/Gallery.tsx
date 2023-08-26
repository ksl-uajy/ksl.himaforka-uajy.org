import BigFoto from "@/public/Gallery/1.jpg";
import GalleryFoto1 from "@/public/Gallery/2.jpg";
import GalleryFoto2 from "@/public/Gallery/3.jpg";
import GalleryFoto3 from "@/public/Gallery/4.jpg";
import FotoTest2 from "@/public/hengker.jpeg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Gallery: FC = () => {
  return (
    <>
      <div className="px-6 pb-12 md:px-12 lg:px-24">
        <h1 className="pb-6 font-rubik text-xl font-bold text-[#FAFFC4] md:text-3xl">
          Galeri Kegiatan
        </h1>
        <div className="w-full justify-between rounded-xl bg-[#353520] md:flex">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 p-6 md:grid-cols-4 lg:gap-6">
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={GalleryFoto1}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={GalleryFoto2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={GalleryFoto3}
            />
            {/* <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
             <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            />
            <Image
              alt="test"
              className="h-24 w-24 rounded-lg shadow-lg lg:h-28 lg:w-28"
              src={FotoTest2}
            /> */}
          </div>
          <div className="flex p-6 md:relative md:w-7/12 lg:h-[30rem]">
            <div className="right-0 mr-6 w-72 rounded-lg bg-[#4A4E24] px-4 shadow-2xl md:absolute md:w-auto lg:absolute lg:px-0">
              <a href="#">
                <Image
                  alt="test"
                  className="mx-auto mb-4 mt-5 h-32 w-auto rounded-xl shadow-2xl lg:mx-8 lg:mb-4 lg:mt-8 lg:h-80 lg:w-11/12"
                  src={BigFoto}
                />
              </a>
              <div className="font-rubik">
                <a href="#">
                  <h5 className="pb-4 text-center text-base font-medium text-[#FAFFC4] md:text-xl">
                    Tentoring
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
