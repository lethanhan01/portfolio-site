import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Le Thanh An</h3>
            <br />
            <div className="text-block">
                <p>
                    HEDSPI student at HUST (expected 2027) with a strong
                    foundation in computer science and hands-on experience
                    building full-stack web applications. Proficient in React,
                    Tailwind CSS, Node.js/Express, RESTful APIs, and SQL
                    databases. Seeking a Full-stack or Backend Internship to
                    apply and further develop practical software engineering
                    skills.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. If
                    you have any questions or opportunities, feel free to reach
                    out via the <Link to="/contact">contact page</Link>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>Education</h3>
                <br />
                <p>
                    Hanoi University of Science and Technology (HUST) — Bachelor
                    of Vietnam-Japan Information Technology Program (HEDSPI)
                    (Sept. 2023 – Sept. 2027)
                </p>
                <br />
                <p>
                </p>
            </div>
        </div>
    );
};

export default About;
