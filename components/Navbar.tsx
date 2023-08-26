import closeIcon from "@/public/closeIcon.png";
import Logo from "@/public/kslLogo.svg";
import menuNav from "@/public/menuIcon.png";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Header: FC = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <header className="font-rubik text-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 lg:px-24">
        <div>
          <Link href="/">
            <Image alt="Logo KSL" className="w-[150px] md:w-[220px]" src={Logo} />
          </Link>
        </div>
        {/* HumburgerMenu */}
        <Image alt="humburger" className="w-7 lg:hidden " onClick={handleHamburger} src={menuNav} />
        <nav className="hidden pr-5 text-white dark:text-white lg:block lg:text-lg">
          <ul className="flex space-x-4">
            <li>
              <Link href="/kegiatan">Kegiatan</Link>
            </li>
            <li>
              <Link href="/tentang">Tentang KSL</Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="lg:hidden">
        <div
          className={
            isHamburgerActive
              ? "fixed top-0 z-50 grid h-1/3 w-screen place-content-center gap-y-7 rounded-b-xl border-black bg-[#4A4E24]"
              : "hidden"
          }
        >
          <Image
            alt="humburger"
            className="mx-auto w-6"
            onClick={handleHamburger}
            src={closeIcon}
          />
          <div>
            <Link href="/kegiatan">
              <div className="my-4 flex h-10 w-44 items-center justify-center rounded-full border-2 px-4  ">
                Kegiatan
              </div>
            </Link>
            <Link href="/tentang">
              <div className="my-2 flex h-10 w-44 items-center justify-center rounded-full border-2 px-4">
                Tentang KSL
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
