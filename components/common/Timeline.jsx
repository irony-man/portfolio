import React from "react";
import Card from "@/components/common/Card";
import SkillItems from "@/components/common/SkillItems";
import GitHubIcon from "@/icons/GithubIcon";
import WebIcon from "@/icons/WebIcon";

const Timeline = ({ works }) => (
    <div className="timeline">
        {works.map((item, index) => (
            <div
                key={index}
                className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                }`}
            >
                <Card>
                    <h3>
                        {item.role}
                        {item.links?.github && (
                            <a
                                href={item.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon />
                            </a>
                        )}
                        {item.links?.live && (
                            <a
                                href={item.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WebIcon />
                            </a>
                        )}
                    </h3>
                    <p className="company">
                        {item.company} ({item.date})
                    </p>
                    <ul>
                        {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                    <div
                        className="skills-list"
                        style={{ marginTop: "1.5rem" }}
                    >
                        <SkillItems skills={item.skills} />
                    </div>
                </Card>
            </div>
        ))}
    </div>
);

export default Timeline;
