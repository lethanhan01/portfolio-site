import React from 'react';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <h3>Professional</h3>
            <br />
            <div className="text-block">
                <p>Experience details will be added here.</p>
            </div>
        </div>
    );
};

export default Experience;
