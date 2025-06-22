"use client";

import { useState, useEffect, useRef } from "react";
import "./Contact.css";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) return;

    try {
      const CreateUserResponse = await axios.post(
        `${API_URL}/save_message/`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = {
        status: CreateUserResponse.data.status,
        message: CreateUserResponse.data.message,
      };

      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2000);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
      return responseData;
    } catch (error) {
      setIsLoading(false);
      console.error("Submission error:", error);
      return {
        status: "error",
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };
    }

    // setIsLoading(true);

    // // Simulate API call
    // setTimeout(() => {
    //   setIsLoading(false);
    //   setIsSubmitted(true);
    //   setFormData({ name: "", email: "", subject: "", message: "" });

    //   // Reset success message after 5 seconds
    //   setTimeout(() => setIsSubmitted(false), 5000);
    // }, 1500);
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-con">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? "animate" : ""}`}>
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>
                <a
                  href="https://wa.me/9491321951"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
                <br />
                <span className="availability">24/7 Support</span>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+911234567890">+91 12345 67890</a>
                <br />
                <span className="availability">Mon-Fri 9AM-6PM IST</span>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@techintern.com">info@techintern.com</a>
                <br />
                <a href="mailto:support@techintern.com">
                  support@techintern.com
                </a>
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Our Office</h3>
              <p>
                TechIntern Headquarters
                <br />
                123 Tech Street, Innovation Hub
                <br />
                Bangalore, Karnataka 560001
                <br />
                India
              </p>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
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
          </div>

          <div className="contact-form">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            {isSubmitted && (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <p>
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-row">
                <div className="form-group con">
                  <div className="s2" htmlFor="name">
                    Name <span className="s2">*</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="form-group con">
                  <div className="s2" htmlFor="email">
                    Email <span className="s2">*</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-group con">
                <div className="s2" htmlFor="subject">
                  Subject <span className="s2">*</span>
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                  className={errors.subject ? "error" : ""}
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group con">
                <div className="s2" htmlFor="message">
                  Message <span className="s2">*</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={`submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {/* <br></br> */}
            </form>
          </div>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default Contact;
