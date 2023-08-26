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
      breakpoint: { max: 1800, min: 1366 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1366, min: 1270 },
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
              className="absolute -left-7 top-28 block rounded-full bg-[#5A5A3B] p-3 shadow-lg"
              onClick={() => previous()}
            >
              {" "}
              <FiChevronLeft />
            </button>
          )}
          <button
            className="absolute -right-3 top-28 block rounded-full bg-[#5A5A3B] p-3 shadow-lg"
            onClick={() => next()}
          >
            <BiChevronRight />
          </button>
        </div>
      </IconContext.Provider>
    );
  };

  const ModulData = [
    {
      id: 1,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "Ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 2,
      imageurl: "@/public/subnetting.png",
      title: "Subnetting",
      description:
        "Subnetting adalah teknik yang digunakan untuk memecahkan jaringan menjadi beberapa subjaringan yang lebih kecil.",
    },
    {
      id: 3,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 4,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 5,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 6,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 7,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 8,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 9,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
    {
      id: 10,
      imageurl: "@/public/ethical-hackers.jpg",
      title: "Ethical Hacking",
      description:
        "ethical hacking adalah kegiatan peretasan yang dilakukan untuk mencari kelemahan atau ancaman di sebuah komputer dan jaringan.",
    },
  ];

  // const Modul = ModulData.map((item) => (
  //   <ModulCard title={item.title} url={item.imageurl} description={item.description} />
  // ));

  return (
    <>
      <div className="px-6 pb-12 pt-6 font-rubik md:px-12 md:pt-16 lg:px-24">
        <h1 className="pb-6 text-xl font-bold text-[#FAFFC4] md:text-3xl">
          KSL belajar apa aja sihh?
        </h1>
        <div>
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
              {/* {Modul} */}
            </Carousel>
          </div>
          <div
            className="flex-no-wrap scrolling-touch no-scrollbar flex items-start gap-4 overflow-x-scroll lg:hidden"
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
