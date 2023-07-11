import Arrow from "@/public/arrow.svg";
import FotoTest from "@/public/tzy.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Modul: FC = () => {
  return (
    <>
      <div className="max-w-screen relative mx-auto py-6 md:py-20">
        <div className="px-32">
          <h1 className="font-rubik text-xl font-semibold text-[#FDFFB0] md:text-3xl">
            KSL belajar apa aja sihh?
          </h1>
        </div>
        <div className="relative mx-auto items-center justify-center lg:flex lg:gap-6">
          <div className="my-10 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24]">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-16  h-60 w-60 rounded-xl shadow-2xl"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4]">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="mb-3 text-lg text-gray-700 dark:text-[#FAFFC4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24]">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-16 h-60 w-60 rounded-xl shadow-2xl"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4]">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-lg text-gray-700 dark:text-[#FAFFC4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24]">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-16 h-60 w-60 rounded-xl shadow-2xl"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4]">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-lg text-gray-700 dark:text-[#FAFFC4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24]">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-16  h-60 w-60 rounded-xl shadow-2xl"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4]">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-lg text-gray-700 dark:text-[#FAFFC4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <div className="my-10 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-[#E3DE69] dark:bg-[#4A4E24]">
            <a href="#">
              <Image
                alt="test"
                className="mx-auto mb-8 mt-16  h-60 w-60 rounded-xl shadow-2xl"
                src={FotoTest}
              />
            </a>
            <div className="px-6 pb-8 text-center font-rubik">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-[#FAFFC4]">
                  Ngeheck NASA
                </h5>
              </a>
              <p className="font-base mb-3 text-lg text-gray-700 dark:text-[#FAFFC4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto.
              </p>
            </div>
          </div>
          <button className="absolute right-[5.7rem] h-16 w-16 items-center justify-center rounded-full bg-[#5A5A3B] sm:invisible lg:visible">
            <Image alt="Arrow" className="mx-auto" src={Arrow}></Image>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modul;
