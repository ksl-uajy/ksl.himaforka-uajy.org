import React, { Component } from "react";
import Schedule from "../../components/molecule/Schedule";
import CardEvent from "../../components/atom/CardEvent";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../../components/atom/Button";
import {Link} from "react-router-dom"


class Activity extends Component {
    render() {
        return (
            <div className="font-display text-fontColor mt-12 lg:mt-14 xl:mt-20 md:mt-10 container mx-auto max-w-fit ">
                <Schedule />
                <div className="xl:mt-16 opacity-90">
                    <h1 className="font-semibold text-3xl">Event</h1>
                </div>
                <CardEvent JenisEvent={"Webinar"} JudulEvent={"Pemanfaatan Linux dalam Pengujian Keamanan Suatu Sistem"}
                    keterangan={"KSL kembali lagi mengadakan webinar. deskripsi singkat"} tambahan={"*webinar terbuka untuk UMUM, tidak dipungut biaya."}
                />
                <CardEvent JenisEvent={"Lomba"} JudulEvent={"Ricing desktop Linux"}
                    keterangan={"Linux tidak hanya sekedar terminal yang looks nya biasa biasa saja... Buatlah tampilan keren dengan berbagai cara."}
                />
                <Link to="/galeri">
                <Button title={"Galeri Event >"} styleH={"px-4 py-3"}/>
                </Link>
                
            </div>
        )
    }
}

export default Activity;