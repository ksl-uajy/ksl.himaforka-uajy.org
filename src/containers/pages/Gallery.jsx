import React from "react";
import { useState } from "react";
import { dbGallery } from "../../../data/DataGallery";

const Galeri = () => {
    const [size, setSize] = useState("300px");

    return (
        <div className="xl:w-[72rem] lg:w-[56rem] md:w-[44rem] font-display text-fontColor container mt-8 md:mt-12 lg:mt-16 xl:mt-20">
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Galeri Kegiatan</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4">
                {
                    dbGallery.map((data) =>
                        <div key={data.id}>
                            <img src={data.source} width={size} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Galeri