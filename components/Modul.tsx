import React from "react";
import { FC, useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <IconContext.Provider value={{ color: "#FCFFAF", size: "30px" }}>
        <div
          className="carousel-button-group flex w-full items-center 
        justify-center"
        >
          {currentSlide > 0 && (
            <button
              className="absolute top-40 -left-7 block rounded-full bg-[#5A5A3B] p-3 shadow-lg"
              onClick={() => previous()}
            >
              {" "}
              <FiChevronLeft />
            </button>
          )}
          <button
            className="absolute -right-3 top-40 block rounded-full bg-[#5A5A3B] p-3 shadow-lg"
            onClick={() => next()}
          >
            {/* <span className="block "> */}
            <BiChevronRight />
            {/* </span> */}
          </button>
        </div>
      </IconContext.Provider>
    );
  };

  return (
    <>
      <div className="px-6 pt-16 font-rubik md:px-12 lg:px-24 lg:pb-6">
        <h1 className="text-xl font-bold text-[#FAFFC4] md:text-3xl">KSL belajar apa aja sihh?</h1>
        <div className="">
          <div className="relative hidden lg:block">
            <Carousel
              arrows={false}
              className=""
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside={true}
              responsive={responsive}
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
            </Carousel>
          </div>
          <div
            className="flex-no-wrap scrolling-touch no-scrollbar mb-8 flex items-start gap-4 overflow-x-scroll lg:hidden"
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
