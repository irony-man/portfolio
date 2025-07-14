import React from "react";
import LinkedInIcon from "@/icons/LinkedInIcon";
import CallIcon from "@/icons/CallIcon";
import GitHubIcon from "@/icons/GithubIcon";
import LeetCodeIcon from "@/icons/LeetcodeIcon";
import MailIcon from "@/icons/MailIcon";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-social-links">
            <a href="https://github.com/irony-man" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/shivamrai0401" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://leetcode.com/u/shivamrai0401" target="_blank" rel="noopener noreferrer">
                <LeetCodeIcon />
            </a>
            <a href="mailto:shivamrai0401@gmail.com" aria-label="Email">
                <MailIcon />
            </a>
            <a href="tel:+918957866455" aria-label="Email">
                <CallIcon />
            </a>
        </div>
        <p>&copy; 2025 Shivam Rai</p>
    </footer>
  );
};

export default Footer;
