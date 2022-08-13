import React from "react";
import CardViMi from "../atom/CardViMi";
import { motion } from "framer-motion";


const VisiMisi = () =>{
    return(
        <div className="text-justify md:w-[44rem] lg:w-[56rem] xl:w-[72rem]">
            <h1 className="opacity-80 text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 mt-8 xl:mt-12 xl:mb-4">Visi Dan Misi Ksl ?</h1>
            <div className="md:flex md:justify-between">
                <motion.div
                initial={{ translateX:-100 }}
                animate={{ translateX: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                }}
                >
                        <CardViMi style={"w-max-sm md:w-[19.5rem] lg:w-[25rem] xl:w-[33rem] mb-4 md:mx-0 mx-auto md:my-0"} title={"Visi"} desk={"Mendukung perkembangan minat dan daya studi mahasiswa/i jurusan Teknik Informatika di Universitas Atma Jaya Yogjakarta, khususnya dalam mengaplikasikan secara langsung serta mengikuti perkembangan di dunia teknologi informasi yang begitu pesat, ditambah pula dengan gencarnya upaya untuk mengurangi tingkat pembajakan perangkat lunak yang begitu tinggi, dengan cara mengenalkan alternatif system informasi dan menggerakkan pertisipasi para pelaku di bidang IT tersebut untuk mulai mendukung upaya mencerdaskan masyarakat komputer dengan membuka kode sumber suatu program aplikasi."}/>
                </motion.div>
                <motion.div
                initial={{ translateX:100 }}
                animate={{ translateX: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                }}
                >
                        <CardViMi style={"w-max-sm md:w-[23rem] lg:w-[29rem] xl:w-[38rem] mt-4 md:mx-0 mx-auto md:my-0"} title={"Misi"} desk={"Diharapkan dengan adanya kelompok studi linux ini, maka peminatan konsentrasi dari mahasiswa/i teknik informatika khususnya , dan kemudian akan memperluas ruang lingkupnya ke seluruh civitas akademika UAJY, yang pada akhirnya akan membentuk suatu kesadaran intelektual akan pentingnya menghargai hak cipta perangkat lunak (HAKI) dan memberikan kemajuan berarti dalam dunia teknologi informasi di kampus ini. Selanjutnya dengan dibukanya laboratorium untuk kepentingan klub studi diluar jadwal kuliah yang telah ditetapkan oleh fakultas, diharapkan pula sapat membantu mahasiswa/i jurusan teknik informatika untuk bersama-sama menggunakan fasilitas tersebut guna menyelesaikan tugas-tugas perkuliahan."}/>
                </motion.div>
            </div>
        </div>
    )
}
export default VisiMisi;