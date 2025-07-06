"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// --- Data ---
const experienceData = [
    {
        role: "Freelance Developer",
        company: "Waiter: Contactless Dining",
        date: "Q2 2023",
        description: [
            "Built a QR-code-based dining platform with real-time updates using Vue.js, Django, and WebSockets.",
            "Implemented a machine learning-based dish recommendation system.",
            "Deployed the application on AWS and used Docker for containerization.",
        ],
    },
    {
        role: "Software Developer",
        company: "Lost Ferry Interactive",
        date: "Jul 2023 - Sep 2024",
        description: [
            "Developed a high-performance inventory traceability application, improving supply chain accuracy by 25%.",
            "Automated data pipelines, reducing manual processing time by 50%.",
            "Built CI/CD pipelines to streamline deployment, decreasing release time by 40%.",
        ],
    },
    {
        role: "Software Developer Intern",
        company: "Lost Ferry Interactive",
        date: "Nov 2022 - Jun 2023",
        description: [
            "Built a real-time algorithmic trading platform ensuring high performance and scalability.",
            "Designed and deployed a stock portfolio recommendation engine.",
        ],
    },
];

const projectsData = [
    {
        title: "Orderrr: An E-Commerce Website",
        description: [
            "Developed a responsive web application for seamless buying and selling of designs using React, Node.js, and Django.",
            "Redesigned the backend, optimizing database queries and reducing response times by 50%.",
        ],
    },
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
        "Tailwind CSS",
    ],
    "Back-end": ["Django", "Fast API", "NodeJs", "ExpressJs", "Gin"],
    Databases: ["PostgreSQL", "MongoDB"],
    "Tools & Technologies": [
        "Git",
        "AWS",
        "Docker",
        "Docker Compose",
        "Google Cloud Vision",
        "Linux",
    ],
};

function Shape({ ...props }) {
    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x += 0.001;
            ref.current.rotation.y += 0.002;
        }
    });
    return <mesh ref={ref} {...props} />;
}

function Experience() {
    const { boxGeometry, sphereGeometry, material } = useMemo(
        () => ({
            boxGeometry: new THREE.BoxGeometry(10, 10, 10),
            sphereGeometry: new THREE.SphereGeometry(6, 32, 32),
            material: new THREE.MeshStandardMaterial({
                color: 0xa0aec0,
                metalness: 0.8,
                roughness: 0.5,
            }),
        }),
        []
    );

    const shapes = useMemo(
        () =>
            Array.from({ length: 15 }, () => {
                const isBox = Math.random() > 0.5;
                const scale = Math.random() * 0.5 + 0.5;
                return {
                    geometry: isBox ? boxGeometry : sphereGeometry,
                    position: [
                        (Math.random() - 0.5) * 100,
                        (Math.random() - 0.5) * 100,
                        (Math.random() - 0.5) * 100,
                    ],
                    rotation: [
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                    ],
                    scale: [scale, scale, scale],
                };
            }),
        [boxGeometry, sphereGeometry]
    );

    const scrollY = useRef(0);
    useEffect(() => {
        const handleScroll = () => (scrollY.current = window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { pointer } = useThree();

    useEffect(() => {
        const handleMouseMove = (event) => {
            pointer.set(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            );
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [pointer]);

    const tempVector = new THREE.Vector3();

    useFrame((state) => {
        const targetZ = 50 - scrollY.current * 0.08;

        state.camera.position.z = THREE.MathUtils.lerp(
            state.camera.position.z,
            targetZ,
            0.05
        );
        tempVector.set(
            state.mouse.x * 5,
            state.mouse.y * 5,
            state.camera.position.z
        );
        state.camera.position.lerp(tempVector, 0.05);
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={0.5} color={0xffffff} />
            <pointLight
                color={0x2d2d4d}
                intensity={1.5}
                position={[10, 10, 20]}
            />
            <directionalLight
                intensity={0.8}
                color={0xffffff}
                position={[-1, -1, 1]}
            />

            {shapes.map((props, i) => (
                <Shape key={i} material={material} {...props} />
            ))}
        </>
    );
}

function ThreeCanvas() {
    return (
        <div className="three-canvas">
            <Canvas
                camera={{ position: [0, 0, 50], fov: 75 }}
                gl={{ alpha: true }}
            >
                <Experience />
            </Canvas>
        </div>
    );
}

const Navbar = () => (
    <nav className="main-nav glass-card">
        <a href="#" className="nav-brand">
            ShivamRai_
        </a>
        <div className="nav-links">
            <a href="#work">
                <span>{"//"}</span> Work
            </a>
            <a href="#projects">
                <span>{"//"}</span> Projects
            </a>
            <a href="#skills">
                <span>{"//"}</span> Skills
            </a>
            <a href="#contact">
                <span>{"//"}</span> Contact
            </a>
        </div>
    </nav>
);

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
        <div className="scroll-indicator"></div>
    </header>
);

const Section = ({ id, title, children }) => (
    <section id={id} className="section">
        <h2 className="section-title">{title}</h2>
        {children}
    </section>
);

const Timeline = ({ experiences }) => (
    <div className="timeline">
        {experiences.map((item, index) => (
            <div
                key={index}
                className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                }`}
            >
                <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="company">
                        {item.company} ({item.date})
                    </p>
                    <ul>
                        {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
);

const ProjectCard = ({ project }) => (
    <div className="work-item">
        <div className="work-item-content">
            <h3>{project.title}</h3>
            <ul>
                {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </div>
);

const SkillsCard = ({ skills }) => (
    <div className="work-item">
        <div className="work-item-content">
            <div className="skills-grid">
                {Object.entries(skills).map(([category, list]) => (
                    <div key={category} className="skill-category">
                        <h4>{category}</h4>
                        <div className="skills-list">
                            {list.map((skill) => (
                                <span key={skill} className="skill-item">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ContactForm = () => (
    <div className="work-item">
        <div className="work-item-content">
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
);

// --- Main App Component ---
export default function App() {
    return (
        <>
            <div className="main-content">
                <ThreeCanvas />
                <Navbar />
                <main>
                    <Hero />
                    <div className="content-wrapper">
                        <div className="container">
                            <Section id="work" title="Experience">
                                <Timeline experiences={experienceData} />
                            </Section>
                            <Section id="projects" title="Projects">
                                {projectsData.map((project, i) => (
                                    <ProjectCard key={i} project={project} />
                                ))}
                            </Section>
                            <Section id="skills" title="Skills">
                                <SkillsCard skills={skillsData} />
                            </Section>
                            <Section id="contact" title="Get In Touch">
                                <ContactForm />
                            </Section>
                            <footer>
                                <p>&copy; 2024 Shivam Rai</p>
                            </footer>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
