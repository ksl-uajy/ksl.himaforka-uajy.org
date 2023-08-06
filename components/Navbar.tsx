import Logo from "@/public/kslLogo.svg";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Header: FC = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const handleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  console.log(isHamburgerActive);

  return (
    <header className="font-rubik text-white">
      <div className="Container mx-auto flex items-center justify-between py-4 px-6 lg:px-24">
        <div className="">
          <Image alt="Logo KSL" className="w-[150px][] md:w-[220px]" src={Logo} />
        </div>
        {/* HumburgerMenu */}
        <button
          className={isHamburgerActive ? "space-y-0 md:hidden" : "space-y-1 md:hidden"}
          onClick={handleHamburger}
        >
          <div
            className={
              isHamburgerActive
                ? "h-[2px] w-[25px] translate-y-px rotate-45 bg-slate-100 transition duration-300 ease-in-out"
                : "h-[2px] w-[30px] bg-slate-100"
            }
          ></div>
          <div className={isHamburgerActive ? "hidden" : "h-[2px] w-[30px] bg-slate-100"}></div>
          <div
            className={
              isHamburgerActive
                ? "h-[2px] w-[25px] -translate-y-px -rotate-45 bg-slate-100 transition duration-300 ease-in-out"
                : "h-[2px] w-[30px] bg-slate-100"
            }
          ></div>
        </button>
        <nav className="hidden pr-5 text-white dark:text-white md:block lg:text-lg">
          <ul className="flex space-x-4">
            <li>
              <a href="">Kegiatan</a>
            </li>
            <li>
              <a href="">Tentang KSL</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
