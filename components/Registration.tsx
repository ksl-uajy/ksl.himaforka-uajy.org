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
            <div className="h-full w-14 bg-[#5BB3F2]"></div>
            <h1 className="text-sm text-[#ABD7FF]">Login dengan e-mail student</h1>
          </div>
          <h1 className="py-6">Step 2: Lengkapi data diri</h1>
          <div className="text-sm">
            <h2 className="px-2 pb-3">Nama</h2>
            <div className="h-12 w-80 rounded-full border border-[#FDFFB0]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
