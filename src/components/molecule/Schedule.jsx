import { useState, useEffect } from "react";
import Cardinstall from "../atom/Cardinstall";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Schedule = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let fetchedData = await fetch("https://ksl-himaforka.web.app/api/v1/jadwal-ksl");
            fetchedData = await fetchedData.json();
            fetchedData.shift();
            setData(fetchedData);
        }
        fetchData();
    }, []);


    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className="md:w-[44rem] lg:w-[56rem] xl:w-[72rem] mx-auto ">
            <h1 className="max-w-md text-xl md:text-2xl lg:text-3xl font-bold opacity-80">Jadwal Kelas</h1>
            <Cardinstall materi={data[0][1]} tanggal={data[0][2]} />
            <div className="flex relative items-center mt-3 md:mt-4">
                <MdChevronLeft className="hidden lg:block opacity-80 cursor-pointer hover:opacity-75 hover:scale-150 mr-2" size={30} onClick={slideLeft} />
                <div id="slider" className=" xl:w-[56rem] lg:w-[42rem] md:w-[36rem] h-full flex snap-x overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth rounded-2xl font-light">
                    {/* {dbMateri.map(data => {
                        if (data.id == 99) {
                            return (<div key={data.id} className="bg-[#227154] rounded-2xl py-4 px-4 mx-2 cursor-pointer">
                                <h1 className="text-[16px]">{data.tgl}</h1>
                                <h1 className="text-[14px]">{data.Materi}</h1>
                            </div>);
                        } else if (data.id == 88) {
                            return (
                                <div key={data.id} className="bg-[#791E3F] rounded-2xl py-4 px-4 mx-2 cursor-pointer">
                                    <h1 className="text-[16px]" >{data.tgl}</h1>
                                    <h1 className="text-[14px]">{data.Materi}</h1>
                                </div>
                            );
                        } else if (data.id % 2 == 0) {
                            return (
                                <div key={data.id} className="bg-trmColor rounded-2xl py-4 px-4 mx-2 cursor-pointer">
                                    <h1 className="text-[16px]">{data.tgl}</h1>
                                    <h1 className="text-[14px]">{data.Materi}</h1>
                                </div>
                            );
                        } else if (data.id % 2 == 1) {
                            return (
                                <div key={data.id} className="bg-cardColor rounded-2xl py-4 px-4 mx-2 cursor-pointer">
                                    <h1 className="text-[16px]" >{data.tgl}</h1>
                                    <h1 className="text-[14px]">{data.Materi}</h1>
                                </div>
                            );
                        }
                    })} */}

                    {data && data.length > 0 &&
                        <>
                            {data.map(data => (

                                <div key={data[0]} className="bg-[#791E3F] rounded-2xl py-4 px-4 mx-2 cursor-pointer">
                                    <h1 className="text-[16px]" >{data[1]}</h1>
                                    <h1 className="text-[14px]">{data[2]}</h1>
                                </div>
                            ))}
                        </>
                    }

                </div>
                <MdChevronRight className="hidden lg:block opacity-80 cursor-pointer hover:opacity-75 hover:scale-150 ml-2" size={30} onClick={slideRight} />
            </div>
        </div>
    );
};

export default Schedule;
