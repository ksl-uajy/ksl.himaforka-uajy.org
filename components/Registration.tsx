import Icon from "@/public/outlook.svg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Registration: FC = () => {
  return (
    <>
      <div className="mb-96 h-screen md:mb-0">
        <div className="container px-10 font-rubik md:mx-auto md:pb-32 lg:mx-0 lg:px-24">
          <h1 className="py-10 text-xl font-bold text-[#FDFFB0] md:text-3xl">
            Pendaftaran Anggota KSL 2023-2024
          </h1>
          <div className="gap-10 md:flex">
            <div className="h-[26rem] w-80 bg-white md:h-[30rem] md:w-[25rem]"></div>
            <div className="py-12 text-base text-[#FDFFB0] md:py-0 md:text-xl">
              <h1 className="font-semibold">Step 1: Login dengan e-mail student</h1>
              <button>
                <div className="my-4 flex h-14 w-[17rem] items-center gap-3 bg-[#1976BA] text-center">
                  <div className="flex h-full w-14 items-center justify-center bg-[#C6E7FF]">
                    <Image alt="Outlook" className="" src={Icon} />
                  </div>
                  <h1 className="text-sm text-[#D8ECFF]">Login dengan e-mail student</h1>
                </div>
              </button>
              <h1 className="pt-6 pb-3 font-semibold">Step 2: Lengkapi data diri</h1>
              <form className="">
                <div className="mb-4">
                  <label className="mx-2 mb-2 block text-sm text-[#FDFFB0]">Nama</label>
                  <input
                    className="focus:shadow-outline w-10/12 appearance-none rounded-full border-2 border-[#FDFFB0] bg-transparent py-3 px-6 leading-tight text-[#FDFFB0] shadow focus:outline-none md:w-full"
                    id="Nama"
                    // placeholder="Nama"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label className="mx-2 mb-2 block text-sm text-[#FDFFB0]">No. Telp (WA)</label>
                  <input
                    className="focus:shadow-outline w-10/12 appearance-none rounded-full border-2 border-[#FDFFB0] bg-transparent py-3 px-6 leading-tight text-[#FDFFB0] shadow focus:outline-none md:w-full"
                    id="Telepon"
                    // placeholder="No. Telp/WA"
                    type="text"
                  />
                </div>
                <div className="my-10">
                  <button
                    className="focus:shadow-outline rounded-full bg-[#E1E46D] py-3 px-8 text-sm text-[#161109] hover:bg-[#e3e84a] focus:outline-none"
                    type="button"
                  >
                    DAFTAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
