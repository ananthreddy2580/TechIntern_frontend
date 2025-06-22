"use client";

import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>TechIntern</h3>
              <p>
                Empowering the next generation of developers through practical
                education and real-world projects.
              </p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-icon linkedin">
                <span>in</span>
              </a>
              <a href="#" className="social-icon twitter">
                <span>tw</span>
              </a>
              <a href="#" className="social-icon youtube">
                <span>yt</span>
              </a>
              <a href="#" className="social-icon instagram">
                <span>ig</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  onClick={() => scrollToSection("curriculum")}
                >
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => scrollToSection("projects")}>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => scrollToSection("testimonials")}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li>
                <a href="#apply" onClick={() => scrollToSection("apply")}>
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#webinar" onClick={() => scrollToSection("webinar")}>
                  Free Webinar
                </a>
              </li>
              <li>
                <a href="#referral" onClick={() => scrollToSection("referral")}>
                  Referral Program
                </a>
              </li>
              <li>
                <a
                  href="#certificate"
                  onClick={() => scrollToSection("certificate")}
                >
                  Certification
                </a>
              </li>
              <li>
                <a href="#faq" onClick={() => scrollToSection("faq")}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info1">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+911234567890">+91 9491321951</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:info@techintern.com">info@techintern.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <a
                  href="https://wa.me/9491321951"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 TechIntern. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Terms of Service
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <span>↑</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
