import React from "react";
import { EXPERIENCES } from "../constants/content.js";
import { motion } from "motion/react";


const companyNameCSS=["text-lg bg-gradient-to-r from-amber-600 via-red-500 to bg-purple-500 bg-clip-text tracking-tight text-transparent mb-2","text-lg bg-gradient-to-r from-cyan-500 via-white to bg-gray-500 bg-clip-text tracking-tight text-transparent mb-2"]

const Experience = () => {
    return (
        <div id="experience" className="border-b border-neutral-900 pb-4 scroll-mt-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400"
            >
                Experience
            </motion.h2>

            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-20 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                    src={experience.company_logo}
                                    alt={experience.company}
                                    className="w-24 md:w-36 mb-6 rounded"
                            />
                            <p className="mb-2 text-md text-slate-100">
                                <span className="">{experience.year}</span>
                            </p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold text-blue-500 text-lg">
                                {experience.role} -{" "}
                                <span className={companyNameCSS[index]}>
                                    {experience.company}
                                </span>
                            </h6>
                            <ul className="mb-4 text-neutral-400 text-xs md:text-lg">
                                {experience.description.map((desc, index) => (
                                    <li key={index} className="list-disc">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                            <div className="h-20">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex flex-row  px-2 py-1 m-1 rounded bg-neutral-900 font-medium text-amber-600 text-xs md:text-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
