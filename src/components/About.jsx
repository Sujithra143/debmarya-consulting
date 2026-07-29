import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/images/automotive.webp";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="who-we-are-compact">
            <div className="container">
                <div className="two-col-layout">

                    <div className="text-content content-column">
                        <span className="sub-tag">WHO WE ARE</span>

                        <h2 className="title">
                            Trusted Advisors in GCC & Automotive Transformation
                        </h2>

                        <p className="summary-text">
                            Debmarya Consulting is a specialist advisory firm focusing on strategy, leadership development, and technology transformation across Global Capability Centers (GCCs) and mobility sectors.
                        </p>

                        <div className="tag-group">
                            <div className="tag">
                                <span>✓</span>
                                GCC Strategy
                            </div>

                            <div className="tag">
                                <span>✓</span>
                                Automotive Consulting
                            </div>

                            <div className="tag">
                                <span>✓</span>
                                Manufacturing Excellence
                            </div>

                            <div className="tag">
                                <span>✓</span>
                                Leadership Advisory
                            </div>
                        </div>
                        <Link to="/about" className="btn-primary-about">
                            Learn More About Us
                        </Link>
                    </div>

                    <div className="image-content image-column">
                        <img
                            src={AboutImage}
                            alt="Debmarya Consulting Leadership Team"
                            className="compact-img"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}