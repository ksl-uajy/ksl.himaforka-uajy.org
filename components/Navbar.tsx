import Logo from "@/public/KSL2324.svg";
import closeIcon from "@/public/closeIcon.png";
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
            <Image alt="Logo KSL" className="w-[120px] md:w-[150px]" src={Logo} />
          </Link>
        </div>
        {/* HumburgerMenu */}
        <Image alt="humburger" className="w-7 lg:hidden " onClick={handleHamburger} src={menuNav} />
        <nav className="hidden pr-5 text-white lg:block lg:text-lg dark:text-white">
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
