import React, { useState, useEffect, useRef } from "react";
import Terminal from "../atom/Terminal";
import TrmCount from "../atom/TrmCount";
import { motion } from "framer-motion";

// const [TimerDay, setTimerDay] = useState('00');
// const [TimerHours, setTimerHours] = useState('00');
// const [TimerMinutes, setTimerMinutes] = useState('00');
// const [TimerSeconds, setTimerSeconds] = useState('00');
// const [isDisplay, setDisplay] = useState(false);

// let Interval = useRef();

// const StartTime = () => {
//     const CountdownDate = new Date('september 1, 2022 00:00:00').getTime();

//     Interval = setInterval(() => {
//         const now = new Date().getTime();
//         const distance = CountdownDate - now;

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
//         const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         if (distance < 0) {
//             clearInterval(Interval.current);
//             setDisplay(true);


//         } else {
//             setTimerDay(days);
//             setTimerHours(hours);
//             setTimerMinutes(minutes);
//             setTimerSeconds(seconds);
//         }
//     })
// }
// useEffect(() => {
//     StartTime();
//     return () => {
//         clearInterval(Interval.current)
//     };
// });
const TrmCard = ({day, hours,minutes, seconds, Time, Hide}) => {
    
    return (
        <motion.div
            initial={{ translateX:100 }}
            animate={{ translateX: 0 }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
            }}
        >
            <div className="mt-4 md:mt-0">
                <Terminal />
                {/* time={isDisplay ? 'hidden' : null} hide={isDisplay ? 'block' : 'hidden'} */}
                <TrmCount time={Time} hide={Hide} Day={day} Hours={hours} Minutes={minutes} Seconds={seconds} />
            </div>
        </motion.div>
    )
}
export default TrmCard;