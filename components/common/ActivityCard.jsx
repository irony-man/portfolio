import React from "react";
import Card from "@/components/common/Card";

const ActivityCard = ({ activity }) => {
    return (
        <Card>
            <div className="activity-item">
                <a
                    href={activity.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h4>
                        {activity.icon}
                        <span>{activity.title}</span>
                    </h4>
                    <img
                        src={activity.image}
                        alt={`${activity.title} Contribution Graph`}
                    ></img>
                </a>
            </div>
        </Card>
    );
};

export default ActivityCard;
