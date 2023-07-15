import FotoTest4 from "@/public/weeb.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Event: FC = () => {
  return (
    <>
      <div className="mx-auto py-16 px-[7.7rem]">
        <h1 className="px-1.5 font-rubik text-3xl font-bold text-[#FAFFC4]">Event</h1>
        <div className="my-10 h-[42rem] w-[30rem] rounded-xl bg-white p-10 shadow-2xl dark:bg-[#353520]">
          <a href="#">
            <Image alt="test" className="mx-auto h-auto rounded-xl" src={FotoTest4} />
          </a>
          <div className="px-6 pt-7 text-center font-rubik">
            <a href="#">
              <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-[#FAFFC4]">
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
