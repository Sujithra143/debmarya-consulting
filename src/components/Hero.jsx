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
                            rgba(15, 23, 42, 0.75),
                            rgba(15, 23, 42, 0.85)
                        ),
                        url(${HeroBg})
                    `,
                }}
            >
                <Navbar />

                <div className="hero-content">
                    <h1>
                        TRANSFORMING GCC &
                        AUTOMOTIVE INDUSTRY WITH EXPERT CONSULTING
                    </h1>

                    <p>
                        Debmarya Consulting OPC Private Limited – Driving
                        Excellence and Innovation
                    </p>
                </div>

                <div className="sub-banner-box">
                    <h2>STRATEGIC AUTOMOTIVE & GCC CONSULTING</h2>

                    <p>
                        Debmarya Consulting OPC Pvt Ltd is a specialized
                        consulting firm dedicated to transforming operational
                        excellence and innovation in the Automotive Sector and
                        GCC (Global Capability Centres).
                    </p>
                </div>
            </section>
        </div>
    );
}