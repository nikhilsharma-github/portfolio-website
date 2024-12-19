import React from "react";
import logo from '../assets/PortfolioLogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-start justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="" />
            </div>
            <div className="m-9 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin></FaLinkedin>
                <FaGithub></FaGithub>
                <SiLeetcode></SiLeetcode>
            </div>
        </nav>
    );
};

export default Navbar;
