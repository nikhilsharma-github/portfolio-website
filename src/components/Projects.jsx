import React from "react";
import { PROJECTS } from "../constants/content.js";
import { motion } from "motion/react";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/3"
                        >
                            <img
                                src={project.image}
                                width={300}
                                height={300}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-2/3"
                        >
                            <h6 className="mb-2 font-semibold text-xs md:text-lg">
                                {project.title}
                            </h6>
                            <p className="mb-4 text-neutral-400 text-xs md:text-lg">
                                {project.description}
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-flex flex-row  px-2 py-1 m-1 rounded bg-neutral-900 font-medium text-amber-600 text-xs md:text-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="my-2"
                            >
                                {project.deployed_link && (
                                    <a
                                        href={project.deployed_link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="inline-flex items-center align-center mr-2 rounded bg-neutral-900 px-2 py-1  font-medium text-green-600 text-xs md:text-lg">
                                            <GrDeploy className="inline mx-1" />
                                            Deployed Link
                                        </span>
                                    </a>
                                )}
                                {project.github_link && (
                                    <a
                                        href={project.github_link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="inline-flex items-center align-center mr-2 rounded bg-neutral-900 px-2 py-1  font-medium text-gray-400 text-xs md:text-lg">
                                            <FaGithub className="inline mx-1" />
                                            Github Link
                                        </span>
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
