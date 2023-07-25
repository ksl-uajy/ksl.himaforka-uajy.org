import React from "react";
// import {render, Text} from 'ink';
import { FC, useEffect, useState } from "react";

const Terminal: FC = () => {
  return (
    <>
      <div className="max-w-screen mx-auto flex items-center justify-center py-6">
        <div className="w-[44unded-xl h-[30rem] rounded-xl bg-[#102C27] leading-[18.5px] lg:w-[64rem]">
          <div className="h-10 w-full rounded-t-xl bg-[#20443E]">
            <h1 className="px-6 py-3 font-rubik text-[#FFEDBF]">😺 NekoTerm</h1>
          </div>
          <div className="px-10">
            <h2 className="py-4 text-[#ECECEC]">
              <p className="font-mono text-lg lg:text-xl">
                <span className="text-[#D4FFBA]">{"> "}ksl</span> art
              </p>
              <br />
              <p className="font-mono text-[#C3FFF4]">
                /-------\   ▓  ▓  ▓▓▓▓  ▓           ▓  ▓  ▓▓▓▓     ▓  ▓  ▓<br></br>
                |    0 o \  ▓ ▓   ▓     ▓           ▓  ▓  ▓  ▓     ▓  ▓  ▓<br></br>
                |       &gt;|  ▓▓    ▓▓▓▓  ▓    ▓▓▓▓   ▓  ▓  ▓▓▓▓     ▓  ▓▓▓▓<br></br>
                |~~~~~~~~|  ▓ ▓      ▓  ▓           ▓  ▓  ▓  ▓     ▓    ▓ <br></br>
                ----------  ▓  ▓  ▓▓▓▓  ▓▓▓▓        ▓▓▓▓  ▓  ▓  ▓▓▓▓   ▓▓ <br></br>
              </p>
              <br />
            </h2>
            <h2 className="font-mono text-lg text-[#ECECEC] lg:text-xl">
              <span className="text-[#C3FFF4]">Learning linux is fun!</span>
              <br />
              <br />
              <span className="text-[#D4FFBA]">{">"} ksl</span> info
              <br />
              Untuk informasi lebih lanjut, klik{" "}
              <a className="underline" href="#">
                disini.
              </a>
              <br />
              <br />
              <span className="text-[#D4FFBA]">{">"} ksl</span> daftar <br />
              Pendaftaran telah ditutup.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
