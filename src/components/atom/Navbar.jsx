import React, { useState, useEffect } from "react";
import LogoKSL from "../../assets/icon/KSL-header.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isHamburgerActive, setHamburgerActive] = useState(false);
    const [underline, setUnderline] = useState(
        {
            Beranda: {
                style: "hidden mx-auto md:block md:mt-1 lg:mt-2 xl:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
            },
            Kegiatan: {
                style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 xl:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
            },
            Tentang: {
                style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 xl:mt-2 w-20 h-1 bg-[#52598A] rounded-full"
            }
        }
    )

    const [secondNav, setSecondNav] = useState("h-[46rem] md:h-[26rem] lg:h-[28rem] xl:h-[34rem] w-full bg-secondaryBG rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem] z-0 absolute")

    const handleClickFake = () => {
        setHamburgerActive(!isHamburgerActive);
    }

    const handleChangePage = (e) => {
        if (e.target.name == "beranda") {
            if (screen.width < 768) {
                setHamburgerActive(!isHamburgerActive);
            }
        } else if (e.target.name == "kegiatan") {
            if (screen.width < 768) {
                setHamburgerActive(!isHamburgerActive);
            }
        } else if (e.target.name == "tentang") {
            if (screen.width < 768) {
                setHamburgerActive(!isHamburgerActive);
            }
        }
    }

    const location = useLocation();

    
    useEffect(() =>{
        if (location.pathname == "/") {
            setSecondNav("h-[46rem] md:h-[26rem] lg:h-[28rem] xl:h-[34rem] w-full bg-secondaryBG rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem] z-0 absolute");
            setUnderline({
                Beranda: {
                    style: "hidden mx-auto md:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                },
                Kegiatan: {
                    style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                },
                Tentang: {
                    style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-20 h-1 bg-[#52598A] rounded-full"
                }
            });
        }else{
            setSecondNav("h-[6rem] md:h-[5.5rem] lg:h-[7rem] xl:h-[9rem] bg-secondaryBG w-full rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem] z-0 absolute");
            if (location.pathname == "/activity") {
                setUnderline({
                    Beranda: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                    },
                    Kegiatan: {
                        style: "hidden mx-auto md:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                    },
                    Tentang: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-20 h-1 bg-[#52598A] rounded-full"
                    }
                })
            }else if (location.pathname == "/about") {
                setUnderline({
                    Beranda: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                    },
                    Kegiatan: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                    },
                    Tentang: {
                        style: "hidden mx-auto md:block md:mt-1 lg:mt-2 w-20 h-1 bg-[#52598A] rounded-full"
                    }
                })
            }else{
                setUnderline({
                    Beranda: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                    },
                    Kegiatan: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-16 h-1 bg-[#52598A] rounded-full"
                    },
                    Tentang: {
                        style: "hidden mx-auto md:group-hover:block md:mt-1 lg:mt-2 w-20 h-1 bg-[#52598A] rounded-full"
                    }
                });
            }
        }
    }, [location])

    return (
            <div className="grid grid-cols-2 md:grid-cols-none md:flex md:justify-center  relative font-display ">
                <div className="md:w-44 lg:w-56 xl:w-72 xl:mt-0 xl:mr-8 z-30 pt-4 ">
                    <img src={LogoKSL} alt="Logo KSl" />
                </div>
                <button className="md:hidden justify-self-end mr-5 z-20 mt-3 " onClick={handleClickFake}>
                    <div className={isHamburgerActive ? "transition duration-300 ease-in-out rotate-45 translate-y-0.5 w-[30px] h-[2px] mt-1 bg-white" : "transition duration-300 ease-in-out w-[30px] h-[2px] mt-1 bg-white "}></div>
                    <div className={isHamburgerActive ? "hidden" : "w-[30px] h-[2px] mt-1 bg-white"}></div>
                    <div className={isHamburgerActive ? "transition duration-300 ease-in-out -rotate-45 -translate-y-1 w-[30px] h-[2px] mt-1 bg-white" : "transition duration-300 ease-in-out w-[30px] h-[2px] mt-1 bg-white "}></div>
                </button>
                <nav className={isHamburgerActive ? "block z-50 absolute top-16 right-16" : "hidden md:block md:static z-50 md:w-[30rem] lg:w-[44rem]  xl:w-[56rem]"}>
                    <ul className="font-light xl:text-xl md:flex text-fontColor w-32 h-36 md:w-full md:h-full bg-buttonColor md:bg-transparent md:p-4 xl:py-9 lg:py-6 text-center  py-1 rounded-lg">
                        <li className="mt-4 md:mr-6 lg:mr-8 xl:mr-14 group md:h-11" onClick={handleChangePage}>
                            <Link to="/" name="beranda">
                                Beranda
                            </Link>
                            <div className={underline.Beranda.style}></div>
                        </li>
                        <li className="mt-4 md:mr-6 lg:mr-8 xl:mr-14 group md:h-11" onClick={handleChangePage}>
                            <Link to="activity" name="kegiatan">
                                Kegiatan
                            </Link>
                            <div className={underline.Kegiatan.style}></div>
                        </li>
                        <li className="mt-4 md:mr-6 lg:mr-8 xl:mr-14 group md:h-11" onClick={handleChangePage}>
                            <Link to="about" name="tentang">
                                Tentang KSL
                            </Link>
                            <div className={underline.Tentang.style}></div>
                        </li>
                    </ul>
                </nav>
                <div className={secondNav}></div>
            </div>
    )
}

export default Navbar;