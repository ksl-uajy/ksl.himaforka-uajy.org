import React from "react";
import CardRegis from "../atom/CardRegis";
import TrmCard from "./TrmCard";
import { Link } from "react-router-dom";
import LOGOKSL from "../../assets/img/LOGOKSL.png"


const NavAll = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRemove = (e) => {
        if (e.target.id === "1") {
            setIsActive(false)
        } else {
            setIsActive(true)
        }

        console.log(isActive);
        console.log(e.target.id);
    }
    return (
        <div className="h-[32rem] bg-secondaryBG rounded-b-[3rem] ">
            <div className="max-w-fit container mx-auto ">
                <div className=" font-display font-normal text-fontColor py-4  w-[59rem]">
                    <div className="w-[48rem] flex " >
                        <div id="left-nav" className="w-72">
                            <img srcSet={LOGOKSL} alt="logo" width="250px" />
                        </div>
                        <div id="right-nav" className="py-6 text-lg opacity-90" >
                            <div className="inline-block" >
                                <Link id="1" className="mr-4" to="/">Beranda</Link>
                                <div className="bg-hilight mt-1 w-14 h-1 ml-2 rounded-full"></div>
                            </div>
                            <div className=" inline-block group">
                                <Link className="mx-4" to="activity">Kegiatan</Link>
                                <div className="bg-hilight mt-1 w-14 h-1 mx-auto rounded-full hidden"></div>
                                <div className="bg-hilight mt-0.5 w-1.5 h-1.5 mx-auto rounded-full hidden group-hover:block"></div>
                            </div>
                            <div className=" inline-block group" >
                                <Link id="2" className="mx-4" to="about">Tentang KSL</Link>
                                <div className="bg-hilight mt-1 w-20 h-1 mx-auto rounded-full hidden"></div>
                                <div className="bg-hilight mt-0.5 w-1.5 h-1.5 mx-auto rounded-full hidden group-hover:block"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center" >
                    <CardRegis />
                    <TrmCard />
                </div>
            </div>
        </div>
    )
}

export default NavAll;