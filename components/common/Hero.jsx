import React, { useRef } from "react";
import DownloadIcon from "@/icons/DownloadIcon";

const Hero = () => {
    const handleScrollClick = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className="hero">
            <h1>Shivam Rai</h1>
            <p className="subtitle">
                Software Engineer, Full-Stack & App Developer
            </p>
            <a href="/Shivam Rai.pdf" className="button resume-link" download>
                <DownloadIcon />
                Download Resume
            </a>
            <button onClick={handleScrollClick} className="scroll-indicator-link">
                <div className="scroll-indicator"></div>
            </button>
        </header>
    );
};

export default Hero;
