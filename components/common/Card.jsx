import React from "react";

const CornerGraphic = ({ position }) => {
    const baseClasses = "corner-graphic";
    const positionClasses = {
        "top-left": "top-2 left-2 border-t-2 border-l-2",
        "top-right": "top-2 right-2 border-t-2 border-r-2",
        "bottom-left": "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-right": "bottom-2 right-2 border-b-2 border-r-2"
    };
    return (
        <div className={`${baseClasses} ${positionClasses[position]}`}></div>
    );
};

const Card = ({ children }) => (
    <div className="card">
        <div className="card-grid-overlay"></div>
        <CornerGraphic position="top-left" />
        <CornerGraphic position="top-right" />
        <div className="card-content">{children}</div>
        <CornerGraphic position="bottom-left" />
        <CornerGraphic position="bottom-right" />
    </div>
);

export default Card;
