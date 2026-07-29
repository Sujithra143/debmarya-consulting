
import React, { useState } from "react";
import "../styles/ContactPage.css";
import Navbar from '../components/Navbar';
import Contactus from "../assets/images/Contactus.webp";
import ContactImage from "../assets/images/ContactHero.webp";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out!");
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="contact-page">
            <Navbar />
            {/* Hero Banner */}
            <div
                className="contact-hero"
                style={{ backgroundImage: `url(${ContactImage})` }}
            >
                <div className="contact-hero-content">
                    <h1>GET IN TOUCH</h1>
                    <p>Contact Us</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="contact-container">
                <div className="contact-wrapper">

                    {/* Left Side */}
                    <div className="contact-left">
                        <div>
                            <h2>DRIVING AUTOMOTIVE EXCELLENCE, TOGETHER</h2>

                            <p>
                                Whether you're optimizing manufacturing operations, establishing a Global Capability Centre (GCC), or enhancing quality and operational performance, our experts are ready to help. Connect with Debmarya Automotive Consulting to achieve sustainable growth and operational excellence.
                            </p>

                            <div className="contact-details">

                                <div className="contact-item">
                                    <div className="icon-circle">
                                        <FaPhoneAlt />
                                    </div>
                                    <span>+91 9003049495</span>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-circle">
                                        <FaEnvelope />
                                    </div>
                                    <span>debashis.neogi@debmaryaconsulting.com</span>
                                </div>

                                <div className="contact-item">
                                    <div className="icon-circle">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <span>Kancheepuram, Tamil Nadu</span>
                                </div>

                            </div>
                        </div>

                        <div className="team-image">
                            <img
                                src={Contactus}
                                alt="Team Discussion"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="contact-right">

                        <form onSubmit={handleSubmit} className="contact-form">

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit">
                                SEND MESSAGE
                            </button>

                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
}