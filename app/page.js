"use client";
import React, { useEffect } from "react";
import BriefcaseIcon from "@/icons/BriefcaseIcon";
import CodeIcon from "@/icons/CodeIcon";
import MailIcon from "@/icons/MailIcon";
import LayersIcon from "@/icons/LayersIcon";
import BackgroundCanvas from "@/components/3d/BackgroundCanvas";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import Section from "@/components/common/Section";
import Timeline from "@/components/common/Timeline";
import ProjectCard from "@/components/common/ProjectCard";
import SkillsCard from "@/components/common/SkillsCard";
import ContactForm from "@/components/common/ContactForm";
import AboutCard from "@/components/common/AboutCard";
import UserIcon from "@/icons/UserIcon";
import ActivityCard from "@/components/common/ActivityCard";
import ActivityIcon from "@/icons/ActivityIcon";
import GitHubIcon from "@/icons/GithubIcon";
import LeetCodeIcon from "@/icons/LeetcodeIcon";
import Footer from "@/components/common/Footer";

// --- Data ---
const workData = [
    {
        role: "Software Developer",
        company: "Waiter: Contactless Dining",
        date: "Oct 2024 - Present",
        description: [
            "Built a QR-code-based dining platform with real-time updates using Vue.js, Django, and WebSockets.",
            "Implemented a machine learning-based dish recommendation system.",
            "Deployed the application on AWS and used Docker for containerization."
        ],
        skills: ["Vue.js", "Django", "WebSockets", "AWS", "Docker"],
        links: {
            github: "https://github.com/irony-man/waiter",
            live: "https://waiterrr.onrender.com/"
        }
    },
    {
        role: "Software Developer",
        company: "Lost Ferry Interactive",
        date: "Jul 2023 - Sep 2024",
        description: [
            "Developed a high-performance inventory traceability application, improving supply chain accuracy by 25%.",
            "Automated data pipelines, reducing manual processing time by 50%.",
            "Built CI/CD pipelines to streamline deployment, decreasing release time by 40%."
        ],
        skills: ["Django", "Vue.js", "GoLang", "FoundationDB", "GitHub Actions"]
    },
    {
        role: "Software Developer Intern",
        company: "Lost Ferry Interactive",
        date: "Nov 2022 - Jun 2023",
        description: [
            "Built a real-time algorithmic trading platform ensuring high performance and scalability.",
            "Designed and deployed a stock portfolio recommendation engine."
        ],
        skills: ["Django", "Vue.js", "C++", "Netsuite"]
    }
];

const projectsData = [
    {
        title: "Orderrr: An E-Commerce Website",
        description: [
            "Developed a responsive web application for seamless buying and selling of designs using React, Node.js, and Django.",
            "Redesigned the backend, optimizing database queries and reducing response times by 50%."
        ],
        skills: ["React", "Redux", "Node.js", "MongoDB", "Django", "AWS S3"],
        links: {
            github: "https://github.com/irony-man/orderrr",
            live: "https://orderrr-v2.onrender.com/"
        }
    },
    {
        title: "Blinkit Scraper",
        description: [
            "A tool to scrap sub-categories based on category id and location from blinkit.com.",
            "Features include making API calls to blinkit endpoints and extracting data to a CSV file.",
            "Uses ChromeDriver to automate the Google Chrome browser for scraping."
        ],
        skills: ["Python", "ChromeDriver", "Selenium", "Node.js"],
        links: {
            github: "https://github.com/irony-man/blinkit-scraper"
        }
    },
    {
        title: "Portfolio",
        description: [
            "A personal portfolio website built with Next.js and Three.js, featuring a dynamic 3D background and a clean, responsive UI.",
            "Designed to be fully component-based for maintainability and scalability."
        ],
        skills: ["React", "Next.js", "Three.js", "Vercel"],
        links: {
            github: "https://github.com/irony-man/portfolio"
        }
    },
    {
        title: "First Step Play School Website",
        description: [
            "A fully responsive website for a play school, built with Next.js and Tailwind CSS.",
            "Features include program listings, a gallery, an about page, and contact and application forms with email functionality."
        ],
        skills: ["React", "Next.js", "Tailwind CSS", "Nodemailer", "Vercel"],
        links: {
            github: "https://github.com/irony-man/first-step",
            live: "https://first-step-play-school.vercel.app/"
        }
    }
];

const skillsData = {
    Languages: ["C++", "Python", "JavaScript", "GoLang", "SQL"],
    "Front-end": [
        "VueJs",
        "ReactJs",
        "Next.Js",
        "Vuex",
        "Redux",
        "jQuery",
        "Bootstrap",
        "Tailwind CSS"
    ],
    "Back-end": ["Django", "Fast API", "NodeJs", "ExpressJs", "Gin"],
    Databases: ["PostgreSQL", "MongoDB"],
    "Tools & Technologies": [
        "Git",
        "AWS",
        "Docker",
        "Docker Compose",
        "Google Cloud Vision",
        "Linux"
    ]
};

const activityData = [
    {
        title: "Github",
        image: "https://ghchart.rshah.org/irony-man",
        profileLink: "https://github.com/irony-man",
        icon: <GitHubIcon />
    },
    {
        title: "Leetcode",
        image: "https://leetcard.jacoblin.cool/shivamrai0401?theme=catppuccinMocha&font=Roboto&ext=heatmap",
        profileLink: "https://leetcode.com/u/shivamrai0401",
        icon: <LeetCodeIcon />
    }
];

// --- Main App Component ---
export default function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <>
            <div className="portfolio-wrapper">
                <BackgroundCanvas />
                <Navbar />
                <main>
                    <Hero />
                    <div className="content-wrapper">
                        <div className="container">
                            <Section
                                id="about"
                                title="About Me"
                                icon={<UserIcon />}
                            >
                                <AboutCard />
                            </Section>
                            <Section
                                id="work"
                                title="Work"
                                icon={<BriefcaseIcon />}
                            >
                                <Timeline works={workData} />
                            </Section>
                            <Section
                                id="projects"
                                title="Projects"
                                icon={<CodeIcon />}
                            >
                                {projectsData.map((project, i) => (
                                    <ProjectCard key={i} project={project} />
                                ))}
                            </Section>
                            <Section
                                id="skills"
                                title="Skills"
                                icon={<LayersIcon />}
                            >
                                <SkillsCard skills={skillsData} />
                            </Section>
                            <Section
                                id="activity"
                                title="Activities"
                                icon={<ActivityIcon />}
                            >
                                {activityData.map((activity, i) => (
                                    <ActivityCard key={i} activity={activity} />
                                ))}
                            </Section>
                            <Section
                                id="contact"
                                title="Get In Touch"
                                icon={<MailIcon />}
                            >
                                <ContactForm />
                            </Section>
                            <Footer />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
