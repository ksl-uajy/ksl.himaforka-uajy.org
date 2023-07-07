import React from "react";
import { FC, useEffect, useState } from "react";

const FAQ: FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm p-6 font-rubik">
        <div className="flex items-center justify-center">
          <h1 className="mb-5 text-xl text-white">Ingin lebih tahu tentang KSL?</h1>
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="h-[40px] w-[110px] rounded-[40px] bg-[#64DFD0]">
            <a href="#">
              <h1 className="text-black-600 dark:text-black-400 p-3.5 font-semibold">
                Kepo nih...
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
