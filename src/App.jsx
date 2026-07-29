
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import "./styles/global.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Services.css";
import "./styles/About.css";
import "./styles/Footer.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;