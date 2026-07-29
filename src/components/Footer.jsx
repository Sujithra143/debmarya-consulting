import React from "react";
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const whatsappNumber = "919876543210";
    const whatsappMessage = encodeURIComponent(
        "Hello! I'm interested in your consulting services."
    );

    return (
        <>

            <footer className="footer-root">
                <div className="footer-nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-horizontal-divider"></div>

                <div className="footer-copyright-bar">
                    <div className="copyright-text">
                        © 2026 Debmarya Consulting OPC Private Limited. All Rights Reserved.
                    </div>
                    <div className="powered-by-text">
                        Powered by Vinstreak Solutions
                    </div>
                </div>
            </footer>

            <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp-container"
            >
                <div className="whatsapp-icon-circle">
                    <FaWhatsapp className="whatsapp-fa-icon" />
                </div>

                <div className="whatsapp-message-bubble">
                    <span className="bubble-text">Contact Us</span>

                </div>
            </a>
        </>
    );
}