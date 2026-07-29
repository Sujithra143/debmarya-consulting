import React from "react";
import "../styles/ServicesPage.css";
import Navbar from '../components/Navbar';
import HeroImage from "../assets/images/ServiceBanner.webp";
import { Link } from "react-router-dom";

export default function ServicesPage() {
    const autoServices = [
        {
            title: "Automotive Plant Setup & Process Optimization",
            desc: "Comprehensive plant setup guidance, process mapping, bottleneck elimination, and floor layout optimizations.",
        },
        {
            title: "Manufacturing Excellence & Lean Implementation",
            desc: "Deploying Lean, Kaizen, 5S, and 8D frameworks to drive productivity and continuous operational improvement.",
        },
        {
            title: "Quality Assurance & Regulatory Compliance",
            desc: "End-to-end SOP creation, root cause analysis, corrective action plans, and quality audit compliance.",
        },
        {
            title: "Vendor Development & Supply Chain Advisory",
            desc: "Supplier evaluation, strategic sourcing frameworks, component quality systems, and supply chain resilience.",
        },
        {
            title: "Product Engineering & NPI",
            desc: "New Product Introduction, DFMEA/PFMEA implementation, process validation, and testing frameworks.",
        },
        {
            title: "Cost Optimization & Productivity Enhancement",
            desc: "Resource re-engineering, cycle time reduction, and cost structure optimization using performance metrics.",
        },
    ];

    const gccServices = [
        {
            title: "GCC Establishment & Roadmap",
            desc: "Building greenfield GCCs starting from setup, Vision & Mission definition, talent acquisition, and resource planning.",
        },
        {
            title: "Digital Transformation & AI Frameworks",
            desc: "Setting up AI frameworks and best practices to drive team retention, automation, and tech innovation.",
        },
        {
            title: "Automotive Competency Centers",
            desc: "Establishing specialized technical focus areas including Powertrain, Chassis, Software, and Embedded systems.",
        },
        {
            title: "Resource & Skill Management",
            desc: "Establishing skill matrix mapping, skilling-up plans, and resource strategies to scale GCC capabilities.",
        },
    ];

    const approachSteps = [
        { step: "01", title: "Diagnostic Assessment", desc: "Comprehensive evaluation of current processes and bottlenecks." },
        { step: "02", title: "Gap Analysis", desc: "Identifying performance gaps against industry standards." },
        { step: "03", title: "Strategy Creation", desc: "Formulating actionable, customized roadmap plans." },
        { step: "04", title: "Implementation", desc: "On-ground execution and cross-team alignment." },
        { step: "05", title: "Optimization", desc: "Continuous monitoring, metric tracking, and refining." },
    ];

    return (
        <div className="services-page">
            <Navbar />

            <section
                className="services-hero"
                style={{ backgroundImage: `url(${HeroImage})` }}
            >
                <div className="services-hero-overlay">
                    <p className="sub-tag">OUR CONSULTING OFFERINGS</p>
                    <h1>AUTOMOTIVE & GCC SERVICES</h1>
                    <p className="hero-desc">
                        Comprehensive, tailored consulting solutions driving operational transformation and sustainable growth.
                    </p>
                    <div className="hero-divider"></div>
                </div>
            </section>

            <section className="services-intro">
                <div className="services-container">

                    <div className="intro-grid">

                        <div className="intro-left">

                            <span className="intro-tag">
                                WHY DEBMARYA CONSULTING
                            </span>

                            <h2>
                                Strategic Consulting Built on Industry Experience
                            </h2>

                            <p>
                                Debmarya Consulting partners with automotive manufacturers,
                                suppliers, and Global Capability Centres to improve
                                operational excellence, manufacturing performance,
                                leadership capability, and sustainable business growth.
                            </p>

                            <p>
                                Every engagement is tailored to your business objectives,
                                delivering practical solutions backed by over three decades
                                of hands-on industry expertise.
                            </p>

                            <div className="intro-highlights">
                                <div>✓ 30+ Years of Industry Experience</div>
                                <div>✓ Automotive & Manufacturing Specialists</div>
                                <div>✓ Lean, Quality & Process Excellence</div>
                                <div>✓ Business Transformation Expertise</div>
                            </div>

                        </div>

                        <div className="intro-right">

                            <div className="stat-card">
                                <h3>30+</h3>
                                <span>Years Experience</span>
                            </div>

                            <div className="stat-card">
                                <h3>100%</h3>
                                <span>Tailored Consulting</span>
                            </div>

                            <div className="stat-card">
                                <h3>360°</h3>
                                <span>Operational Support</span>
                            </div>

                            <div className="stat-card">
                                <h3>OEM + GCC</h3>
                                <span>Industry Expertise</span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="services-section">
                <div className="services-container">
                    <h2 className="category-title">AUTOMOBILE CONSULTING SERVICES</h2>
                    <div className="cards-grid">
                        {autoServices.map((srv, idx) => (
                            <div className="service-card" key={idx}>
                                <div className="card-top-bar"></div>
                                <h3>{srv.title}</h3>
                                <p>{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-section gcc-bg">
                <div className="services-container">
                    <h2 className="category-title text-center">GCC (GLOBAL CAPABILITY CENTRE) PRACTICE</h2>
                    <div className="cards-grid">
                        {gccServices.map((srv, idx) => (
                            <div className="service-card gcc-card" key={idx}>
                                <h3>{srv.title}</h3>
                                <p>{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="services-cta">

                <h2>Ready to Transform Your Operations?</h2>

                <p>

                    Partner with Debmarya Consulting to improve manufacturing
                    performance, build high-performing teams, and drive sustainable
                    business growth.

                </p>

                <Link to="/contact" className="cta-btn">
                    Contact Us
                </Link>

            </section>
        </div>
    );
}