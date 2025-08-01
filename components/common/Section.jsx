import React from "react";

const Section = ({ id, title, icon, children }) => (
    <section id={id} className="section">
        <h2 className="section-title">
            {icon}
            <span>{title}</span>
        </h2>
        {children}
    </section>
);

export default Section;
