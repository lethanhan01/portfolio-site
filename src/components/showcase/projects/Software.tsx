import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Selected projects that highlight my full-stack and backend
                experience.
            </p>
            <br />
            <ResumeDownload altText="Want the full CV?" />
            <br />
            <div className="text-block">
                <h2>Citizen Management</h2>
                <p>
                    <b>Oct. 2025 – Dec. 2025</b>
                </p>
                <p>
                    Links:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/lethanhan01/Citizen-Management.git"
                    >
                        GitHub
                    </a>{' '}
                    |{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://citizen-management.vercel.app/"
                    >
                        Live Demo
                    </a>
                </p>
                <ul>
                    <li>
                        Developed a full-stack web app for managing household
                        records and administrative data.
                    </li>
                    <li>
                        Built responsive UI with React.js and Tailwind CSS.
                    </li>
                    <li>
                        Implemented RESTful APIs with Node.js and Express.js.
                    </li>
                    <li>
                        Integrated role-based authentication and database
                        operations using Sequelize and Supabase.
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Paradise Seeker - 2D RPG Game</h2>
                <p>
                    <b>Mar. 2025 – Jun. 2025</b>
                </p>
                <p>
                    Link:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/lethanhan01/Paradise-Seeker.git"
                    >
                        GitHub
                    </a>
                </p>
                <ul>
                    <li>
                        Built a 2D RPG game using Java and libGDX with player
                        movement, NPC interactions, and map exploration.
                    </li>
                    <li>
                        Implemented combat mechanics, collision detection, and
                        an inventory system.
                    </li>
                    <li>
                        Applied object-oriented design patterns for modular,
                        maintainable architecture.
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Hotel Management System</h2>
                <p>
                    <b>Apr. 2025 – Jul. 2025</b>
                </p>
                <p>
                    Link:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/lethanhan01/Hotel-Management-System.git"
                    >
                        GitHub
                    </a>
                </p>
                <ul>
                    <li>
                        Built a hotel management application that supports
                        booking, billing, and customer management.
                    </li>
                    <li>
                        Implemented room management, reservation, and invoice
                        modules.
                    </li>
                    <li>
                        Designed a normalized database schema and optimized SQL
                        queries.
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>E-Commerce Store</h2>
                <p>
                    <b>Aug. 2025</b>
                </p>
                <p>
                    Link:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/lethanhan01/E-Commerce-Store.git"
                    >
                        GitHub
                    </a>
                </p>
                <ul>
                    <li>
                        Built a full-stack e-commerce site with product catalog,
                        cart, and payment workflow.
                    </li>
                    <li>
                        Implemented authentication, product management, and
                        order tracking modules.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SoftwareProjects;
