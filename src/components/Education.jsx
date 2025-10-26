import React from "react";
import { EDUCATION } from "../constants/content.js";
import { motion } from "motion/react";

const Education = () => {
    return (
        <div id="education" className="border-b border-neutral-900 pb-4 scroll-mt-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400"
            >
                Education
            </motion.h2>
            <div>
                {EDUCATION.map((education, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="d-inline">{education.score}</p>
                            <p className="d-inline font-extralight">{education.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-bold text-xs md:text-lg">
                                    {education.title}
                            </h6>
                            <h6 className="mb-2 font-extralight text-xs md:text-lg">
                                    {education.institute_name}
                            </h6>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
