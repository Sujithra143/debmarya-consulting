import React from "react";
import "../styles/AboutPage.css";
import FounderImg from "../assets/images/founder.webp";
import Navbar from '../components/Navbar';
import AboutHeroImage from "../assets/images/AboutPageHero.webp";

export default function AboutPage() {
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
                        <h1>A SPECIALIZED FIRM WITH A GLOBAL VISION</h1>
                        <p>
                            Delivering strategic consulting solutions for the Automotive
                            Industry and Global Capability Centres.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-main-section">
                <div className="about-container">
                    <div className="about-grid">

                        <div className="founder-image-wrapper">
                            <img src={FounderImg} alt="Debashis Neogi" className="founder-img" />
                            <div className="founder-caption">
                                <h3>Debashis Neogi</h3>
                                <p>Founder & Managing Director</p>
                            </div>
                        </div>

                        <div className="about-text-content">
                            <h2 className="section-title">WHO WE ARE</h2>
                            <p className="intro-paragraph">
                                <strong>Debmarya Consulting OPC Private Limited</strong> is a specialized consulting firm
                                dedicated to transforming operational excellence and driving innovation across the
                                Automobile Sector and GCC (Global Capability Centres)
                            </p>

                            <p>
                                With over <strong>30 years of distinguished experience</strong> in the automobile industry,
                                <strong> Debashis Neogi</strong> brings deep domain expertise in engineering, plant operations,
                                quality management, and manufacturing excellence.
                            </p>
                            <p>
                                His extensive leadership background spans end-to-end operational strategies, automotive plant setup,
                                vendor development programs, Lean & Kaizen implementations, SOP framework design, and productivity enhancement initiatives.
                            </p>

                            <p>
                                At Debmarya Consulting OPC Private Limited, we believe that sustainable business success is built on strong operational foundations, strategic planning, and continuous innovation. Our consulting approach combines decades of practical industry experience with proven methodologies to help organizations improve productivity, enhance quality, and achieve measurable business outcomes.
                            </p>

                            <p>
                                We work closely with automotive manufacturers, component suppliers, and Global Capability Centres (GCCs) to identify operational challenges, develop practical solutions, and implement strategies that deliver long-term value. Every engagement is tailored to the client's business objectives, ensuring practical recommendations that create lasting impact.
                            </p>
                            <div className="expertise-box">
                                <h4 className="expertise-title">KEY EXPERTISE</h4>
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


            <section className="company-section">
                <div className="about-container">
                    <div className="company-header text-center">
                        <h2 className="section-title center">ABOUT THE COMPANY</h2>
                        <p className="company-lead">
                            We empower automotive OEMs, tier-1 suppliers, and Global Capability Centres to scale operations,
                            adopt digital frameworks, and establish world-class manufacturing standards.
                        </p>
                    </div>

                    <div className="mvv-grid">
                        <div className="mvv-card">
                            <div className="mvv-icon">🎯</div>
                            <h3>MISSION</h3>
                            <p>
                                To deliver transformative consulting solutions that drive operational excellence,
                                innovation, and sustainable growth in the automotive industry.
                            </p>
                        </div>

                        <div className="mvv-card">
                            <div className="mvv-icon">👁️</div>
                            <h3>VISION</h3>
                            <p>
                                To be the leading automotive consulting partner recognized for deep industry expertise,
                                actionable insights, and setting standards in operational transformation.
                            </p>
                        </div>

                        <div className="mvv-card">
                            <div className="mvv-icon">🤝</div>
                            <h3>VALUES</h3>
                            <p>
                                Excellence, Integrity, Innovation, and Client-Centricity form the bedrock of everything we do,
                                guiding our consulting philosophy and long-term client partnerships
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industry-section">

                <h2 className="section-title center">
                    INDUSTRIES WE SERVE
                </h2>

                <div className="industry-grid">

                    <div className="industry-card">
                        <h3>Automobile OEMs</h3>
                        <p>
                            Supporting manufacturing excellence,
                            quality systems, and production optimization.
                        </p>
                    </div>

                    <div className="industry-card">
                        <h3>Tier-1 Suppliers</h3>
                        <p>
                            Helping suppliers improve quality,
                            delivery performance, and operational efficiency.
                        </p>
                    </div>

                    <div className="industry-card">
                        <h3>Global Capability Centres</h3>
                        <p>
                            Building scalable operational frameworks,
                            leadership capabilities, and business transformation.
                        </p>
                    </div>

                    <div className="industry-card">
                        <h3>Manufacturing Organizations</h3>
                        <p>
                            Driving Lean implementation,
                            continuous improvement, and productivity growth.
                        </p>
                    </div>

                </div>

            </section>
            <section className="company-section">
                <div className="about-container">

                    <h2 className="section-title center">
                        OUR CONSULTING PHILOSOPHY
                    </h2>

                    <p className="company-lead">
                        We believe successful transformation is achieved through collaboration,
                        data-driven decision-making, and continuous improvement. Our consultants
                        work closely with clients to understand their challenges, develop
                        customized strategies, and support implementation every step of the way.
                    </p>

                    <div className="mvv-grid">

                        <div className="mvv-card">
                            <h3>Understand</h3>
                            <p>
                                Analyze existing operations, identify opportunities,
                                and understand business objectives.
                            </p>
                        </div>

                        <div className="mvv-card">
                            <h3>Transform</h3>
                            <p>
                                Develop practical strategies that improve quality,
                                productivity, efficiency, and organizational capability.
                            </p>
                        </div>

                        <div className="mvv-card">
                            <h3>Sustain</h3>
                            <p>
                                Establish systems and best practices that ensure
                                continuous improvement and long-term business success.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <section className="principles-section">
                <div className="about-container">

                    <h2 className="section-title center">
                        OUR CORE PRINCIPLES
                    </h2>

                    <p className="company-lead">
                        Our principles define how we collaborate with clients, deliver value,
                        and drive lasting business transformation across the automotive industry.
                    </p>

                    <div className="principle-grid">

                        <div className="principle-card">
                            <div className="principle-icon">🤝</div>
                            <h3>Client Partnership</h3>
                            <span>Building Success Together</span>
                            <p>
                                We work as an extension of our clients' teams, understanding their
                                unique challenges and delivering solutions aligned with their
                                long-term business objectives.
                            </p>
                        </div>

                        <div className="principle-card">
                            <div className="principle-icon">🏆</div>
                            <h3>Operational Excellence</h3>
                            <span>Performance Without Compromise</span>
                            <p>
                                We help organizations improve quality, productivity, efficiency,
                                and operational performance through proven industry best practices
                                and continuous improvement methodologies.
                            </p>
                        </div>

                        <div className="principle-card">
                            <div className="principle-icon">💡</div>
                            <h3>Innovation</h3>
                            <span>Creating Future-Ready Solutions</span>
                            <p>
                                By combining deep automotive expertise with digital technologies,
                                AI, and modern consulting frameworks, we enable sustainable
                                transformation and competitive advantage.
                            </p>
                        </div>

                        <div className="principle-card">
                            <div className="principle-icon">🛡️</div>
                            <h3>Integrity</h3>
                            <span>Trust Through Transparency</span>
                            <p>
                                Honesty, accountability, and professionalism guide every decision,
                                ensuring trusted partnerships and consistent delivery of value.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}