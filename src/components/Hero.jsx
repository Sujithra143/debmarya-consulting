import React from "react";
import "../styles/Hero.css";
import Navbar from "./Navbar";
import HeroBg from "../assets/images/Hero-img.webp";

export default function Hero() {
    return (
        <div id="home" className="home-container">
            <section
                className="hero-section"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            135deg,
                            rgba(15, 23, 42, 0.88) 0%,
                            rgba(15, 23, 42, 0.75) 50%,
                            rgba(30, 58, 138, 0.85) 100%
                        ),
                        url(${HeroBg})
                    `,
                }}
            >
                <Navbar />

                <div className="hero-content">
                    <h1>
                        Transforming <span className="highlight-text">GCC</span> &
                        <br />
                        Automotive Industry
                    </h1>


                </div>

                <div className="sub-banner-box">
                    <h2>Strategic Automotive & GCC Consulting</h2>

                    <p>
                        Dedicated to transforming operational paradigms and driving continuous
                        innovation across Automobile OEMs, Tier-1 Suppliers, and Global Capability Centres.
                    </p>

                    <div className="sub-banner-features">
                        <div className="feature-pill">⚡ Lean Transformation</div>
                        <div className="feature-pill">⚙️ SOP & Quality Frameworks</div>
                        <div className="feature-pill">🌐 Global GCC Setup</div>
                    </div>
                </div>
            </section>
        </div>
    );
}