import FotoTest from "@/public/tzy.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const ModulCard: FC = () => {
  return (
    <div className="w-44 flex-none rounded-lg border border-[#E3DE69] bg-[#4A4E24] px-6 pt-6 md:w-2/5 md:pb-4 lg:w-64">
      <a className="space-y-2 md:space-y-4" href="#">
        <Image
          alt="Modul Picture"
          className="mx-auto mt-4 h-24 w-24 rounded-xl object-cover lg:h-32 lg:w-32"
          src={FotoTest}
        />
        <div className="px-4 py-2 text-center">
          <div className="text-lg font-medium">
            <h3 className="pb-2 text-lg font-semibold tracking-tight text-[#FAFFC4] md:text-2xl">
              Some title
            </h3>
          </div>
          <div>
            <p className="truncate pb-3 text-sm text-[#FAFFC4] hover:text-clip md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ModulCard;
