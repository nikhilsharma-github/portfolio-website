import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import ResumeViewer from "./components/ResumeViewer";
import BottomNav from "./components/BottomNav";

const App = () => {
    return (
        <div className="overflow-x-hidden text-slate-100 antialiased selection:bg-amber-300 selection:text-amber-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(250,200,1,0.2),rgba(50,50,10,0.1))]"></div>
            </div>
            <div className="container mx-auto px-12">
                <Navbar></Navbar>
                <Hero></Hero>
                <About></About>
                <Technologies></Technologies>
                <Experience></Experience>
                <Education></Education>
                <Projects></Projects>
                <Certifications></Certifications>
                <ResumeViewer></ResumeViewer>
                <Contact></Contact>
                <BottomNav></BottomNav>
            </div>
        </div>
    );
};

export default App;
