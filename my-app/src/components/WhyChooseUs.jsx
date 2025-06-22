"use client";

import { useState, useEffect, useRef } from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "💰",
      title: "Affordable Fee",
      subtitle: "Only ₹3000",
      description:
        "Get premium quality education at an unbeatable price. No hidden costs, complete transparency.",
      color: "#ffff",
    },
    {
      icon: "🚀",
      title: "Real Projects",
      subtitle: "3 Live Projects",
      description:
        "Work on actual industry projects that you can showcase in your portfolio and interviews.",
      color: "#007bff",
    },
    {
      icon: "🏆",
      title: "Certification",
      subtitle: "Industry Recognized",
      description:
        "Get a certificate that holds value in the industry and boosts your resume.",
      color: "#ffc107",
    },
    {
      icon: "💸",
      title: "Referral Bonus",
      subtitle: "₹500 per Referral",
      description:
        "Earn money by referring friends. Unlimited earning potential through our referral program.",
      color: "#17a2b8",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="section why-choose-us"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title2">Why Choose TechIntern?</h2>
          <p className="section-subtitle">
            We offer the perfect blend of quality education, practical
            experience, and affordability
          </p>
        </div>

        <div className={`features-grid ${isVisible ? "animate" : ""}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ "--delay": `${index * 0.2}s`, "--color": feature.color }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-subtitle">{feature.subtitle}</p>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

        <div className="additional-benefits">
          <h3>Additional Benefits</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Lifetime access to course materials</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>24/7 doubt resolution support</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Job placement assistance</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Industry mentor guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
