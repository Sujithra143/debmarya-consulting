
import React from "react";
import { Link } from "react-router-dom";
import "../styles/WhyChooseUs.css";
import WhyChooseUsImage from "../assets/images/why-choose-image.avif";

export default function WhyChooseUs() {
    return (
        <section className="why-choose-section">
            {/* Header */}
            <div className="why-header">
                <h2>WHY CHOOSE US</h2>
                <p>Your Strategic Partner for Transformation</p>
            </div>

            {/* Content */}
            <div className="why-container">

                {/* Left Image */}
                <div className="why-image">
                    <img
                        src={WhyChooseUsImage}
                        alt="Strategic Leadership Team"
                    />
                </div>

                {/* Right Content */}
                <div className="why-content">

                    <h3>THE ADVANTAGE</h3>

                    <h4>
                        Empowering Strategy. Transforming Leadership.
                        Accelerating Growth.
                    </h4>

                    <p className="why-description">
                        We combine decades of automotive leadership experience
                        with modern consulting practices to help organizations
                        improve efficiency, strengthen operational excellence,
                        and achieve sustainable business growth.
                    </p>

                    <div>
                        <h5>Key Differentiators:</h5>

                        <ul className="why-list">

                            <li>
                                <span className="bullet">•</span>
                                <div>
                                    <strong>Three Decades of Industry Experience:</strong>
                                    Extensive leadership across manufacturing,
                                    engineering, and quality systems.
                                </div>
                            </li>

                            <li>
                                <span className="bullet">•</span>
                                <div>
                                    <strong>Customized Strategies:</strong>
                                    Every engagement is tailored specifically
                                    to your business objectives.
                                </div>
                            </li>

                            <li>
                                <span className="bullet">•</span>
                                <div>
                                    <strong>Operational Excellence:</strong>
                                    Helping organizations improve quality,
                                    productivity, and profitability.
                                </div>
                            </li>

                            <li>
                                <span className="bullet">•</span>
                                <div>
                                    <strong>Long-Term Partnership:</strong>
                                    Committed to driving continuous value and
                                    long-term transformation.
                                </div>
                            </li>

                        </ul>
                    </div>

                    <Link to="/contact" className="why-btn">
                        CONTACT US
                    </Link>

                </div>

            </div>
        </section>
    );
}