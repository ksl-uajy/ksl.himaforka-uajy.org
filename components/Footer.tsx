import Logo from "@/public/kslLogo.svg";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Footer: FC = () => {
  return (
    <>
      <div className="mx-auto h-screen w-full bg-gradient-to-t from-black to-transparent px-4 font-rubik text-white md:px-24">
        <div className="container sticky top-[100vh] mx-auto w-full p-6 lg:pt-52">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a className="items-right flex" href="https://ksl.himaforka-uajy.org/">
                <Image alt="Logo KSL" className="mr-3 w-56" src={Logo}></Image>
              </a>
              <p className="text-black-500 text-sm lg:text-base">Kelompok Studi Linux adalah...</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3 lg:gap-16">
              <div>
                <h2 className="mb-6 font-semibold uppercase">Beranda</h2>
                <ul className="">
                  <li className="mb-4">
                    <a className="hover:underline" href="#">
                      Daftar
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Homepage
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 font-semibold uppercase">Kegiatan</h2>
                <ul>
                  <li className="mb-4">
                    <a className="hover:underline" href="#">
                      Materi
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="hover:underline" href="#">
                      Event
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Galeri
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 font-semibold uppercase">Media Sosial</h2>
                <ul className="">
                  <li className="mb-4">
                    <a className="hover:underline" href="#">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="hover:underline" href="#">
                      E-mail
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      LinkTree
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-16 sm:mx-auto">
            <p className="text-center text-sm text-white">
              Made with {"<"}3 from KSL 2022/2023 <br /> source code is FOSS and available on GitHub
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
