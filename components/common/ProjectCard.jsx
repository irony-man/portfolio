import React from "react";
import Card from "@/components/common/Card";
import SkillItems from "@/components/common/SkillItems";
import GitHubIcon from "@/icons/GithubIcon";
import WebIcon from "@/icons/WebIcon";

const ProjectCard = ({ project }) => (
    <Card>
        <h3 className="project-heading">
            {project.title}
            {project.links?.github && (
                <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
            )}
            {project.links?.github && (
                <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WebIcon />
                </a>
            )}
        </h3>
        <ul>
            {project.description.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
        </ul>
        <div className="project-skills">
            <SkillItems skills={project.skills} />
        </div>
    </Card>
);

export default ProjectCard;
