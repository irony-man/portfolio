import React from "react";
import DownloadIcon from "@/icons/DownloadIcon";

const Hero = () => {
    const handleScrollClick = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className="hero">
            <h1
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
            >
                Shivam Rai
            </h1>
            <p
                className="subtitle animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
            >
                Software Engineer, Full-Stack & App Developer
            </p>
            <a
                href="/Shivam Rai.pdf"
                target="_blank"
                className="button resume-link animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
            >
                <DownloadIcon />
                Download Resume
            </a>
            <button
                onClick={handleScrollClick}
                className="scroll-indicator"
            ></button>
        </header>
    );
};

export default Hero;
