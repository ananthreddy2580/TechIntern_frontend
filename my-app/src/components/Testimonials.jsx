"use client";

import { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer at TCS",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "TechIntern transformed my career! The hands-on projects and mentorship helped me land my dream job. The certificate is highly valued by employers.",
      company: "TCS",
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer at Infosys",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Best investment I made for my career. The curriculum is industry-relevant and the projects are exactly what companies look for in candidates.",
      company: "Infosys",
    },
    {
      name: "Anita Singh",
      role: "Python Developer at Wipro",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The referral program is amazing! I earned ₹2500 while helping my friends get skilled. The instructors are very supportive and knowledgeable.",
      company: "Wipro",
    },
    {
      name: "Vikash Gupta",
      role: "Software Engineer at Accenture",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "From zero coding knowledge to getting placed in Accenture - TechIntern made it possible. The 6-week program is intensive but worth every penny.",
      company: "Accenture",
    },
    {
      name: "Sneha Patel",
      role: "Web Developer at Startup",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The projects we built are now part of my portfolio. Employers were impressed with the quality of work. Highly recommend to all freshers!",
      company: "Tech Startup",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="testimonials"
      className="section testimonials"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-say">What Our Students Say</h2>
          <p className="section-subtitle-say">
            Real success stories from students who transformed their careers
            with TechIntern
          </p>
        </div>

        <div className={`testimonials-carousel ${isVisible ? "animate" : ""}`}>
          <div className="carousel-container">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              ‹
            </button>

            <div className="testimonials-wrapper">
              <div
                className="testimonials-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-slide">
                    <div className="testimonial-card">
                      <div className="quote-icon">"</div>

                      <div className="testimonial-content">
                        <p className="testimonial-text">{testimonial.text}</p>

                        <div className="rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="star">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="testimonial-author">
                        {/* <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="author-image"
                        /> */}
                        <div className="author-info">
                          <h4 className="author-name">{testimonial.name}</h4>
                          <p className="author-role">{testimonial.role}</p>
                          <p className="author-company">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-btn next-btn" onClick={nextSlide}>
              ›
            </button>
          </div>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label1">Happy Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label1">
              Students Practical Performance Rate
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label1">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label1">Real world Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
