import React, { Fragment } from "react";
import CardOrgn from "../atom/CardOrgn";
import { dbPengurusBaru, dbPenguruslama } from "../../../data/DataPengurus";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md"
import { useState} from "react";
import { useEffect } from "react";
 
const Pengurus = () => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = (e) => {
        if (e.target.id == "active") {
            setIsActive(true);
        } else if (e.target.id == "unactive") {
            setIsActive(false);
        }
    }
    
    useEffect(() => {
       let time = setInterval(() => {
            setIsActive(!isActive);
            console.log("anu");
       }, 15000);
        
       return(() =>{
        clearInterval(time)
        console.log("dari return");
       })
      }, [isActive]);

    return (
        <Fragment>
            <div className="text-justify md:w-[44rem] lg:w-[56rem] xl:w-[72rem] xl:mt-12 flex">
                <h1 className="font-bold text-xl md:text-2xl lg:text-3xl opacity-80 mt-8 mb-8 md:mb-4 text-left xl:mr-8">Susunan Organisasi</h1>
                <div className="w-36 h-10 rounded-xl bg-cardColor mt-7 py-2 text-center  ">
                    <h1 className="font-medium text-lg opacity-80">{isActive ? "2022/2023" : "2021/2022"}</h1> 
                </div>
            </div>
            {isActive ?
                (<>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center mb-8 xl:mb-14 xl:mt-10">
                        {dbPengurusBaru.map((databaru) =>
                            <CardOrgn key={databaru.id} foto={databaru.img} nama={databaru.nama} jabatan={databaru.jabatan} />
                        )}

                    </div>

                    <div className="flex justify-center opacity-80">
                        <MdRadioButtonChecked id="active" onClick={handleClick} size={20} 
                        style={{ marginRight: 4 }}
                        className={"hover:scale-125"} />
                        <MdRadioButtonUnchecked id="unactive" onClick={handleClick} size={20} 
                        className={"hover:scale-125"}/>
                    </div>
                </>
                ) :
                (<>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center mx-auto mb-4 xl:mb-14 xl:mt-10">
                        {dbPenguruslama.map((datalama) =>
                            <CardOrgn key={datalama.id} foto={datalama.img} nama={datalama.nama} jabatan={datalama.jabatan} />
                        )}
                    </div>
                    <div className="flex justify-center opacity-80">
                        <MdRadioButtonUnchecked id="active" onClick={handleClick} size={20} 
                        style={{ marginRight: 4 }} 
                        className={"hover:scale-125"} />
                        <MdRadioButtonChecked id="unactive" onClick={handleClick} size={20} 
                        style={{ marginRight: 4 }}
                        className={"hover:scale-125"} />
                    </div>
                </>
                )}
        </Fragment>
    )
}

export default Pengurus;