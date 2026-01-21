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
                    {' '}|{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/watch?v=L2Wl6m0teB8"
                    >
                        YouTube Demo
                    </a>
                </p>
                <p>
                    A full-stack web application that helps neighborhood/ward
                    administrators manage citizen and household operations in a
                    centralized, transparent workflow.
                </p>
                <ul>
                    <li>
                        Core modules: household registry, citizen profiles,
                        population changes (moves/updates), temporary residence
                        and temporary absence.
                    </li>
                    <li>
                        Fee and contribution tracking to support local
                        bookkeeping and reporting.
                    </li>
                    <li>
                        Authentication using JWT and role-based access (e.g.,
                        neighborhood lead vs accountant).
                    </li>
                    <li>
                        Monorepo structure with separate <b>client</b> (React +
                        Vite) and <b>server</b> (Node.js + Express) codebases.
                    </li>
                    <li>
                        Database layer: PostgreSQL with Sequelize ORM for data
                        modeling and CRUD operations.
                    </li>
                    <li>
                        Frontend stack: TypeScript, Tailwind CSS, Axios, React
                        Router, and app-level stores in
                        <code> client/src/stores</code>.
                    </li>
                </ul>
                <p>
                    Demo accounts (from the project README):
                    <br />
                    <b>Neighborhood lead:</b>{' '}
                    <code>admin_vip</code> / <code>Admin@123</code>
                    <br />
                    <b>Accountant:</b> <code>ketoan2</code> / <code>123456</code>
                </p>
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
                    {' '}|{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://youtu.be/pR_fqhpFZJM"
                    >
                        Gameplay Demo
                    </a>
                </p>
                <p>
                    A desktop 2D RPG built as an OOP-focused project, featuring
                    tile-based maps, monsters with AI movement, and a
                    stats-driven combat system.
                </p>
                <ul>
                    <li>
                        Tech stack: <b>Java</b> + <b>libGDX</b>, built and run
                        via <b>Gradle</b> (includes Gradle wrapper).
                    </li>
                    <li>
                        Character control on grid/tile maps (terrain types like
                        land/grass/water) with portals for switching between
                        maps and an end-game area.
                    </li>
                    <li>
                        Combat system with player/monster stats (e.g. HP, MP,
                        Attack, Defense, Speed), basic attacks, and special
                        skills.
                    </li>
                    <li>
                        Structured as libGDX multi-module project:
                        <code> core</code> for shared game logic and
                        <code> lwjgl3</code> for the desktop runtime.
                    </li>
                </ul>
                <p>
                    How to run (from README):
                    <br />
                    <code>git clone https://github.com/lethanhan01/Paradise-Seeker.git</code>
                    <br />
                    <code>cd Paradise-Seeker</code>
                    <br />
                    <code>./gradlew build</code>
                    <br />
                    <code>./gradlew lwjgl3:run</code>
                    <br />
                    <i>(Requires Java 8+)</i>
                </p>
            </div>
            <div className="text-block">
                <h2>Hotel Management System</h2>
                <p>
                    <b>Apr. 2025 – Jul. 2025</b>
                </p>
                <p>
                    Links:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/lethanhan01/Hotel-Management-System.git"
                    >
                        GitHub
                    </a>
                    {' '}|{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://hotel-management-system-murex-eta.vercel.app/"
                    >
                        Live Demo
                    </a>
                    {' '}|{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/watch?v=zvn04xnZ2s4"
                    >
                        YouTube Demo
                    </a>
                </p>
                <p>
                    A hotel operations system designed to manage bookings,
                    customer information, services, promotions, and revenue with
                    a robust PostgreSQL database focusing on data consistency,
                    integrity, and query performance.
                </p>
                <ul>
                    <li>
                        Customer flows: account management, online room search &amp;
                        booking, applying promotion codes, booking cancellation
                        and history tracking.
                    </li>
                    <li>
                        Service requests during stay (food/spa/laundry) plus
                        post-stay feedback &amp; reviews.
                    </li>
                    <li>
                        Admin/management: revenue statistics (day/week/month/year),
                        room status updates (check-in/check-out/cancelled), room &amp;
                        service/amenity/promotion management.
                    </li>
                    <li>
                        Inventory control for hotel supplies and supplier info,
                        including low-stock monitoring; financial oversight for
                        unpaid/overdue invoices.
                    </li>
                    <li>
                        Database design: key entities like <code>Customer</code>,
                        <code>Room</code>, <code>Booking</code>, <code>Invoice</code>,
                        <code>Service</code>, <code>Promotion</code>, <code>Review</code>,
                        <code>Inventory</code>; normalized to <b>3NF</b> with ERD and
                        relational schema documented in the report.
                    </li>
                    <li>
                        Performance tuning with <code>EXPLAIN ANALYZE</code>,
                        strategic indexing (e.g., invoice/booking lookups), and
                        CTE-based reporting queries for readability and speed.
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>E-Commerce Store</h2>
                <p>
                    <b>Aug. 2025</b>
                </p>
                <p>
                    Links:{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/lethanhan01/E-Commerce-Store.git"
                    >
                        GitHub
                    </a>
                    {' '}|{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://e-commerce-store-2xzmgzp6l-lethanhan01s-projects.vercel.app/"
                    >
                        Live Demo
                    </a>
                </p>
                <p>
                    A modern e-commerce React SPA with product browsing, search,
                    cart, and authentication UI—responsive and ready to extend
                    with a real backend.
                </p>
                <ul>
                    <li>
                        Core pages: Home (featured products), Contact, and a
                        dedicated Privacy Policy page.
                    </li>
                    <li>
                        Product search with filtering (name/category/price) and
                        sorting.
                    </li>
                    <li>
                        Cart: add/remove/update quantities with persistent
                        state.
                    </li>
                    <li>
                        Auth forms: Signup/Login with validation and clear error
                        messaging.
                    </li>
                    <li>
                        UI/UX: modern gradients, animations, typography, hover
                        states; responsive for desktop/tablet/mobile.
                    </li>
                    <li>
                        Tech stack: React, React Router, Material UI, Context
                        API + Hooks, and component-scoped CSS.
                    </li>
                    <li>
                        Testing: 20+ test cases with React Testing Library and
                        Jest.
                    </li>
                </ul>
                <p>
                    Note: This is a client-only SPA—auth, cart, and search are
                    handled on the client side (per README).
                </p>
            </div>
        </div>
    );
};

export default SoftwareProjects;
