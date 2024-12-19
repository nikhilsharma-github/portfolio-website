import React from "react";
import logo from "../assets/PortfolioLogo.png";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex justify-between py-4">
            <div className="flex flex-shrink-0 items-center cursor-pointer  border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-amber-600 p-3 rounded-xl hover:scale-110">
                <img className="mx-2 w-12" src={logo} alt="" />
            </div>
            <div className="m-4 flex items-center justify-center lg:gap-4 gap-1 text-5xl">
                <span className="download-resume-btn text-xl text-amber-200 border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-amber-600 p-3 rounded-xl cursor-pointer hover:scale-110">
                    Download Resume
                </span>
                <a
                    href="https://www.linkedin.com/in/nikhil-sharma-7b32601b6/"
                    target="_blank"
                >
                    <RiLinkedinBoxLine className="p-2 cursor-pointer border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-slate-300 hover:scale-110  rounded-xl"></RiLinkedinBoxLine>
                </a>
                <a
                    href="https://github.com/nikhilsharma-github"
                    target="_blank"
                >
                    <FaGithub className="p-2 cursor-pointer border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-slate-300 hover:scale-110  rounded-xl"></FaGithub>
                </a>
                <a
                    href="https://leetcode.com/u/NikhilSharma_LC/"
                    target="_blank"
                >
                    <SiLeetcode className="p-2 cursor-pointer border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-slate-300 hover:scale-110  rounded-xl"></SiLeetcode>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
