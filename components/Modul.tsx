import React from "react";
import { FC, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ModulCard from "./ModulCard";

const Modul: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1350 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1350, min: 1270 },
      items: 4,
    },
    tablet2: {
      breakpoint: { max: 1270, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="px-6 pt-16 font-rubik md:px-12 lg:px-24">
        <h1 className="text-xl font-bold text-[#FAFFC4] md:text-3xl">KSL belajar apa aja sihh?</h1>
        <div className="">
          <div className="hidden lg:block">
            <Carousel responsive={responsive}>
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
              <ModulCard />
            </Carousel>
          </div>
          <div
            className="flex-no-wrap scrolling-touch no-scrollbar mb-8 flex items-start overflow-x-scroll lg:hidden"
            id="scrollContainer"
          >
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
            <ModulCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modul;
