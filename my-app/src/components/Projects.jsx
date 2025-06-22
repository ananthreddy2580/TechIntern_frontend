"use client";

import { useState, useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
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

  const projects = [
    {
      title: "Student Management System",
      description:
        "A comprehensive web application for managing employee data, attendance, and payroll with role-based access control.",
      image: "/student.avif?height=300&width=400",
      techStack: ["Javascript", "React.Js", "Python", "Django", "Django ORM"],
      features: [
        "User Authentication",
        "Student CRUD Operations",
        "Attendance Tracking",
        "Add, edit, and delete student profiles with photo and ID",
        "Admin dashboard to manage courses, departments",
      ],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "To-Do App",
      description:
        "A user-friendly web app that allows users to manage daily tasks efficiently through a dynamic task-tracking system.",
      image: "/todo.avif?height=300&width=400",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React.Js",
        "Python",
        "Django",
        "Django ORM",
      ],
      features: [
        "Add, edit, and delete tasks with instant updates to the task list",
        "Mark tasks as complete/incomplete with visual indicators",
        "Filter tasks by status (All, Completed, Pending) for better organization",
        "User authentication to maintain separate task lists for each user",
        "Persistent storage using Django and MySQL so tasks remain saved across sessions",
      ],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Personal Blog & Portfolio",
      description:
        "A responsive blog and portfolio website with content management system and SEO optimization.",
      image: "/portfolio.avif?height=300&width=400",
      techStack: ["Html", "CSS", "Javascript", "React.Js"],
      features: [
        "Blog Management",
        "Portfolio Showcase",
        "Contact Form",
        "SEO Optimized",
        "Mobile Responsive",
      ],
      liveDemo: "#",
      github: "#",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1 + projects.length) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-projects">Real-World Projects</h2>
          <p className="section-subtitle">
            Build these amazing projects during your internship and add them to
            your portfolio
          </p>
        </div>

        <div className={`projects-showcase ${isVisible ? "animate" : ""}`}>
          <div className="project-carousel">
            <button className="carousel-btn prev-btn" onClick={prevProject}>
              ‹
            </button>

            <div className="project-container">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`project-card ${
                    index === activeProject ? "active" : ""
                  }`}
                >
                  <div className="project-image">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                    />
                    <div className="project-overlay">
                      <div className="project-actions">
                        {/* <a href={project.liveDemo} className="btn btn-primary">
                          Live Demo
                        </a> */}
                        {/* <a href={project.github} className="btn btn-secondary">
                          GitHub
                        </a> */}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="tech-stack">
                      <h4>Tech Stack:</h4>
                      <div className="tech-tags">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn next-btn" onClick={nextProject}>
              ›
            </button>
          </div>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === activeProject ? "active" : ""
                }`}
                onClick={() => setActiveProject(index)}
              />
            ))}
          </div>
        </div>

        <div className="project-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">💼</div>
            <h4>Portfolio Ready</h4>
            <div className="te">
              <p>All projects are designed to impress potential employers</p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔧</div>
            <h4>Industry Standard</h4>
            <br></br>
            <p>Built using current industry best practices and technologies</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📈</div>
            <h4>Scalable Code</h4>
            <p>Learn to write clean, maintainable, and scalable code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
