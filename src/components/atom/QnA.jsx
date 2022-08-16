import React from "react";
import CardQuest from "./CardQuest";
import Alexis from "../../assets/img/pengurus/Alexis.jpg"
import Eric from "../../assets/img/pengurus/Eric.jpg"
 
const QnA = () => {
    return (
        <div className="lg:w-[56rem] xl:w-[72rem] md:w-[44rem] lg:ml-3  md:mx-auto font-display text-fontColor mt-8 lg:mt-16 xl:mt-20 ">
            <div className=" opacity-80">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">Masih ada pertanyaan ?</h1>
                <p className="text-base md:text-lg lg:text-xl ">silahkan Hubungi salah satu kontak dibawah ini...</p>
            </div>
            <div className="md:flex mb-4 lg:mt-4 lg::mb-8 xl:mt-8 xl:mb-24">
                <CardQuest nama={"Alexis Divasonda"} img={Alexis} linkWA={"https://api.whatsapp.com/send?phone=6282352807977"} linkIG={"https://www.instagram.com/ngaing_bantaq/"}/>
                <CardQuest nama={"Erick Marcellino"} img={Eric} linkWA={"https://api.whatsapp.com/send?phone=6281228332396"} linkIG={"https://www.instagram.com/erickmarcellinop/"}/>
            </div>
        </div>
    )
}
export default QnA;