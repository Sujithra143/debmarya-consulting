import React from "react";
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const whatsappNumber = "919876543210";
    const whatsappMessage = encodeURIComponent(
        "Hello! I'm interested in your consulting services."
    );
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>

            <footer className="footer-root">
                <div className="footer-nav-links">
                    <Link to="/" onClick={scrollToTop}>Home</Link>
                    <Link to="/about" onClick={scrollToTop}>About</Link>
                    <Link to="/services" onClick={scrollToTop}>Services</Link>
                    <Link to="/contact" onClick={scrollToTop}>Contact</Link>
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