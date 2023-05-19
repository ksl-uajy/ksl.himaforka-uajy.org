import Image from "next/image";

import Logo from "../../public/kslLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto w-full p-4 font-rubik sm:p-6">
        <div className="container mx-auto w-full p-4 sm:p-6">
          <div className="border md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://ksl.himaforka-uajy.org/" className="items-right flex">
                <Image src={Logo} alt="Logo KSL" className="mr-3 w-56 border"></Image>
              </a>
              <span className="text-black-500 dark:text-black-400 border text-sm">
                Kelompok Studi Linux adalah...
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
              <div>
                <h2 className="mb-6 text-sm uppercase text-gray-900 dark:text-black">Beranda</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Daftar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Homepage
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-black">
                  Kegiatan
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Materi
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Event
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Galeri
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-black">
                  Media Sosial
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      E-mail
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      LinkTree
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-20">
            <span className="dark:text-black-400 block border text-center text-sm text-gray-500 sm:text-center">
              Made with ❤️ from KSL 2022/2023 <br /> source code is FOSS and available on GitHub
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
