import Icon from "@/public/outlook.svg";
import Image from "next/image";
import React from "react";

const Registration = () => {
  return (
    <div className="container mx-auto font-rubik">
      <h1 className="py-10 text-3xl font-bold text-[#FDFFB0]">Pendaftaran Anggota KSL 2023-2024</h1>
      <div className="flex gap-10">
        <div className="h-[32rem] w-[27rem] bg-white"></div>
        <div className="text-xl font-semibold text-[#FDFFB0]">
          <h1>Step 1: Login dengan e-mail student</h1>
          <div className="my-4 flex h-14 w-[17rem] items-center gap-3 bg-[#27648F] text-center">
            <div className="flex h-full w-14 items-center justify-center bg-[#5BB3F2]">
              <Image alt="Outlook" className="" src={Icon} />
            </div>
            <h1 className="text-sm text-[#ABD7FF]">Login dengan e-mail student</h1>
          </div>
          <h1 className="pt-6 pb-3">Step 2: Lengkapi data diri</h1>
          <form className="">
            <div className="mb-4">
              <label className="mx-2 mb-2 block text-sm text-[#FDFFB0]">Nama</label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded-full border-2 border-[#FDFFB0] bg-transparent py-3 px-6 leading-tight text-[#FDFFB0] shadow focus:outline-none"
                id="Nama"
                // placeholder="Nama"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="mx-2 mb-2 block text-sm text-[#FDFFB0]">No. Telp (WA)</label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded-full border-2 border-[#FDFFB0] bg-transparent py-3 px-6 leading-tight text-[#FDFFB0] shadow focus:outline-none"
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
  );
};

export default Registration;
