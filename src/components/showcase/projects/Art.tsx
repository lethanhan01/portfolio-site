import React from 'react';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Languages</h1>
            <h3>Proficiency</h3>
            <br />
            <div className="text-block">
                <ul>
                    <li>
                        <b>Japanese:</b> JLPT N3 (Intermediate)
                    </li>
                    <li>
                        <b>English:</b> Full professional proficiency
                    </li>
                    <li>
                        <b>Vietnamese:</b> Native or bilingual proficiency
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ArtProjects;
