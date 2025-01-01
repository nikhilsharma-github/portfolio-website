import React from "react";
import { CERTIFICATIONS } from "../constants/content.js";
import { motion } from "motion/react";

const Certifications = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400"
            >
                Certifications
            </motion.h2>
            <div>
                {CERTIFICATIONS.map((certificate, index) => (
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
                            <a
                                href={certificate.credential_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-24 md:w-36 mb-6 rounded"
                                />
                            </a>
                            <p className="d-inline text-xs md:text-lg">{certificate.date}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="text-xs md:text-lg mb-2 font-semibold underline underline-offset-4">
                                <a
                                    href={certificate.credential_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {certificate.title}
                                </a>
                            </h6>
                            <p className="text-xs md:text-lg mb-4 text-neutral-400">
                                {certificate.description}
                            </p>
                            {certificate.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs md:text-lg mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-amber-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
