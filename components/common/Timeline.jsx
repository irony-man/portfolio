import React from "react";
import Card from "@/components/common/Card";

const Timeline = ({ experiences }) => (
    <div className="timeline">
        {experiences.map((item, index) => (
            <div
                key={index}
                className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                }`}
            >
                <Card>
                    <h3>{item.role}</h3>
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
                        {item.skills.map((skill) => (
                            <span key={skill} className="skill-item">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Card>
            </div>
        ))}
    </div>
);

export default Timeline;
