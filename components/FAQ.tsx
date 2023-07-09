import React from "react";
import { FC, useEffect, useState } from "react";

const FAQ: FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm py-12 font-rubik">
        <div className="flex items-center justify-center">
          <h1 className="mb-5 text-xl text-white lg:text-2xl">Ingin lebih tahu tentang KSL?</h1>
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="h-12 w-44 rounded-[40px] bg-[#64DFD0]">
            <a href="#">
              <h1 className="text-black-600 p-3 text-base font-semibold lg:p-2.5 lg:text-lg">
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
