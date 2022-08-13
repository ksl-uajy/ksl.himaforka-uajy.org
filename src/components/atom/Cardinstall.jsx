import React from "react";
import Button from "./Button";

const Cardinstall = () => {
    return (
        <div className="font-display rounded-2xl bg-cardColor flex justify-between py-4 md:py-6 px-4 md:px-8 mt-2 md:mt-4 max-w-lg">
            <div className="mr-2">
                <h1 className="font-semibold text-base md:text-xl">Instalasi Kali Linux</h1>
                <p className="text-sm md:text-base">08 September 2022</p>
            </div>
            <Button style={"my-auto md:hidden"} styleH={"opacity-90 py-2 px-2"} title={"Download"} />
            <Button style={"my-auto hidden md:block"} styleH={"opacity-90 py-3 px-3"} title={"Download Materi"} />
        </div>
    )
}

export default Cardinstall;