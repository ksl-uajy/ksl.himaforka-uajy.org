import Link from "next/link";
import React from "react";
// import {render, Text} from 'ink';
import { FC, useEffect, useState } from "react";

const Terminal: FC = () => {
  return (
    <>
      <div className="mx-auto flex items-center justify-center py-6">
        <div className="h-[30rem] w-11/12 rounded-xl bg-[#102C27] leading-[18.5px] md:h-[32rem] md:w-9/12 lg:w-[80rem]">
          <div className="h-10 w-full rounded-t-xl bg-[#20443E]">
            <h1 className="px-6 py-2 font-rubik text-[#FFEDBF]">😺 NekoTerm</h1>
          </div>
          <div className="px-4 md:px-10">
            <h2 className="py-4 text-[#ECECEC]">
              <p className="font-mono text-sm lg:text-xl">
                <span className="text-[#D4FFBA]">{"> "}ksl</span> art
              </p>
              <br />
              <p className="font-mono text-[8px] text-[#C3FFF4] md:text-lg">
                &nbsp;/-------&emsp;&nbsp;&emsp;&emsp;▓&nbsp;&nbsp;▓&nbsp;&ensp;▓▓▓▓&nbsp;&ensp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓▓▓▓&emsp;&emsp;&emsp;&emsp;&emsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓{" "}
                <br />/ &emsp;&nbsp; 0 o \ &ensp;
                ▓&nbsp;▓&nbsp;&ensp;&nbsp;▓&nbsp;&nbsp;&ensp;&nbsp;&nbsp;▓&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓&emsp;&emsp;&emsp;&emsp;&emsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓{" "}
                <br />| &emsp; &emsp; &emsp;&nbsp;{">"}| &ensp;
                ▓▓&nbsp;&ensp;&nbsp;&nbsp;▓▓▓▓&nbsp;&ensp;▓&nbsp;&nbsp;&nbsp;&nbsp;▓▓▓▓&nbsp;&ensp;&nbsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓▓▓▓&emsp;&emsp;&emsp;&emsp;&emsp;▓&nbsp;&nbsp;▓▓▓▓{" "}
                <br />
                |~~~~~~~~| &ensp;
                ▓&nbsp;▓&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;▓&nbsp;&ensp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓&emsp;&emsp;&emsp;&emsp;&emsp;▓&nbsp;&nbsp;&nbsp;&nbsp;▓{" "}
                <br />
                ----------&ensp;&nbsp;&nbsp;▓&nbsp;&ensp;▓&nbsp;&ensp;▓▓▓▓&nbsp;&ensp;▓▓▓▓&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&ensp;▓▓▓▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓&nbsp;&nbsp;▓▓▓▓&ensp;&ensp;&nbsp;▓▓
              </p>
              <br />
            </h2>
            <h2 className="font-mono text-sm text-[#ECECEC] md:text-lg lg:text-xl">
              <span className="text-[#C3FFF4]">Learning linux is fun!</span>
              <br />
              <br />
              <span className="text-[#D4FFBA]">{">"} ksl</span> info
              <br />
              Untuk informasi lebih lanjut, klik{" "}
              <Link className="underline" href="/kegiatan">
                disini.
              </Link>
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
