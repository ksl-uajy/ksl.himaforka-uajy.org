import { useState, useEffect } from "react";
import Regisimg from "../../assets/img/Regisimg.png";
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { graphConfig, loginRequest } from "../../authConfig";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const Register = ({ reg }) => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const isAuthenticated = useIsAuthenticated();
    const [isvalid, setIsValid] = useState(false);

    async function fetchData() {
        let graphToken = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        });
        graphToken = graphToken.accessToken;

        let fetchedData = await fetch(graphConfig.graphMeEndpoint, {
            headers: {
                Authorization: `Bearer ${graphToken}`
            }
        });
        fetchedData = await fetchedData.json();

        let graphData = {
            npm: fetchedData.mail.split("@")[0],
            full_name: fetchedData.displayName,
            email: fetchedData.mail,
            is_registered: false
        };

        fetchedData = await fetch(`https://ksl-himaforka.web.app/api/v1/anggota-ksl?email=${fetchedData.mail}`);
        fetchedData = await fetchedData.json();
        if (fetchedData["status"] == "ok") {
            graphData["is_registered"] = true;
            graphData["phone_number"] = fetchedData["phone_number"];
        }

        setGraphData(graphData);
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);


    function handleLogin() {
        instance.loginRedirect(loginRequest);
    }

    function handleLogout() {
        instance.logoutRedirect({ postLogoutRedirectUri: "/", });
    }

    async function handleRegister() {
        let resp = await fetch("https://ksl-himaforka.web.app/api/v1/anggota-ksl", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(graphData),
        });
        resp = await resp.json();
        if (resp.status == "ok") {
            alert("Berhasil mendaftarkan anggota KSL!");
            fetchData();
        }
    };

    const handleTimeout = () =>{
        alert("Pendaftaran Sudah ditutup");
    }

    const handleError = () =>{
        alert("Pastikan Nomor Sudah Benar");
    }


    //Validation Phone Number
    let regex = /^(^\+628|628|^08)(\d{3,4}-?){2}\d{3,4}$/g;

    let handleChange = (e) => {
        setGraphData(() => {
            return {
                ...graphData,
                phone_number: e.target.value
            };
        });

        if (e.target.value == "") {
            setIsValid(false);
        }
        else if (e.target.value.match(regex)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className="xl:w-[64rem] lg:w-[56rem] md:w-[44rem] container mx-auto lg:flex my-12">
            <div className="md:w-[28rem] lg:w-[24rem] xl:w-[28rem] w-72 lg:h-96 bg-cardColor rounded-3xl mx-auto lg:mx-0">
                <div className="lg:w-[24rem] xl:w-[28rem] xl:h-64 bg-[#8085ab] rounded-3xl pt-4">
                    <img src={Regisimg} alt="img" className="mx-auto" />
                </div>
                <div className="px-8 py-6 font-display text-white opacity-80">
                    <h1 className="font-bold text-base leading-5">Selamat datang di laman <br /> pendaftaran</h1>
                    <p className="text-sm mt-2 leading-none">Pendaftaran akan ditutup pada 01 September 2022 @ 00:00 WIB. Jangan sampai ketinggalan yaa...</p>
                </div>
            </div>
            <AuthenticatedTemplate>
                {graphData && graphData["email"] &&
                    <div className="font-display text-fontColor grid md:grid-cols-2 justify-items-center  lg:ml-8 xl:grid-cols-2 lg:gap-x-8 h-[30rem] md:h-60 mx-auto md:w-[34rem] lg:w-[28.5rem] xl:w-[33rem] mt-12 md:mt-12">

                        {/* Inputan nama */}
                        <div className=" w-64 md:w-56">
                            <label className="mt-4 ml-4 block opacity-80 relative " htmlFor="nama">Nama</label>
                            <input readOnly value={graphData["full_name"]} className="bg-cardColor  focus:outline-none px-5 placeholder:text-sm  placeholder:opacity-80 rounded-full p-2 w-64 md:w-56" type="text" name="nama" id="nama" placeholder="Nama Lengkap" />
                        </div>

                        {/* Inputan email */}
                        <div className=" w-64 md:w-56">
                            <label className="mt-4 ml-4 block opacity-80 relative" htmlFor="prodi">Email</label>
                            <input readOnly value={graphData["email"]} className="bg-cardColor  focus:outline-none px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 " type="text" name="prodi" id="prodi" placeholder="Program studi" />
                        </div>

                        {/* Inputan NPM */}
                        <div className=" w-64 md:w-56">
                            <label className="mt-4 ml-4 block opacity-80 relative" htmlFor="npm">NPM</label>
                            <input readOnly value={graphData["npm"]} className="bg-cardColor  focus:outline-none px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 " type="text" name="npm" id="npm" placeholder="NPM" />
                        </div>

                        {/* Inputan No HP
                                tampilan no hp sblm register */}
                        {!graphData["is_registered"] &&
                            <div className=" w-64 md:w-56 h-24">
                                <label className="mt-4 ml-4 block opacity-80 relative" htmlFor="noWa">No Hp</label>
                                <input onChange={handleChange} className={isvalid ? "bg-cardColor px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 focus:border-[#227154] focus:border-2 border-transparent border-2 focus:outline-none " : "bg-cardColor px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 focus:border-[#791E3F] focus:border-2 border-transparent border-2 focus:outline-none "} type="tel" name="phone" id="phone" placeholder="Nomor Whatsapp" required />
                            </div>
                        }
                        {/* tampilan no hp setelah register */}
                        {graphData["is_registered"] &&
                            <div className=" w-64 md:w-56 h-24">
                                <label className="mt-4 ml-4 block opacity-80 relative" htmlFor="noWa">No Hp</label>
                                <input readOnly value={graphData["phone_number"]} className="bg-cardColor px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 border-transparent border focus:outline-none " type="tel" name="phone" id="phone" placeholder="Nomor Whatsapp" required />
                            </div>
                        }

                        {/* Button Regis and Logout */}
                        {!graphData["is_registered"] &&
                            <div onClick={reg ? handleTimeout : (isvalid ? handleRegister : handleError )} className={reg ? ("cursor-not-allowed bg-buttonColor max-w-full h-9 md:h-10 rounded-full hover:opacity-90 mt-2") : (isvalid ? "bg-buttonColor max-w-full h-9 md:h-10 rounded-full cursor-pointer hover:opacity-90 mt-2" : "cursor-not-allowed bg-buttonColor max-w-full h-9 md:h-10 rounded-full hover:opacity-90 mt-2")}>
                                <h1 className="px-8 py-2 text-fontColor font-display text-sm md:text-base">DAFTAR</h1>
                            </div>
                        }
                        {graphData["is_registered"] &&
                            <div onClick={handleLogout} className="bg-buttonColor max-w-full h-9 md:h-10 rounded-full cursor-pointer hover:opacity-90 mt-2">
                                <h1 className="px-8 py-2  text-fontColor font-display text-sm md:text-base">LOGOUT</h1>
                            </div>
                        }

                        {/* tampilan Status register */}
                        <div className="mt-4 justify-self-center">
                            <span className="flex">
                                {graphData["is_registered"] ?
                                    (
                                        <BsFillCheckCircleFill size={20} color={"#227154"} style={{ marginRight: 8 }} />
                                    )
                                    :
                                    (
                                        <BsXCircleFill size={20} color={"#791E3F"} style={{ marginRight: 8 }} />
                                    )}
                                <>{graphData["is_registered"] ? "Registered" : "Not Registered"}</>
                            </span>
                        </div>
                    </div>
                }
            </AuthenticatedTemplate>
            {/* <div className=" w-64 md:w-56 h-24">
                <label className="mt-4 ml-4 block opacity-80 relative" htmlFor="noWa">No Hp</label>
                <input onChange={handleChange} className={isvalid ? "bg-cardColor px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 focus:border-[#227154] focus:border-2 border-transparent border-2 focus:outline-none " : "bg-cardColor px-5 placeholder:text-sm placeholder:opacity-80 rounded-full p-2 w-64 md:w-56 focus:border-[#791E3F] focus:border-2 border-transparent border-2 focus:outline-none "} type="tel" name="phone" id="phone" placeholder="Nomor Whatsapp" required />
            </div>
            <div onClick={reg ? null : (isvalid ?  handleTimeout : handleError)} className={reg ? ("cursor-not-allowed bg-buttonColor max-w-full h-9 md:h-10 rounded-full hover:opacity-90 mt-2") : (isvalid ? "bg-buttonColor max-w-full h-9 md:h-10 rounded-full cursor-pointer hover:opacity-90 mt-2" : "cursor-not-allowed bg-buttonColor max-w-full h-9 md:h-10 rounded-full hover:opacity-90 mt-2")}>
                <h1 className="px-8 py-2 text-fontColor font-display text-sm md:text-base">DAFTAR</h1>
            </div> */}
        </div>
    );

};

export default Register;
