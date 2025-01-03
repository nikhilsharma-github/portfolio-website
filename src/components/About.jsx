import React from "react";
import aboutImg from "../../public/img/AboutProfile.jpg";
import { ABOUT_TEXT } from "../constants/content.js";
import { motion } from "motion/react";


const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400">
                About
                <span className="text-slate-200">Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-3xl w-60 md:w-72"
                            src={aboutImg}
                            alt="about"
                        />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration:0.5}}

                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-xs sm:text-lg my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;