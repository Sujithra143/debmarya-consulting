import React from "react";
import "../styles/Approach.css";
import ApproachBg from "../assets/images/ApproachHero.webp";

export default function Approach() {
    const steps = [
        { num: "01", title: "Diagnostic Assessment", desc: "Comprehensive initial review of operations and processes" },
        { num: "02", title: "Gap Analysis", desc: "Identifying structural, technical, and operational performance gaps" },
        { num: "03", title: "Strategy Creation", desc: "Formulating customized, actionable strategic roadmaps" },
        { num: "04", title: "Implementation", desc: "Hands-on deployment alongside client leadership teams" },
        { num: "05", title: "Optimization", desc: "Continuous monitoring, refining, and scaling for measurable impact" }
    ];

    return (
        <section id="approach"
            className="approach-section"
            style={{ backgroundImage: `url(${ApproachBg})` }}>
            <div className="approach-header">
                <h2>OUR CONSULTING APPROACH</h2>
                <p>A Systematic Methodology for Measurable Results</p>
            </div>

            <div className="steps-grid">
                {steps.map((step) => (
                    <div key={step.num} className="step-card">
                        <span className="step-number">{step.num}</span>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}