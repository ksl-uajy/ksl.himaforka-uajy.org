import Foto from "@/public/foto_dummy.png";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Contact: FC = () => {
  return (
    <>
      {/* <div className=""> */}
      <div className="mx-auto flex max-w-screen-sm items-center justify-center text-center font-rubik">
        <h1>Ada pertanyaan?</h1>
        <h2>Kami siap membantu Anda</h2>
      </div>
      <div className="mx-auto flex h-[70px] w-[170px] max-w-screen-sm items-center justify-center rounded-[15px] bg-[#213E2C] text-center font-rubik">
        <a href="#">
          <div className="">
            <Image
              alt="Foto dummy"
              className="h-[10px] w-[10px] rounded-full"
              height="225"
              src={Foto}
              width="213"
            />
          </div>
        </a>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
