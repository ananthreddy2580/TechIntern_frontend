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
              <div className="founder-badge">Founder</div>
            </div>
            <div className="founder-info">
              <h3>Ananth Reddy</h3>
              <p className="founder-title">Full Stack Developer & Lead</p>
              <p className="founder-message">
                With over 2 years of industry experience and a strong passion
                for teaching, I founded TechIntern to empower students with
                real-world skills and help them launch successful careers.
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
                <div className="founder-badge">CEO</div>
              </div>
              <div className="founder-info">
                <h3>Vikas Rathod</h3>
                <p className="founder-title">
                  Full Stack Developer & Tech Lead
                </p>
                <div className="text12">
                  <p className="founder-message m1">
                    CEO of TechIntern, with a passion for innovation and
                    hands-on learning. Leading the mission to empower students
                    with real-world skills for career success.
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
          <div className="members">
            <div className="founder-card">
              <div className="founder-image">
                <br></br>
                {/* <img src="/placeholder.svg?height=200&width=200" alt="Founder" /> */}
                <div className="founder-badge">CTO</div>
              </div>
              <div className="founder-info">
                <h3>Hemanth Reddy</h3>
                <p className="founder-title">Python Developer</p>
                <p className="founder-message">
                  CTO of TechIntern with 1 year of experience in full stack
                  development. Passionate about using technology to solve
                  real-world problems in education. Committed to building
                  scalable platforms that support student learning and success.
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
            </div>
            <div className="founder-card">
              <div className="founder-image">
                <br></br>
                {/* <img src="/placeholder.svg?height=200&width=200" alt="Founder" /> */}
                <div className="founder-badge"> MD </div>
              </div>
              <div className="founder-info">
                <h3>Naresh Reddy</h3>
                <p className="founder-title">Python Developer</p>
                <div className="text12">
                  <p className="founder-message m1">
                    Managing Director at TechIntern, overseeing strategic growth
                    and operations. With strong leadership and decision-making
                    skills, focused on driving impactful outcomes. Dedicated to
                    shaping a future-ready platform that empowers students
                    across the tech industry.
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
          <div className="founder-card lastmember">
            <div className="founder-image">
              <br></br>
              {/* <img src="/placeholder.svg?height=200&width=200" alt="Founder" /> */}
              <div className="founder-badge">Manager </div>
            </div>
            <div className="founder-info">
              <h3>Swamy</h3>
              <p className="founder-title">Frontend Developer</p>
              <div className="text12">
                <p className="founder-message m1">
                  Manager at TechIntern, responsible for coordinating projects
                  and team operations. Skilled in communication, task
                  management, and cross-functional collaboration. Focused on
                  ensuring timely delivery and maintaining a productive work
                  environment.
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
    </section>
  );
};

export default About;
