"use client";

import { useState, useEffect, useRef } from "react";
import "./About.css";

const About = () => {
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

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
          <div className="about-text">
            <h2 className="section-title1">About TechIntern</h2>
            <p className="about-description">
              We are a leading technology education company focused on bridging
              the gap between academic learning and industry requirements. Our
              mission is to empower students and freshers with practical skills
              through hands-on projects and real-world experience.
            </p>

            <div className="company-stats">
              <div className="stat-card">
                <div className="stat-icon">🎓</div>
                <h3>100+</h3>
                <p>Students Trained</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💼</div>
                <h3>95%</h3>
                <p>Students Practical Performance Rate</p>
                <p></p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <h3>50+</h3>
                {/* <p>Industry Partners</p> */}
                <p>Real world Projects</p>
              </div>
            </div>

            <div className="mission-vision">
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To provide affordable, high-quality technical education that
                  prepares students for successful careers in technology.
                </p>
              </div>
              <div className="vision">
                <h3>Our Vision</h3>
                <p>
                  To become the leading platform for practical tech education
                  and career development in India.
                </p>
              </div>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-image">
              <br></br>
              {/* <img src="/placeholder.svg?height=200&width=200" alt="Founder" /> */}
              <div className="founder-badge">Founder & CEO</div>
            </div>
            <div className="founder-info">
              <h3>Ananth Reddy</h3>
              <p className="founder-title">Full Stack Developer & Educator</p>
              <p className="founder-message">
                "With 3+ years in the industry and passion for teaching, I
                founded TechIntern to help students gain practical skills and
                land their dream jobs."
              </p>
              <div className="founder-social">
                <a
                  href="https://www.linkedin.com/in/mandliananth/"
                  className="social-link linkedin"
                  target="_blank"
                >
                  <span>in</span>
                </a>
                {/* <a href="#" className="social-link twitter">
                  <span>Twitter</span>
                </a> */}
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="founder-card">
              <div className="founder-image">
                <br></br>
                {/* <img src="/placeholder.svg?height=200&width=200" alt="Founder" /> */}
                <div className="founder-badge">Founder & CEO</div>
              </div>
              <div className="founder-info">
                <h3>Vikas Rathod</h3>
                <p className="founder-title">Full Stack Developer</p>
                <div className="text12">
                  <p className="founder-message m1">
                    "With 3+ years in the industry and passion for teaching, I
                    founded Tech Intern to help students gain practical skills
                    and land their dream jobs."
                  </p>
                </div>

                <div className="founder-social">
                  <a
                    href="https://www.linkedin.com/in/mandliananth/"
                    className="social-link linkedin"
                  >
                    <span>in</span>
                  </a>
                  {/* <a href="#" className="social-link twitter">
                    <span>Twitter</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
