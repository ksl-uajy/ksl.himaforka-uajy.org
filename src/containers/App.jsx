import React, { useState, useEffect, useRef } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../containers/pages/Home";
import About from "../containers/pages/About";
import Activity from "./pages/Activity";
import Footer from "../components/Footer";
import Register from "../components/molecule/Register";
import Navbar from "../components/atom/Navbar";
import Galeri from "./pages/Galeri"

const App = () => {
  const [TimerDay, setTimerDay] = useState('00');
    const [TimerHours, setTimerHours] = useState('00');
    const [TimerMinutes, setTimerMinutes] = useState('00');
    const [TimerSeconds, setTimerSeconds] = useState('00');
    const [isDisplay, setDisplay] = useState(false);

    let Interval = useRef();

    const StartTime = () => {
        const CountdownDate = new Date('september 1, 2022 00:00:00').getTime();

        Interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = CountdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(Interval.current);
                setDisplay(true);


            } else {
                setTimerDay(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }
    useEffect(() => {
        StartTime();
        return () => {
            clearInterval(Interval.current)
        };
    });
  return (
    <div className="bg-primaryBG">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home login={isDisplay} style={isDisplay ? "xl:mt-16 md:mt-40 bg-buttonColor max-w-fit rounded-full text-center cursor-not-allowed hover:opacity-90":"xl:mt-16 md:mt-40 bg-buttonColor max-w-fit rounded-full text-center cursor-pointer hover:opacity-90"} time={isDisplay ? 'hidden' : null} hide={isDisplay ? 'block' : 'hidden'} Day={TimerDay} Hours={TimerHours} Minutes={TimerMinutes} Seconds={TimerSeconds} />} />
        <Route path="activity" element={<Activity />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register reg={isDisplay}/>} />
        <Route path="galeri" element={<Galeri/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;