import React from "react";
import { IoLogoTableau } from "react-icons/io5";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const mintime=3, maxtime=4;
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-react-original colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-redux-original colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-jquery-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-bootstrap-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-tailwindcss-original colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-materialui-plain colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-plain.svg"
                        className="tech-icon-svg"
                    />
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                        className="tech-icon-svg"
                    />
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                        className="tech-icon-svg"
                    />
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                        className="tech-icon-svg"
                    />
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        className="tech-icon-svg"
                    />
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-flask-original-wordmark tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-nodejs-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-express-original-wordmark tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-firebase-plain colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-mysql-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-mongodb-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-microsoftsqlserver-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-oracle-original colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-git-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-github-original-wordmark tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-bitbucket-original-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-jira-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-postman-plain colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-redhat-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-vscode-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-jupyter-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-googlecloud-plain-wordmark colored tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <i className="devicon-vercel-original-wordmark tech-icon"></i>
                </motion.div>
                <motion.div
                    variants={iconVariants(getRandomNumber(mintime, maxtime))}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl border-2 border-zinc-500 p-2"
                >
                    <IoLogoTableau className="tech-icon" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;

// Technolgies:
// Programming Languages: C, C++, Java, Python, JavaScript, Typescript, SQL
// Front-end Tech: React.js, ReduxToolkit, Next.js, jQuery, Bootstrap, Tailwind, MaterialUI, Ant Design, Formik, TanstackTable
// Back-end Tech: Flask, Node.js, Express.js, RESTful APIs, Firebase
// Databases: MySQL, MongoDB, MS SQL Server, Oracle DB
// Core Subjects: Data Structures and Algorithms, Object Oriented Programming Concepts, Operating System, Computer Networks
// Tools: Git, Github, Bigbucket, JIRA, Postman, VSCode, React Bundlers, Redhat Openshift, JupyterNotebook, Tableau,
// GoogleCloudPlatform, Vercel, Agile(Scrum, Kanban)
