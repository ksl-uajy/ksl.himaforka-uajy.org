import React from "react";
import img_1 from "../../assets/img/galery/Picture1.jpg";
import img_2 from "../../assets/img/galery/Picture2.jpg";
import img_3 from "../../assets/img/galery/Picture3.jpg";
import docWebinar1 from "../../assets/img/galery/docWebinar1.png";
import docWebinar2 from "../../assets/img/galery/docWebinar2.png";
import docWebinar3 from "../../assets/img/galery/docWebinar3.png";
import docWebinar4 from "../../assets/img/galery/docWebinar4.png";

const Galeri = () => {
    return (
        <div className="font-display text-fontColor container xl:mt-20">
            <h1>Galeri Kegiatan</h1>
            <div className="mt-8">
                <h1>tentoring</h1>
                <ul className="flex mt-2">
                    <li><img src={img_1} alt="" width={"200px"}/></li>
                </ul>
            </div>
            <div className="mt-8">
                <h1>Makrab</h1>
                <ul className="flex mt-2">
                    <li><img src={img_2} alt="" width={"200px"}/></li>
                    <li><img src={img_3} alt="" width={"200px"}/></li>
                </ul>
            </div>
            <div className="mt-8">
                <h1>Dokumentasi Webinar</h1>
                <ul className="flex mt-2">
                    <li><img src={docWebinar1} alt="" width={"200px"}/></li>
                    <li><img src={docWebinar2} alt="" width={"200px"}/></li>
                    <li><img src={docWebinar3} alt="" width={"200px"}/></li>
                    <li><img src={docWebinar4} alt="" width={"250px"}/></li>
                </ul>
            </div>
        </div>
    )
}

export default Galeri