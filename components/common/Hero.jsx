import React from "react";
import DownloadIcon from "@/icons/DownloadIcon";

const Hero = () => (
    <header className="hero">
        <h1>Shivam Rai</h1>
        <p className="subtitle">
            Software Engineer, Full-Stack & App Developer
        </p>
        <p className="hero-intro">
            I design and build robust, scalable, and efficient applications,
            creating seamless digital experiences.
        </p>
        <a href="/Shivam Rai.pdf" className="button resume-link" download><DownloadIcon />Download Resume</a>
        <a className="scroll-indicator" href="#work"></a>
    </header>
);

export default Hero;