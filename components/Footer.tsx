import Logo from "@/public/kslLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Footer: FC = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-t from-black to-transparent px-6 font-rubik text-white lg:px-24">
        <div className="container sticky top-[100vh] mx-auto w-full py-6 lg:pt-52">
          <a className="items-right flex" href="/">
            <Image alt="Logo KSL" className="w-56 pr-3" src={Logo}></Image>
          </a>
          <div className="md:flex md:justify-between">
            <div className="pb-6 md:pb-0">
              <div className="w-80 pb-6 pt-2 md:w-96 md:pb-0 md:pt-0">
                <p className="text-black-500 text-sm">
                  Kelompok Studi Linux (KSL) adalah kelompok studi yang berada dibawah naungan
                  HIMAFORKA UAJY.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3 lg:gap-16">
              <div>
                <h2 className="pb-3 font-semibold uppercase">Beranda</h2>
                <ul>
                  <li className="pb-2">
                    <Link
                      className="hover:underline"
                      href="https://forms.office.com/Pages/ResponsePage.aspx?id=WQqHiQgU7kCnKiLHAgrHR79Vzd9iUaZCj2yLK6XQpddUNDlRODlLWTNaT0NVQ1M4NktYVFpSSzNVOC4u"
                      target="_blank"
                    >
                      Daftar
                    </Link>
                  </li>
                  <li>
                    <a className="hover:underline" href="/">
                      Homepage
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="pb-3 font-semibold uppercase">Kegiatan</h2>
                <ul>
                  <li className="pb-2">
                    <Link className="hover:underline" href="/kegiatan">
                      Materi
                    </Link>
                  </li>
                  <li className="pb-2">
                    <a className="hover:underline" href="/kegiatan">
                      Event
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/kegiatan">
                      Galeri
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="pb-3 font-semibold uppercase">Media Sosial</h2>
                <ul>
                  <li className="pb-2">
                    <a
                      className="hover:underline"
                      href="https://instagram.com/ksl.uajy?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      className="hover:underline"
                      href="mailto:ksl@himaforka-uajy.org"
                      target="_blank"
                    >
                      E-mail
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://github.com/ksl-uajy"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-16">
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
