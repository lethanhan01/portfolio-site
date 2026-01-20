import React from 'react';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Relevant Coursework</h1>
            <h3>Selected University Courses</h3>
            <br />
            <div className="text-block">
                <ul>
                    <li>Data Structures & Algorithms</li>
                    <li>Object-Oriented Programming</li>
                    <li>Database</li>
                    <li>Computer Architecture</li>
                    <li>Intro to Artificial Intelligence</li>
                    <li>Software Engineering</li>
                    <li>Computer Network</li>
                    <li>Operating System</li>
                </ul>
            </div>
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
