import React from "react";
import Card from "@/components/common/Card";

const SkillsCard = ({ skills }) => (
    <Card>
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
    </Card>
);

export default SkillsCard;