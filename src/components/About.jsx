import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/images/automotive.webp";
import { Link } from "react-router-dom";

export default function About() {
    return (

        <section class="who-we-are-compact">
            <div class="container">
                <div class="two-col-layout">

                    <div class="text-content">
                        <span class="sub-tag">WHO WE ARE</span>
                        <h2 class="title">Trusted Advisors in GCC & Automotive Transformation</h2>

                        <p class="summary-text">
                            Debmarya Consulting is a specialist advisory firm focusing on strategy, leadership development, and technology transformation across Global Capability Centers (GCCs) and mobility sectors.
                        </p>

                        <div class="tag-group">
                            <span class="tag">✓ GCC Strategy</span>
                            <span class="tag">✓ Automotive Consulting</span>
                            <span class="tag">✓ Manufacturing Excellence</span>
                            <span class="tag">✓ Leadership Advisory</span>
                        </div>

                        <Link to="/about" class="btn-outline">LEARN MORE ABOUT US &rarr;</Link>
                    </div>

                    <div class="image-content">
                        <img src={AboutImage} alt="Debmarya Consulting Leadership Team" />
                    </div>

                </div>
            </div>
        </section>
    );
}