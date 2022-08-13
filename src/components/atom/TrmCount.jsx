import React from "react";

const TrmCount = ({Day, Hours, Minutes, Seconds,time, hide }) => {
    return (
        <div className=" font-terminal bg-trmColor mx-auto md:mx-0 w-[18rem] md:w-[23rem] lg:w-[28rem] xl:w-[32rem] xl:h-[7rem] rounded-2xl px-6 md:px-6 md:py-4 xl:py-7 py-7 text-xs md:text-sm mt-2 md:mt-2 lg:mt-4 md:ml-4">
            <div className="text-trmUserColor">[anon@kali ~]$
                <span className="text-trmCmdColor"> ksl time</span>
            </div>
            <div className="text-fontColor">
                <div className="mt-1">
                    <p className={time}>
                       {Day} Hari {Hours} Jam {Minutes} Menit {Seconds} Detik Pendaftaran ditutup
                    </p>
                    <p className={hide + " text-lg animate-pulse"}>Pendaftaran Sudah Ditutup</p>
                </div>
            </div>
        </div>
    )
}

export default TrmCount;