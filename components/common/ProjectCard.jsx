import React from "react";
import Card from "@/components/common/Card";

const ProjectCard = ({ project }) => (
    <Card>
        <h3 className="project-heading">{project.title}</h3>
        <ul>
            {project.description.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
        </ul>
    </Card>
);

export default ProjectCard;