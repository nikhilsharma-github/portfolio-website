import React from "react";
import { HERO_CONTENT } from "../constants/content.js";
import profilePic from "../../public/img/PortfolioProfile1.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <p
                            className="pb-2 text-sm font-thin custom-font-1 
                            bg-gradient-to-r from-amber-500  bg-slate-100 bg-clip-text  text-transparent p-1"
                        >
                            Hi Everyone, welcome to my Portfolio
                        </p>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-4xl sm:text-5xl md:text-6xl font-thin lg:mt-16 lg:text-8xl custom-font-4 
                            bg-gradient-to-r from-amber-500  bg-slate-100 bg-clip-text  text-transparent p-1
                            "
                        >
                            Nikhil Sharma
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="custom-font-1 bg-gradient-to-r from-amber-500 via-slate-200 to bg-amber-500 bg-clip-text text-xl md:text-4xl tracking-tight text-transparent mb-2"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="text-xs sm:text-lg mb-8"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="ProfilePic"
                            className="rounded-3xl w-60 md:w-72"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
