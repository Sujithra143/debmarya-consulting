import React from 'react';
import "../styles/Services.css";

import GCCBanner from "../assets/images/gccimage.avif";
import AutoBanner from "../assets/images/Autom-service.avif";

export default function Services() {
    const gccItems = [
        { title: "Green Field GCC", desc: "Setting up greenfield GCC right from establishing Vision, Mission and Mid-Term plan covering talent acquisition and skilling." },
        { title: "Capability Building & Ownership", desc: "Make or buy strategy, corporate stakeholder alignment, and developing end-to-end product/service development capability and ownership." },
        { title: "Ecosystem & Innovation Tracks", desc: "Open innovation tracks with supplier partners, academia, startups, and research institutes." },
        { title: "Digital Transformation", desc: "Evolving digital roadmaps to improve speed and performance efficiency of the GCC." },
        { title: "AI Framework Implementation", desc: "Setting AI Innovation Frameworks to kickstart pilot projects and take them through execution." },
        { title: "Best People Practices", desc: "Establishing best-in-class resource and skill management frameworks." }
    ];

    const autoItems = [
        "GCC Establishment for Auto OEM",
        "Automotive Competency Centers (Body, Powertrain, Software, Electronics)",
        "Resource & Skill Management",
        "Quality Management Practices",
        "Component Sourcing Strategy",
        "Digital Acceleration & AI to reduce vehicle development time & improve features",
        "Product Planning & Strategy",
        "Project Management Excellence",
        "Innovation Framework"
    ];

    return (
        <section id="services" className="services-section">
            <div className="services-header">
                <h2>WHAT WE OFFER</h2>
                <p>Accelerating Operational & Strategic Success</p>
            </div>

            <div className="services-container">
                <div className="service-block">
                    <div
                        className="block-title"
                        style={{ backgroundImage: `url(${GCCBanner})` }}
                    >
                        <div className="banner-overlay"></div>
                        <h3>GCC (Global Capability Centre) Practice</h3>
                    </div>
                    <div className="block-content">
                        {gccItems.map((item, idx) => (
                            <div key={idx} className="service-item">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="service-block">
                    <div
                        className="block-title"
                        style={{ backgroundImage: `url(${AutoBanner})` }}
                    >
                        <div className="banner-overlay"></div>
                        <h3>Automotive Practice</h3>
                    </div>
                    <div className="block-content">
                        <ul className="auto-list">
                            {autoItems.map((item, idx) => (
                                <li key={idx}>✓ {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}