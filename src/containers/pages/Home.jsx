import React from "react";
import CardRegis from "../../components/atom/CardRegis";
import Deskripsi from "../../components/atom/Deskripsi";
import QnA from "../../components/atom/QnA";
import TrmCard from "../../components/molecule/TrmCard";


const Home = ({Hours, Day , Minutes, Seconds, time , hide, style, login}) => {
        return (
                <div className="container mx-auto max-w-fit relative mt-14 md:mt-6">
                        <div className="md:flex lg:justify-center ">
                                <CardRegis cardReg={style} login={login}/>
                                <TrmCard Time={time} Hide={hide} day={Day} hours={Hours} minutes={Minutes} seconds={Seconds} />
                        </div>
                        <Deskripsi />
                        <QnA />
                </div>
        )
}


export default Home;