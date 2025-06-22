"use client";

import { useState, useEffect, useRef } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const faqs = [
    {
      question: "What is the duration of the internship program?",
      answer:
        "The internship program is 6 weeks long, with intensive training covering all aspects of full-stack development. Each week focuses on specific technologies and includes hands-on projects.",
    },
    {
      question: "Do I need any prior programming experience?",
      answer:
        "No prior programming experience is required! Our curriculum is designed for complete beginners. We start from the basics and gradually build up to advanced concepts.",
    },
    {
      question: "What projects will I work on during the internship?",
      answer:
        "You'll work on 3 real-world projects: Employee Management System, E-commerce Shopping Cart, and Personal Blog & Portfolio. These projects will be part of your portfolio.",
    },
    {
      question: "Is the certificate recognized by companies?",
      answer:
        "Yes! Our certificates are recognized by leading tech companies and startups. Many of our alumni have successfully used our certificates to land jobs at top companies.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "For every friend you refer who enrolls and pays the fee, you earn ₹500. There's no limit to how many people you can refer. Payments are processed within 24 hours of successful enrollment.",
    },
    {
      question: "What support is provided during the internship?",
      answer:
        "We provide 24/7 doubt resolution, one-on-one mentorship, career guidance, and job placement assistance. Our instructors are always available to help you succeed.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a 7-day money-back guarantee. If you're not satisfied with the program within the first week, we'll provide a full refund, no questions asked.",
    },
    {
      question: "What happens after completing the internship?",
      answer:
        "After completion, you'll receive your certificate, have 3 projects in your portfolio, get job placement assistance, and lifetime access to our alumni network and resources.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-q">Frequently Asked Questions</h2>
          <p className="section-subtitle-q">
            Got questions? We've got answers! Find everything you need to know
            about our internship program.
          </p>
        </div>

        <div className={`faq-container ${isVisible ? "animate" : ""}`}>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <div
                    className={`faq-icon ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  >
                    <span>▼</span>
                  </div>
                </div>

                <div
                  className={`faq-answer ${
                    activeIndex === index ? "expanded" : ""
                  }`}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Still have questions?</h3>
              <p>
                Our team is here to help! Reach out to us and we'll get back to
                you within 24 hours.
              </p>
              <div className="contact-actions">
                <a
                  href="mailto:info@techintern.com"
                  className="btn btn-primary"
                >
                  Email Us
                </a>
                <a
                  href="https://wa.me/9491321951"
                  className="btn btn-primary"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
