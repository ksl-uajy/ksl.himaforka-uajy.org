import React from "react";

const CardOrgn = ({ nama, jabatan, foto }) => {
    return (
        <div className="bg-cardColor w-32 md:w-44 md:h-48 rounded-3xl p-2 md:p-4 text-fontColor font-display">
                <div className="bg-white rounded-full w-16 h-16 md:w-24 md:h-24 mx-auto overflow-auto">
                    <img src={foto} alt="" />
                </div>
                <div className="text-center mt-2">
                    <h1 className="text-sm md:text-base font-bold">{nama}</h1>
                    <h2 className="text-sm md:text-base">{jabatan}</h2>
                </div>
        </div>
    )
}
export default CardOrgn;