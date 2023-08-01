import Foto3 from "@/public/anon.jpg";
import Foto from "@/public/foto_dummy.png";
import Foto2 from "@/public/tzy.jpg";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Teams: FC = () => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonCliked = e.currentTarget.id;

    if (buttonCliked == "tahun1") {
      setButton1(true);
      setButton2(false);
      setButton3(false);
    } else if (buttonCliked == "tahun2") {
      setButton1(false);
      setButton2(true);
      setButton3(false);
    } else if (buttonCliked == "tahun3") {
      setButton1(false);
      setButton2(false);
      setButton3(true);
    }
  };

  return (
    <>
      <div className="container mx-auto px-6 py-16 font-rubik md:px-24">
        <h1 className="text-xl font-bold text-[#FAFFC4] md:text-3xl">Tim Kami</h1>

        <div className="flex gap-4 py-6">
          <button
            className={
              button1
                ? "h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-sm text-[#FDFFB0] md:text-base"
                : "h-10 w-44 rounded-lg border-2 border-[#85865D] text-sm text-[#85865D] md:text-base"
            }
            id="tahun1"
            onClick={handleClick}
          >
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </button>
          <button
            className={
              button2
                ? "h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-sm text-[#FDFFB0] md:text-base"
                : "h-10 w-44 rounded-lg border-2 border-[#85865D] text-sm text-[#85865D] md:text-base"
            }
            id="tahun2"
            onClick={handleClick}
          >
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </button>
          <button
            className={
              button3
                ? "h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-sm text-[#FDFFB0] md:text-base"
                : "h-10 w-44 rounded-lg border-2 border-[#85865D] text-sm text-[#85865D] md:text-base"
            }
            id="tahun3"
            onClick={handleClick}
          >
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </button>
        </div>

        <div className={button1 ? "md:flex md:gap-6" : "hidden"}>
          <div className="mx-auto flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 1</p>
            </div>
          </div>
          <div className="mx-auto my-6 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] py-5 pl-5 md:mx-0 md:my-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 2</p>
            </div>
          </div>
        </div>

        <div className={button2 ? "md:flex md:gap-6" : "hidden"}>
          <div className="mx-auto flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto2}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 1</p>
            </div>
          </div>
          <div className="mx-auto my-6 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] py-5 pl-5 md:mx-0 md:my-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto2}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 2</p>
            </div>
          </div>
        </div>

        <div className={button3 ? "md:flex md:gap-6" : "hidden"}>
          <div className="mx-auto flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto3}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 1</p>
            </div>
          </div>
          <div className="mx-auto my-6 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] py-5 pl-5 md:mx-0 md:my-0 md:h-28 md:w-80">
            <Image
              alt="Foto dummy"
              className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
              src={Foto3}
            />
            <div className="my-auto text-[#FDFFB4]">
              <h1 className="pb-2 text-base md:text-xl">Kak nama</h1>
              <p className="text-sm md:text-base">Peran 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
