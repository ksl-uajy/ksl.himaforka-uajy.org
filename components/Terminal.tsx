/* eslint-disable no-irregular-whitespace */
import KSL from "@/public/ksl-terminal.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FC, useEffect, useState } from "react";

const Terminal: FC = () => {
  return (
    <>
      <div className="mx-auto flex items-center justify-center py-10">
        <div className="h-96 w-11/12 rounded-2xl bg-[#102C27] leading-[18.5px] md:h-[26rem] md:w-9/12 lg:h-[30rem] lg:w-8/12">
          <div className="h-10 w-full rounded-t-2xl bg-[#20443E]">
            <h1 className="px-6 py-3 font-rubik text-[#FFEDBF]">😺 NekoTerm</h1>
          </div>
          <div className="px-4 md:px-10">
            <h2 className="py-4 text-[#ECECEC]">
              <p className="font-mono text-sm lg:text-xl">
                <span className="text-[#D4FFBA]">{"> "}ksl</span> art
              </p>
              <br />
              <Image alt="KSL-UAJY" className="w-72 pb-3 md:w-96 lg:w-[40rem]" src={KSL} />
            </h2>
            <h2 className="font-mono text-sm text-[#ECECEC] md:text-lg">
              <p className="text-[#C3FFF4]">Learning linux is fun!</p>
              <p className="py-4">
                <span className="text-[#D4FFBA]">{">"} ksl</span> info
                <br />
                Untuk informasi lebih lanjut, klik{" "}
                <Link className="hover:underline" href="/kegiatan">
                  disini.
                </Link>
              </p>
              <p>
                <span className="text-[#D4FFBA]">{">"} ksl</span> daftar <br />
                Pendaftaran telah ditutup.
              </p>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
