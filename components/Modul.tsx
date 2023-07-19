import Arrow from "@/public/arrow.svg";
import FotoTest from "@/public/tzy.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Modul: FC = () => {
  return (
    <>
      <div className="max-w-screen container relative mx-auto py-6 pl-6 md:pl-0">
        <div className="">
          <h1 className="font-rubik text-3xl font-bold text-[#FDFFB0]">
            KSL belajar apa aja sihh?
          </h1>
        </div>
        <div className="relative mx-auto flex items-center justify-center md:gap-6">
          <div className="my-10 w-8/12 rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24] md:max-w-sm">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-5 h-40 w-40 rounded-xl shadow-2xl md:mt-16 md:h-60 md:w-60"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4] md:text-2xl">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="mb-3 text-base text-gray-700 dark:text-[#FAFFC4] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 w-9/12 rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24] md:max-w-sm">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-5 h-60 w-60 rounded-xl shadow-2xl md:mt-16"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4] md:text-2xl">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-base text-gray-700 dark:text-[#FAFFC4] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 w-9/12 rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24] md:max-w-sm">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-5 h-60 w-60 rounded-xl shadow-2xl md:mt-16"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4] md:text-2xl">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-base text-gray-700 dark:text-[#FAFFC4] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 w-9/12 rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24] md:max-w-sm">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-5 h-60 w-60 rounded-xl shadow-2xl md:mt-16"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4] md:text-2xl">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-base text-gray-700 dark:text-[#FAFFC4] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 w-9/12 rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24] md:max-w-sm">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-5 h-60 w-60 rounded-xl shadow-2xl md:mt-16"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4] md:text-2xl">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-base text-gray-700 dark:text-[#FAFFC4] md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <button className="invisible absolute h-16 w-16 items-center justify-center rounded-full bg-[#5A5A3B] md:visible md:-right-4">
            <Image alt="Arrow" className="mx-auto" src={Arrow}></Image>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modul;
