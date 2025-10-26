import React from "react";
import { ABOUT_TEXT } from "../constants/content.js";
import { motion } from "motion/react";


const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-4 scroll-mt-40">
            <h1 className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400">
                About
                <span className="text-slate-200">Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration:0.5}}
                className="w-full">
                    <div className="flex justify-center lg:justify-center">
                        <p className="text-xs sm:text-lg my-2 px-12 py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;