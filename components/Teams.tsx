import Foto3 from "@/public/anon.jpg";
import Foto from "@/public/foto_dummy.png";
import Foto2 from "@/public/tzy.jpg";
import { db } from "@/services/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { FC, useEffect, useState } from "react";

const Teams: FC = () => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [pengurus2020, setPengurus2020] = useState<any[]>([]);
  const [pengurus2021, setPengurus2021] = useState<any[]>([]);
  const [pengurus2022, setPengurus2022] = useState<any[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonCliked = e.currentTarget.id;

    if (buttonCliked == "tahun1") {
      setButton1(true);
      setButton2(false);
      setButton3(false);
    } else if (buttonCliked == "tahun2") {
      setButton1(false);
      setButton2(true);
      setButton3(false);
    } else if (buttonCliked == "tahun3") {
      setButton1(false);
      setButton2(false);
      setButton3(true);
    }
  };

  useEffect(() => {
    const fetchPengurusTahun2020 = async () => {
      try {
        const queryData = query(collection(db, "Pengurus/2020/anggota"));
        const querySnapshot = await getDocs(queryData);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setPengurus2020(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    const fetchPengurusTahun2021 = async () => {
      try {
        const queryData = query(collection(db, "Pengurus/2021/anggota"));
        const querySnapshot = await getDocs(queryData);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setPengurus2021(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    const fetchPengurusTahun2022 = async () => {
      try {
        const queryData = query(collection(db, "Pengurus/2022/anggota"));
        const querySnapshot = await getDocs(queryData);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setPengurus2022(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchPengurusTahun2020();
    fetchPengurusTahun2021();
    fetchPengurusTahun2022();
  }, []);

  return (
    <>
      <div className="px-6 pb-12 font-rubik md:px-12 lg:px-24">
        <h1 className="text-xl font-bold text-[#FAFFC4] md:text-3xl">Tim Kami</h1>

        <div className="flex gap-4 py-6">
          <button
            className={
              button1
                ? "h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-xs text-[#FDFFB0] md:text-base"
                : "h-10 w-44 rounded-lg border-2 border-[#85865D] text-xs text-[#85865D] md:text-base"
            }
            id="tahun1"
            onClick={handleClick}
          >
            <h1 className="py-1 text-center">KSL 2023-2024</h1>
          </button>
          <button
            className={
              button2
                ? "h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-xs text-[#FDFFB0] md:text-base"
                : "h-10 w-44 rounded-lg border-2 border-[#85865D] text-xs text-[#85865D] md:text-base"
            }
            id="tahun2"
            onClick={handleClick}
          >
            <h1 className="py-1 text-center">KSL 2022-2023</h1>
          </button>
          <button
            className={
              button3
                ? "h-10 w-44 rounded-lg border-2 border-[#FDFFB0] text-xs text-[#FDFFB0] md:text-base"
                : "h-10 w-44 rounded-lg border-2 border-[#85865D] text-xs text-[#85865D] md:text-base"
            }
            id="tahun3"
            onClick={handleClick}
          >
            <h1 className="py-1 text-center">KSL 2021-2022</h1>
          </button>
        </div>
        {/*Pengurus 2022 */}
        <div
          className={
            button1 ? "md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4" : "hidden"
          }
        >
          {pengurus2022.map((anggota, index) => (
            <div
              className="mx-auto mb-3 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:mb-0 md:h-28 md:w-80"
              key={index}
            >
              <Image
                alt="Foto dummy"
                className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
                height={50}
                src={anggota.foto}
                width={50}
              />
              <div className="my-auto text-[#FDFFB4]">
                <h1 className="pb-2 text-base md:text-xl">{anggota.nama}</h1>
                <p className="text-sm md:text-base">{anggota.peran}</p>
              </div>
            </div>
          ))}
        </div>
        {/* pengurus 2021 */}
        <div
          className={
            button2 ? "md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4" : "hidden"
          }
        >
          {pengurus2021.map((anggota, index) => (
            <div
              className="mx-auto mb-3 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:mb-0 md:h-28 md:w-80"
              key={index}
            >
              <Image
                alt="Foto dummy"
                className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
                height={50}
                src={anggota.foto}
                width={50}
              />
              <div className="my-auto text-[#FDFFB4]">
                <h1 className="pb-2 text-base md:text-xl">{anggota.nama}</h1>
                <p className="text-sm md:text-base">{anggota.peran}</p>
              </div>
            </div>
          ))}
        </div>
        {/* pengurus 2020 */}
        <div
          className={
            button3 ? "md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4" : "hidden"
          }
        >
          {pengurus2020.map((anggota, index) => (
            <div
              className="mx-auto mb-3 flex h-24 w-64 gap-6 rounded-2xl bg-[#3B3E21] pl-5 md:mx-0 md:mb-0 md:h-28 md:w-80"
              key={index}
            >
              <Image
                alt="Foto dummy"
                className="my-auto h-14 w-14 flex-initial rounded-full md:h-16 md:w-16"
                height={50}
                src={anggota.foto}
                width={50}
              />
              <div className="my-auto text-[#FDFFB4]">
                <h1 className="pb-2 text-base md:text-xl">{anggota.nama}</h1>
                <p className="text-sm md:text-base">{anggota.peran}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
