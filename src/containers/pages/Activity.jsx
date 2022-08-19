import React from "react";
import Schedule from "../../components/molecule/Schedule";
import CardEvent from "../../components/atom/CardEvent";
import Button from "../../components/atom/Button";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Activity = () => {
    let navigate = useNavigate();

    const navigasi = () => {
        navigate('/gallery')
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <div className="font-display text-fontColor mt-12 lg:mt-14 xl:mt-20 md:mt-10 container mx-auto max-w-fit " >
            <Schedule />
            <div className="lg:mt-14 xl:mt-16 md:mt-10 mt-12 opacity-90">
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">Event</h1>
            </div>
            <CardEvent JenisEvent={"Webinar"} JudulEvent={"Pemanfaatan Linux dalam Pengujian Keamanan Suatu Sistem"}
                keterangan={"KSL kembali lagi mengadakan webinar. deskripsi singkat"} tambahan={"*webinar terbuka untuk UMUM, tidak dipungut biaya."}
            />
            <CardEvent JenisEvent={"Lomba"} JudulEvent={"Ricing desktop Linux"}
                keterangan={"Linux tidak hanya sekedar terminal yang looks nya biasa biasa saja... Buatlah tampilan keren dengan berbagai cara."}
            />
            <Button click={navigasi} title={"Galeri Event >"} styleH={" lg:px-4 lg:py-2"} style={"ml-4 md:ml-0"} />

        </div>
    )
}

export default Activity;