import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">DEBMARYA <span>CONSULTING</span></Link>
            </div>

            <div
                className="hamburger"
                onClick={() => setOpenMenu(!openMenu)}
            >
                ☰
            </div>

            <ul className={`navbar-links ${openMenu ? "active" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>
                </li>
                <li>
                    <Link to="/services" onClick={() => setOpenMenu(false)}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}