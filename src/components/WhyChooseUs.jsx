
import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUsImage from "../assets/images/why-choose-image.avif";
export default function WhyChooseUs() {
    return (
        <section style={{
            width: '100%',
            padding: '60px 20px',
            backgroundColor: '#ffffff',
            fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
            boxSizing: 'border-box'
        }}>
            {/* Centered Top Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{
                    fontSize: '2.2rem',
                    fontWeight: '600',
                    color: '#2563eb',
                    letterSpacing: '1.5px',
                    margin: '0 0 8px 0',
                    textTransform: 'uppercase'
                }}>
                    WHY CHOOSE US
                </h2>
                <p style={{
                    fontSize: '1.05rem',
                    color: '#475569',
                    margin: 0,
                    fontWeight: '500'
                }}>
                    Your Strategic Partner for Transformation
                </p>
            </div>

            {/* Split Content Box */}
            <div style={{
                maxWidth: '1150px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
            }}>
                {/* Left Side: Image Box */}
                <div style={{
                    flex: '1 1 480px',
                    minHeight: '420px',
                    backgroundColor: '#f1f5f9',
                    position: 'relative'
                }}>
                    <img
                        src={WhyChooseUsImage}
                        alt="Strategic Leadership Team"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>

                {/* Right Side: Dark Navy Blue Card */}
                <div style={{
                    flex: '1 1 480px',
                    backgroundColor: '#1a365d',
                    color: '#ffffff',
                    padding: '45px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxSizing: 'border-box'
                }}>
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        margin: '0 0 10px 0',
                        textTransform: 'uppercase',
                        color: '#ffffff'
                    }}>
                        THE ADVANTAGE
                    </h3>
                    <h4 style={{
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        lineHeight: '1.4',
                        color: '#f1f5f9',
                        margin: '0 0 18px 0'
                    }}>
                        Empowering Strategy. Transforming Leadership. Accelerating Growth.
                    </h4>

                    <p style={{
                        fontSize: '0.92rem',
                        lineHeight: '1.6',
                        color: '#cbd5e1',
                        margin: '0 0 25px 0'
                    }}>
                        We combine decades of automotive leadership experience with modern consulting practices to help organizations improve efficiency, strengthen operational excellence, and achieve sustainable business growth.
                    </p>

                    <div>
                        <h5 style={{
                            fontSize: '0.98rem',
                            fontWeight: '700',
                            color: '#ffffff',
                            margin: '0 0 12px 0'
                        }}>
                            Key Differentiators:
                        </h5>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                                <span style={{ color: '#60a5fa', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                                <div>
                                    <strong style={{ color: '#ffffff' }}>Three Decades of Industry Experience:</strong> Extensive leadership across manufacturing, engineering, and quality systems.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                                <span style={{ color: '#60a5fa', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                                <div>
                                    <strong style={{ color: '#ffffff' }}>Customized Strategies:</strong> Every engagement is tailored specifically to your business objectives.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                                <span style={{ color: '#60a5fa', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                                <div>
                                    <strong style={{ color: '#ffffff' }}>Operational Excellence:</strong> Helping organizations improve quality, productivity, and profitability.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                                <span style={{ color: '#60a5fa', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                                <div>
                                    <strong style={{ color: '#ffffff' }}>Long-Term Partnership:</strong> Committed to driving continuous value and long-term transformation.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <Link to="/contact" style={{
                        width: 'fit-content',
                        marginTop: '25px',
                        display: 'inline-block',
                        backgroundColor: '#ffffff',
                        color: '#1a365d',
                        padding: '12px 28px',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        letterSpacing: '1px',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease'
                    }}>
                        CONTACT US
                    </Link>
                </div>
            </div>
        </section>
    );
}