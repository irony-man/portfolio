import React from 'react';

const SkillItems = ({ skills }) => {
    return (
        <div className="skills-list">
            {skills.map((skill) => (
                <span className="skill-item" key={skill}>
                    {skill}
                </span>
            ))}
        </div>
    );
};

export default SkillItems;
