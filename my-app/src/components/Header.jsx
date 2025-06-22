"use client";

import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <h2>TechIntern</h2>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <a
              href="javascript:void(0)"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a
              href="javascript:void(0)"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              href="javascript:void(0)"
              onClick={() => scrollToSection("curriculum")}
            >
              Curriculum
            </a>
            <a
              href="javascript:void(0)"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
            <a
              href="javascript:void(0)"
              onClick={() => scrollToSection("referral")}
            >
              Referral
            </a>
            <a
              href="javascript:void(0)"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("apply")}
            >
              Apply Now
            </button>
          </div>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
