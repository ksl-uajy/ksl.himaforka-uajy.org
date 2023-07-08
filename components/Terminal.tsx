import React from "react";
// import {render, Text} from 'ink';
import { FC, useEffect, useState } from "react";

const Terminal: FC = () => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-sm items-center justify-center">
        <div className="h-[310px] w-full rounded-[10px] bg-[#090D13] leading-[18.5px]">
          <div className="h-10 w-full rounded-t-[10px] bg-[#03070D]">
            <h1 className="px-6 py-2 text-yellow-600 dark:text-yellow-400">😺 NekoTerm</h1>
          </div>
          <div className="px-6">
            <h2 className="py-4 text-[#FFF0BA] dark:text-[#FFF0BA]">
              {">"} ksl art <br />
              {/* &nbsp; /----------- &emsp;
                ▓&nbsp;&ensp;&nbsp;&ensp;▓&nbsp;&ensp;▓▓▓▓&nbsp;&ensp;▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;▓▓▓▓&emsp;&emsp;&emsp;▓&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓{" "}
                <br />/ &emsp; &emsp; 0&nbsp; o &nbsp;&nbsp;\ &ensp;
                ▓&nbsp;&ensp;▓&nbsp;&ensp;&nbsp;&ensp;▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&nbsp;▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&emsp;&emsp;&emsp;▓&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓{" "}
                <br />| &emsp; &emsp; &emsp; &nbsp; &nbsp;{">"}| &ensp;
                ▓▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;▓▓▓▓&nbsp;&ensp;▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&nbsp;▓▓▓▓&nbsp;&ensp;&nbsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;▓▓▓▓&emsp;&emsp;&emsp;▓&nbsp;&nbsp;&nbsp;▓▓▓▓{" "}
                <br />
                |~~~~~~~~| &ensp;
                ▓&nbsp;&ensp;▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&nbsp;▓&nbsp;&ensp;▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&nbsp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&emsp;&emsp;&emsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓{" "}
                <br />
                -------------- &nbsp;&nbsp;
                ▓&nbsp;&ensp;&nbsp;&ensp;▓&nbsp;&ensp;▓▓▓▓&nbsp;&ensp;▓▓▓▓&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;
                &nbsp;▓▓▓▓&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓&nbsp;&nbsp;&nbsp;▓▓▓▓&ensp;&ensp;&nbsp;&nbsp;▓▓{" "} */}
              {/* <Text color="green">/----------- &emsp;</Text> */}
              <br />
            </h2>
            <h2 className="text-[#ECECEC]">
              Learning linux is fun!
              <br />
              <br />
              {">"} ksl info <br />
              Untuk informasi lebih lanjut, klik{" "}
              <a className="hover:underline" href="#">
                disini.
              </a>
              <br />
              <br />
              {">"} ksl daftar <br />
              Pendaftaran telah ditutup.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
