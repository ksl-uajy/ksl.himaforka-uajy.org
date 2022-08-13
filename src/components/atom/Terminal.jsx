import React from "react";
import image from "../../assets/img/image1.png"

const Terminal = () => {
    return (
        <div className="font-terminal bg-trmColor mx-auto md:mx-0 w-[18rem] md:w-[23rem] lg:w-[28rem] md:h-[18rem] xl:w-[32rem] xl:h-[20rem] rounded-2xl px-6 md:px-6 py-7 xl:py-7 md:py-5 text-xs md:text-sm md:ml-4">
            <div className="text-trmUserColor">[anon@kali ~]$
                <span className="text-trmCmdColor"> ksl daftar</span>
            </div>
            <div className="text-fontColor">
                <div className="mt-1">
                    <p>
                        Haloo peserta baru... :) <br/>
                        Selamat datang di website KSL, disini kalian <br className="md:hidden lg:block"/>
                        dapat mencari info KSL dan daftar KSL.
                    </p>
                </div>
                <div className="mt-4 md:mt-2">
                    <p>Sampai jumpa nanti yaa, kami tunggu kehadiran kalian</p>
                    <p>~ anon</p>
                </div>
            </div>
            <div className="text-trmUserColor mt-4 md:mt-2 lg:mt-4">[anon@kali ~]$
                <span className="text-trmCmdColor"> echo $arch</span>
            </div>
            <div className="mt-1 flex text-fontColor h-[45px] md:h-[40px] lg:h-[50px] xl:h-[56px]">
                <img srcSet={image} alt="" />
                <p className="ml-4">i use arch btw..</p>
            </div>
        </div>
    )
}

export default Terminal;