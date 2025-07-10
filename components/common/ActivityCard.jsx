import React from "react";
import Card from "@/components/common/Card";

const ActivityCard = () => {
    return (
        <Card>
            <div className="activity-item">
                <h4>Github</h4>
                <img
                    src="https://ghchart.rshah.org/irony-man"
                    alt="GitHub Contribution Graph"
                ></img>
            </div>
            <div className="activity-item">
                <h4>Leetcode</h4>
                <img
                    src="https://leetcard.jacoblin.cool/shivamrai0401?theme=catppuccinMocha&font=Roboto&ext=heatmap"
                    alt="Leetcode Contribution Graph"
                ></img>
            </div>
        </Card>
    );
};

export default ActivityCard;
