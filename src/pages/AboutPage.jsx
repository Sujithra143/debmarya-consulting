import React, { useState } from "react";
import "../styles/AboutPage.css";
import FounderImg from "../assets/images/founder.webp";
import Navbar from "../components/Navbar";
import AboutHeroImage from "../assets/images/AboutPageHero.webp";

export default function AboutPage() {
    const [activeMvvTab, setActiveMvvTab] = useState("mission");

    const mvvData = {
        mission: {
            title: "Our Strategic Mission",
            icon: "🎯",
            text: "To deliver transformative consulting solutions that drive operational excellence, continuous innovation, and sustainable growth across the global automotive and enterprise landscape.",
            tag: "Operational Excellence"
        },
        vision: {
            title: "Our Forward Vision",
            icon: "👁️",
            text: "To be the premiere global automotive consulting partner, universally recognized for deep domain expertise, actionable strategies, and setting gold standards in operational transformation.",
            tag: "Global Standard"
        },
        values: {
            title: "Our Guiding Values",
            icon: "🤝",
            text: "Excellence, Uncompromising Integrity, Forward-Thinking Innovation, and Client-Centricity form the bedrock of everything we build and foster in our client partnerships.",
            tag: "Core Foundation"
        }
    };

    return (
        <div className="about-page">
            <Navbar />

            {/* Hero Section */}
            <section
                className="about-hero"
                style={{ backgroundImage: `url(${AboutHeroImage})` }}
            >
                <div className="about-hero-overlay">
                    <div className="about-hero-content">
                        <span className="hero-badge">Global Expertise • Proven Leadership</span>
                        <h1>A Specialized Firm With A Global Vision</h1>
                        <p>
                            Delivering strategic consulting solutions for the Automotive Industry and Global Capability Centres.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Counter Bar */}
            <div className="stats-banner">
                <div className="about-container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>30+</h3>
                            <p>Years Industry Leadership</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Tailored Solutions</p>
                        </div>
                        <div className="stat-item">
                            <h3>End-to-End</h3>
                            <p>Plant & Operations Advisory</p>
                        </div>
                        <div className="stat-item">
                            <h3>Global</h3>
                            <p>GCC Capability Frameworks</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder & Leadership Section */}
            <section className="about-main-section">
                <div className="about-container">
                    <div className="about-grid">
                        <div className="founder-image-wrapper">
                            <div className="founder-img-container">
                                <img src={FounderImg} alt="Debashis Neogi" className="founder-img" />
                                <div className="founder-badge">30+ Yrs Exp</div>
                            </div>
                            <div className="founder-caption">
                                <h3>Debashis Neogi</h3>
                                <p>Founder & Managing Director</p>
                            </div>
                        </div>

                        <div className="about-text-content">
                            <span className="sub-title-badge">WHO WE ARE</span>
                            <h2 className="section-title">Driving Operational Transformation Across Industry Standards</h2>
                            <p className="intro-paragraph">
                                <strong>Debmarya Consulting OPC Private Limited</strong> is a specialized consulting firm
                                dedicated to transforming operational excellence and driving innovation across the
                                Automobile Sector and GCC (Global Capability Centres).
                            </p>

                            <p>
                                With over <strong>30 years of distinguished leadership</strong> in the automobile industry,
                                <strong> Debashis Neogi</strong> brings deep domain expertise in engineering, plant operations,
                                quality management, and manufacturing excellence.
                            </p>

                            <p>
                                His extensive background spans end-to-end operational strategies, automotive plant setup,
                                vendor development programs, Lean & Kaizen implementations, SOP framework design, and productivity enhancement initiatives.
                            </p>

                            <div className="expertise-box">
                                <h4 className="expertise-title">KEY EXPERTISE & DOMAINS</h4>
                                <div className="expertise-grid">
                                    <div className="exp-item"><span>✓</span> Automotive Plant Operations</div>
                                    <div className="exp-item"><span>✓</span> Quality Systems & SOP Frameworks</div>
                                    <div className="exp-item"><span>✓</span> New Product & Process Development</div>
                                    <div className="exp-item"><span>✓</span> Vendor Development & Supply Chain</div>
                                    <div className="exp-item"><span>✓</span> Lean Manufacturing & Kaizen</div>
                                    <div className="exp-item"><span>✓</span> Assembly Line Optimization</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Mission / Vision / Values Section */}
            <section className="company-section">
                <div className="about-container">
                    <div className="company-header text-center">
                        <span className="sub-title-badge center">OUR FOUNDATION</span>
                        <h2 className="section-title center">ABOUT THE COMPANY</h2>
                        <p className="company-lead">
                            We empower automotive OEMs, tier-1 suppliers, and Global Capability Centres to scale operations,
                            adopt digital frameworks, and establish world-class manufacturing standards.
                        </p>
                    </div>

                    <div className="mvv-interactive-container">
                        <div className="mvv-tabs">
                            <button
                                className={`mvv-tab-btn ${activeMvvTab === "mission" ? "active" : ""}`}
                                onClick={() => setActiveMvvTab("mission")}
                            >
                                🎯 Mission
                            </button>
                            <button
                                className={`mvv-tab-btn ${activeMvvTab === "vision" ? "active" : ""}`}
                                onClick={() => setActiveMvvTab("vision")}
                            >
                                👁️ Vision
                            </button>
                            <button
                                className={`mvv-tab-btn ${activeMvvTab === "values" ? "active" : ""}`}
                                onClick={() => setActiveMvvTab("values")}
                            >
                                🤝 Values
                            </button>
                        </div>

                        <div className="mvv-display-card">
                            <div className="mvv-card-icon">{mvvData[activeMvvTab].icon}</div>
                            <span className="mvv-tag">{mvvData[activeMvvTab].tag}</span>
                            <h3>{mvvData[activeMvvTab].title}</h3>
                            <p>{mvvData[activeMvvTab].text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image-Based Industries Section */}
            <section className="industry-section">
                <div className="about-container">
                    <div className="text-center">
                        <span className="sub-title-badge center">TARGET SECTORS</span>
                        <h2 className="section-title center">INDUSTRIES WE SERVE</h2>
                    </div>

                    <div className="industry-grid">
                        <div className="industry-card-visual">
                            <div
                                className="industry-bg"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80')`
                                }}
                            ></div>
                            <div className="industry-content">
                                <h3>Automobile OEMs</h3>
                                <p>Supporting manufacturing excellence, quality systems, and production optimization.</p>
                            </div>
                        </div>

                        <div className="industry-card-visual">
                            <div
                                className="industry-bg"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')`
                                }}
                            ></div>
                            <div className="industry-content">
                                <h3>Tier-1 Suppliers</h3>
                                <p>Helping suppliers improve quality, delivery performance, and operational efficiency.</p>
                            </div>
                        </div>

                        <div className="industry-card-visual">
                            <div
                                className="industry-bg"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')`
                                }}
                            ></div>
                            <div className="industry-content">
                                <h3>Global Capability Centres</h3>
                                <p>Building scalable operational frameworks, leadership capabilities, and transformation.</p>
                            </div>
                        </div>

                        <div className="industry-card-visual">
                            <div
                                className="industry-bg"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80')`
                                }}
                            ></div>
                            <div className="industry-content">
                                <h3>Manufacturing Enterprises</h3>
                                <p>Driving Lean implementation, continuous improvement, and productivity growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanded Visual Core Principles Section */}
            <section className="principles-section">
                <div className="about-container">
                    <div className="text-center">
                        <span className="sub-title-badge center">CORE PILLARS</span>
                        <h2 className="section-title center">OUR GUIDING PRINCIPLES</h2>
                        <p className="company-lead">
                            Our principles define how we collaborate with enterprise partners, drive sustainable industry impact, and maintain benchmark standards in every engagement.
                        </p>
                    </div>

                    <div className="principle-visual-grid">

                        {/* Principle Card 1 */}
                        <div className="principle-v-card">
                            <div
                                className="principle-v-bg"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')` }}
                            ></div>
                            <div className="principle-v-overlay">
                                <div className="principle-v-header">
                                    <span className="principle-number">01</span>
                                    <div className="principle-v-icon">🤝</div>
                                </div>
                                <h3>Client Partnership</h3>
                                <span className="principle-subtitle">Building Success Together</span>
                                <p>
                                    We seamlessly integrate as an extension of your leadership team. By conducting deep structural diagnostics, aligning with long-term commercial goals, and maintaining transparent communication, we build custom solutions that yield measurable operational longevity.
                                </p>
                                <div className="principle-tag-list">
                                    <span>Collaborative Design</span>
                                    <span>Custom Advisory</span>
                                    <span>Long-term Value</span>
                                </div>
                            </div>
                        </div>

                        {/* Principle Card 2 */}
                        <div className="principle-v-card">
                            <div
                                className="principle-v-bg"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80')` }}
                            ></div>
                            <div className="principle-v-overlay">
                                <div className="principle-v-header">
                                    <span className="principle-number">02</span>
                                    <div className="principle-v-icon">🏆</div>
                                </div>
                                <h3>Operational Excellence</h3>
                                <span className="principle-subtitle">Performance Without Compromise</span>
                                <p>
                                    Eliminating waste and elevating yield are central to our execution model. Leveraging Lean frameworks, Kaizen practices, Six Sigma methodologies, and SOP standardizations, we turn bottleneck-prone facilities into streamlined models of manufacturing performance.
                                </p>
                                <div className="principle-tag-list">
                                    <span>Lean & Kaizen</span>
                                    <span>Zero-Defect Focus</span>
                                    <span>SOP Governance</span>
                                </div>
                            </div>
                        </div>

                        {/* Principle Card 3 */}
                        <div className="principle-v-card">
                            <div
                                className="principle-v-bg"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')` }}
                            ></div>
                            <div className="principle-v-overlay">
                                <div className="principle-v-header">
                                    <span className="principle-number">03</span>
                                    <div className="principle-v-icon">💡</div>
                                </div>
                                <h3>Future-Ready Innovation</h3>
                                <span className="principle-subtitle">Creating Tech-Driven Frameworks</span>
                                <p>
                                    We connect traditional plant precision with modern technological architecture. By embedding Smart Factory solutions, Industry 4.0 digitization, and data analytics into daily operations, we equip organizations to outpace market changes and scale effortlessly.
                                </p>
                                <div className="principle-tag-list">
                                    <span>Smart Automation</span>
                                    <span>Industry 4.0</span>
                                    <span>Scalable Systems</span>
                                </div>
                            </div>
                        </div>

                        {/* Principle Card 4 */}
                        <div className="principle-v-card">
                            <div
                                className="principle-v-bg"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80')` }}
                            ></div>
                            <div className="principle-v-overlay">
                                <div className="principle-v-header">
                                    <span className="principle-number">04</span>
                                    <div className="principle-v-icon">🛡️</div>
                                </div>
                                <h3>Uncompromising Integrity</h3>
                                <span className="principle-subtitle">Trust Through Transparency</span>
                                <p>
                                    Ethical governance forms our foundation. We maintain complete objectivity during operational assessments, deliver direct risk insights, and uphold strict compliance and confidentiality, earning trust as reliable business transformation advisors.
                                </p>
                                <div className="principle-tag-list">
                                    <span>Transparent Governance</span>
                                    <span>Ethical Practice</span>
                                    <span>Objective Risk Audit</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}