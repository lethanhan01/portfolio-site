import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Skills</h1>
            <h3>Technical</h3>
            <br />
            <ResumeDownload altText="Download my CV" />
            <br />
            <div className="text-block">
                <h2>Programming Languages</h2>
                <ul>
                    <li>JavaScript, TypeScript, Java, C/C++, Python</li>
                </ul>
                <br />
                <h2>Front-end</h2>
                <ul>
                    <li>HTML5, CSS3, React.js, Tailwind CSS</li>
                </ul>
                <br />
                <h2>Back-end</h2>
                <ul>
                    <li>Node.js, Express.js, libGDX, Spring Boot (basic)</li>
                </ul>
                <br />
                <h2>Databases</h2>
                <ul>
                    <li>MySQL, MongoDB, PostgreSQL</li>
                </ul>
                <br />
                <h2>Tools</h2>
                <ul>
                    <li>Git, GitHub, LaTeX</li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Relevant Coursework</h2>
                <ul>
                    <li>
                        Data Structures & Algorithms, Object-Oriented
                        Programming, Database, Computer Architecture, Intro to
                        Artificial Intelligence, Software Engineering, Computer
                        Network, Operating System
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Languages</h2>
                <ul>
                    <li>Japanese — JLPT N3 (Intermediate)</li>
                    <li>English — Full professional proficiency</li>
                    <li>Vietnamese — Native or bilingual proficiency</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
