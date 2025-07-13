import React from "react";
import Card from "@/components/common/Card";
import SkillItems from "@/components/common/SkillItems";

const SkillsCard = ({ skills }) => (
    <Card>
        <div className="skills-grid">
            {Object.entries(skills).map(([category, skills]) => (
                <div key={category} className="skill-category">
                    <h4>{category}</h4>
                    <SkillItems skills={skills} />
                </div>
            ))}
        </div>
    </Card>
);

export default SkillsCard;
