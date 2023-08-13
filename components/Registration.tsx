import Check from "@/public/ellipse.svg";
import Icon from "@/public/outlook.svg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiCheck } from "react-icons/bi";

const Registration: FC = () => {
  const [button, setButton] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonCliked = e.currentTarget.id;

    if (buttonCliked == "daftar") {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  return (
    <>
      <div className="mb-96 pt-6 md:mb-0 md:pt-16">
        <div className="container px-6 font-rubik md:px-12 md:pb-32 lg:mx-0 lg:px-24">
          <h1 className="pb-6 text-xl font-bold text-[#FDFFB0] md:text-3xl">
            Pendaftaran Anggota KSL 2023-2024
          </h1>
          <div className="gap-10 lg:flex">
            <div className="h-[26rem] w-80 bg-white md:h-[30rem] md:w-[25rem]"></div>
            <div className="py-12 text-base text-[#FDFFB0] md:text-xl lg:py-0">
              <h1 className="pb-4 font-semibold">Step 1: Login dengan e-mail student</h1>
              <button>
                <div className="flex h-14 w-[17rem] items-center gap-3 bg-[#1976BA] text-center">
                  <div className="flex h-full w-14 items-center justify-center bg-[#C6E7FF]">
                    <Image alt="Outlook" src={Icon} />
                  </div>
                  <h1 className="text-sm text-[#D8ECFF]">Login dengan e-mail student</h1>
                </div>
              </button>
              <h1 className="pt-6 pb-3 font-semibold">Step 2: Lengkapi data diri</h1>
              <form>
                <div className="pb-4">
                  <label className="block px-2 pb-2 text-sm text-[#FDFFB0]">Nama</label>
                  <input
                    className="focus:shadow-outline w-10/12 appearance-none rounded-full border-2 border-[#FDFFB0] bg-transparent py-3 px-6 leading-tight text-[#FDFFB0] shadow focus:outline-none md:w-80"
                    id="Nama"
                    required
                    // placeholder="Nama"
                    type="text"
                  />
                </div>
                <div className="pb-4">
                  <label className="block px-2 pb-2 text-sm text-[#FDFFB0]">No. Telp (WA)</label>
                  <input
                    className="focus:shadow-outline w-10/12 appearance-none rounded-full border-2 border-[#FDFFB0] bg-transparent py-3 px-6 leading-tight text-[#FDFFB0] shadow focus:outline-none md:w-80"
                    id="Telepon"
                    required
                    // placeholder="No. Telp/WA"
                    type="text"
                  />
                </div>
                <div className="gap-6 py-6 md:flex">
                  <button
                    className="focus:shadow-outline rounded-full bg-[#E1E46D] py-3 px-8 text-sm text-[#161109] hover:bg-[#e3e84a] focus:outline-none"
                    id="daftar"
                    onClick={handleClick}
                    type="submit"
                  >
                    DAFTAR
                  </button>
                  <div className={button ? "flex w-full items-center gap-3 md:w-6/12" : "hidden"}>
                    <IconContext.Provider value={{ color: "#ffffff" }}>
                      <div className="h-[15px] w-[15px] rounded-full bg-[#76FF9C] md:h-[20px] md:w-[20px]">
                        <BiCheck />
                      </div>
                    </IconContext.Provider>
                    <h3 className="py-6 text-xs text-[#B0FFE7] md:py-0 lg:text-base">
                      Selamat! Anda telah berhasil mendaftar Anggota Kelompok Studi Linux UAJY
                      2023-2024
                    </h3>
                  </div>
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
