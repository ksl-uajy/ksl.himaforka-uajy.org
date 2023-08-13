import FotoTest4 from "@/public/weeb.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Event: FC = () => {
  return (
    <>
      <div className="container px-6 md:px-12 lg:px-24">
        <h1 className="pb-6 font-rubik text-xl font-bold text-[#FAFFC4] md:text-3xl">Event</h1>
        <div className="w-64 rounded-xl bg-[#353520] p-6 shadow-2xl lg:h-3/6 lg:w-3/12">
          <a href="#">
            <Image alt="test" className="mx-auto h-auto rounded-xl shadow-lg" src={FotoTest4} />
          </a>
          <div className="pt-5 text-center font-rubik">
            <a href="#">
              <h5 className="text-lg font-medium text-[#FAFFC4] md:text-xl">
                Lomba Pacar Tercantik
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
