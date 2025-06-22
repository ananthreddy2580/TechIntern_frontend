"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Launch Your Tech Career with Real Projects";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {typedText}
              <span className="cursor">|</span>
            </h1>
            <p className="hero-subtitle fade-in">
              Join our Python Full Stack internship program and work on 3
              real-world projects. Get certified and earn ₹500 for every
              referral!
            </p>

            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat">
                <span className="stat-number">₹3000</span>
                <span className="stat-label">Only Fee</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Live Projects</span>
              </div>
            </div>

            <div className="hero-actions fade-in">
              <button
                className="btn btn-primary btn-large"
                onClick={() => scrollToSection("apply")}
              >
                Apply for Internship
              </button>
              {/* <button
                className="btn btn-secondary btn-large"
                onClick={() => scrollToSection("webinar")}
              >
                Join Free Webinar
              </button> */}
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-line">
                <span className="code-keyword">function</span>
                <span className="code-function"> buildCareer</span>
                <span className="code-bracket">(</span>
                <span className="code-bracket">)</span>
                <span className="code-bracket">{"{"}</span>
              </div>
              <div className="code-line">
                <span className="code-indent"> </span>
                <span className="code-keyword">const</span>
                <span className="code-variable"> skills</span>
                <span className="code-operator"> = </span>
                <span className="code-string">['React', 'Python', 'SQL']</span>
                <span className="code-semicolon">;</span>
              </div>
              <div className="code-line">
                <span className="code-indent"> </span>
                <span className="code-keyword">return</span>
                <span className="code-string">'Dream Job'</span>
                <span className="code-semicolon">;</span>
              </div>
              <div className="code-line">
                <span className="code-bracket">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
