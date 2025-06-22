"use client";

import { useState, useEffect, useRef } from "react";
import "./Certificate.css";

const Certificate = () => {
  const [isFlipped, setIsFlipped] = useState(false);
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

  // const downloadSample = () => {
  //   // Simulate PDF download
  //   const link = document.createElement("a");
  //   link.href = "#";
  //   link.download = "sample-certificate.pdf";
  //   link.click();
  // };

  return (
    <section id="certificate" className="section certificate" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-cert">
            Industry Recognized Certificate
          </h2>
          <p className="section-subtitle-cert">
            Get a professional certificate that adds value to your resume and
            LinkedIn profile
          </p>
        </div>

        <div className={`certificate-showcase ${isVisible ? "animate" : ""}`}>
          <div className="certificate-container">
            <div
              className={`certificate-card ${isFlipped ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <div className="certificate-front">
                <div className="certificate-header">
                  <div className="logo">TechIntern</div>
                  <div className="certificate-type">
                    Certificate of Completion
                  </div>
                </div>

                <div className="certificate-body">
                  <div className="awarded-text">This is to certify that</div>
                  <div className="student-name">
                    {/* [Your Name] */}
                    Mandli Ananth Reddy
                  </div>
                  <div className="completion-text">
                    has successfully completed the
                  </div>
                  <div className="course-name">
                    Python Full Stack Development Internship
                  </div>
                  <div className="duration">3 Months Intensive Program</div>
                </div>

                <div className="certificate-footer">
                  <div className="signature-section">
                    <div className="signature">
                      <div className="signature-line"></div>
                      <span className="signature-name">Rajesh Kumar</span><br></br>
                      <span className="signature-title">Founder & CEO</span>
                    </div>
                    <div className="date">
                      <div className="date-line"></div>
                      <span className="date-text">Date of Completion</span>
                    </div>
                  </div>
                  <div className="certificate-id">
                    Certificate ID: TC2024001
                  </div>
                </div>
              </div>

              <div className="certificate-back">
                <div className="back-header">
                  <h3>Skills Acquired</h3>
                </div>
                <div className="skills-grid">
                  <div className="skill-item">
                    <span className="skill-icon">🌐</span>
                    <span>HTML5 & CSS3</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">⚡</span>
                    <span>JavaScript ES6+</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">⚛️</span>
                    <span>React.js</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🐍</span>
                    <span>Python & Django</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🗄️</span>
                    <span>Database Management</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🚀</span>
                    <span>Deployment</span>
                  </div>
                </div>

                <div className="projects-completed">
                  <h4>Projects Completed</h4>
                  <ul>
                    <li>Employee Management System</li>
                    <li>E-commerce Shopping Cart</li>
                    <li>Personal Blog & Portfolio</li>
                  </ul>
                </div>

                <div className="verification">
                  <p>Verify this certificate at:</p>
                  <p className="verify-link">techintern.com/verify</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate-info">
            <div className="c12">
              <div className="info-card">
                <div className="info-icon">🏆</div>
                <h3>Industry Recognition</h3>
                <p>
                  Our certificates are recognized by leading tech companies and
                  startups across India.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">📄</div>
                <h3>Digital & Physical</h3>
                <p>
                  Receive both digital certificate for LinkedIn and physical
                  certificate by mail.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🔍</div>
              <h3>Verifiable</h3>
              <p>
                Each certificate comes with a unique ID that can be verified
                online by employers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate-actions">
        {/* <button className="btn btn-primary" onClick={downloadSample}>
            Download Sample Certificate
          </button> */}
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("apply").scrollIntoView()}
        >
          Apply Now to Get Certified
        </button>
      </div>
    </section>
  );
};

export default Certificate;
