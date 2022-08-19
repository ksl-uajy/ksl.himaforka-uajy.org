import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loginRequest } from "../../authConfig";


const CardRegis = ({ cardReg, login }) => {
    const { instance, accounts } = useMsal();

    let navigate = useNavigate();


    function handleLogin() {
        navigate("/register")
        instance.loginRedirect(loginRequest)
        
    }

    const handleTimeout = () =>{
        alert("Pendaftaran Sudah ditutup");
    }

    return (
        <motion.div
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
            }}
        >

            <div className="bg-cardColor w-[18rem] h-[21rem] md:w-[20rem] lg:w-[24rem] lg:h-[25rem] xl:w-[26rem] xl:h-[28rem] rounded-2xl md:h-[24.5rem] p-6 mx-auto md:mx-0">
                <div>
                    <h1 className="text-fontColor text-xl  md:text-[22px] lg:text-[28px] xl:text-3xl font-bold font-display leading-normal opacity-80">PENDAFTARAN ANGGOTA KELOMPOK STUDI LINUX 2022/2023 TELAH DIBUKA!</h1>
                </div>
                <div id="description" className="mt-2 md:mt-6">
                    <p className="font-display font-medium text-fontColor opacity-70 text-sm md:text-base xl:text-lg">Pendaftaran dibuka dari 19 Agustus 2022 sampai 31 Agustus 2022. Jangan sampai terlewat yaa...</p>
                </div>
                <AuthenticatedTemplate>
                    <div className="flex-none">
                        <div onClick={() => navigate('/register')} className="xl:mt-16 md:mt-16 mt-8 bg-buttonColor max-w-fit rounded-full text-center cursor-pointer hover:opacity-90">
                            <h1 className="px-8 py-2 text-fontColor font-display text-sm md:text-base">Daftar</h1>
                        </div>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="flex-none">
                        <div onClick={login ? handleTimeout : handleLogin} className={cardReg}>
                            <h1 className="px-8 py-2 text-fontColor font-display text-sm md:text-base">Daftar</h1>
                        </div>
                    </div>
                </UnauthenticatedTemplate>
            </div>
        </motion.div>
    )
}

export default CardRegis;