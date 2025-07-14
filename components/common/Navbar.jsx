import React, { useState, useEffect } from "react";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CloseIcon";
import Footer from "./Footer";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <nav className={`main-nav ${isOpen ? "open" : ""}`}>
            <a href="#" className="nav-brand">
                ShivamRai_
            </a>
            <div className="nav-links-desktop">
                <a href="#about">
                    <span>//</span> About
                </a>
                <a href="#work">
                    <span>//</span> Work
                </a>
                <a href="#projects">
                    <span>//</span> Projects
                </a>
                <a href="#skills">
                    <span>//</span> Skills
                </a>
                <a href="#contact">
                    <span>//</span> Contact
                </a>
            </div>
            <div className="nav-mobile-toggle">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            {isOpen && (
                <div className="nav-mobile-menu">
                    <a href="#about" onClick={() => setIsOpen(false)}>
                        <span>//</span> About
                    </a>
                    <a href="#work" onClick={() => setIsOpen(false)}>
                        <span>//</span> Work
                    </a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>
                        <span>//</span> Projects
                    </a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>
                        <span>//</span> Skills
                    </a>
                    <a href="#activity" onClick={() => setIsOpen(false)}>
                        <span>//</span> Activities
                    </a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                        <span>//</span> Contact
                    </a>
                    <div style={{marginTop: '16rem'}}>
                        <Footer />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
