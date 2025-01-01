import React from "react";
import { CONTACT } from "../constants/content.js";
import { motion } from "motion/react";
import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-2xl md:text-3xl lg:text-4xl text-amber-400"
            >
                Get in Touch
            </motion.h1>
            <div className="d-flex text-center tracking-tighter">
                <div className="d-flex justify-start space-x-6 text-xs md:text-lg">
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="my-4"
                    >
                        <FaLocationArrow className="inline mx-2 text-blue-500" />
                        {CONTACT.address}
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="my-4"
                    >
                        <IoCall className="inline mx-2 text-green-600" />
                        {CONTACT.phoneNo}
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="my-4"
                    >
                        <SiGmail className="inline mx-2 text-red-600" />
                        {CONTACT.email}
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
