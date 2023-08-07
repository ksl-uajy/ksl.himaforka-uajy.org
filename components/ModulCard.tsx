import FotoTest from "@/public/tzy.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const ModulCard: FC = () => {
  return (
    <div className="my-10 mr-4 w-64 flex-none rounded-lg border border-[#E3DE69] bg-[#4A4E24] px-6 pt-6 md:mr-8 md:w-2/5 md:pb-4 lg:w-64">
      <a className="space-y-4" href="#">
        <div className="aspect-w-16 aspect-h-9">
          <Image alt="" className="mx-auto mt-4 h-32 w-32 rounded-xl object-cover" src={FotoTest} />
        </div>
        <div className="px-4 py-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#FAFFC4] md:text-2xl">
              Some title
            </h3>
          </div>
          <div className="text-lg">
            <p className="mb-3 truncate text-base text-[#FAFFC4] md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ModulCard;
