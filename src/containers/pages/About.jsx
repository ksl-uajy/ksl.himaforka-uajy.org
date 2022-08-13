import React, { Component, Fragment } from "react";
import DescKsl from "../../components/atom/DescKsl";
import VisiMisi from "../../components/molecule/VisiMisi";
import Pengurus from "../../components/molecule/Pengurus";
import { motion } from "framer-motion";

class About extends Component {
    render() {
        return (
            <motion.div
                className="text-fontColor font-display container mx-auto max-w-fit mt-12 md:mt-10 lg:mt-14 xl:mt-20"
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0,
                    ease: [0.17, 0.67, 0.83, 0.67]
                }}
            >

                <DescKsl />
                <VisiMisi />
                <Pengurus />
            </motion.div>

        )
    }
}

export default About;