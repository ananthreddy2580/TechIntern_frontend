"use client"

import { useState, useEffect, useRef } from "react"
import "./Webinar.css"

const Webinar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required"
    } else if (!/^\d{10}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "Please enter a valid 10-digit number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Shake animation for invalid inputs
      Object.keys(errors).forEach((field) => {
        const input = document.querySelector(`[name="${field}"]`)
        if (input) {
          input.classList.add("shake")
          setTimeout(() => input.classList.remove("shake"), 500)
        }
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", whatsapp: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const webinarFeatures = [
    {
      icon: "🎯",
      title: "Career Roadmap",
      description: "Learn the exact path to become a full-stack developer",
    },
    {
      icon: "💼",
      title: "Industry Insights",
      description: "Understand current market demands and opportunities",
    },
    {
      icon: "🛠️",
      title: "Live Coding",
      description: "Watch real-time coding demonstrations and best practices",
    },
    {
      icon: "💡",
      title: "Q&A Session",
      description: "Get your questions answered by industry experts",
    },
  ]

  return (
    <section id="webinar" className="section webinar" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join Our Free Webinar</h2>
          <p className="section-subtitle">
            Learn about the tech industry, career opportunities, and get a sneak peek into our curriculum
          </p>
        </div>

        <div className={`webinar-content ${isVisible ? "animate" : ""}`}>
          <div className="webinar-info">
            <div className="webinar-card">
              <div className="webinar-header">
                <div className="webinar-badge">FREE WEBINAR</div>
                <h3>"From Zero to Full-Stack Developer"</h3>
                <p className="webinar-subtitle">Discover how to build a successful tech career in just 6 weeks</p>
              </div>

              <div className="webinar-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <div>
                    <strong>Date:</strong> Every Saturday
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <div>
                    <strong>Time:</strong> 7:00 PM - 8:30 PM
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🌐</span>
                  <div>
                    <strong>Platform:</strong> Zoom (Link sent via email)
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">👥</span>
                  <div>
                    <strong>Seats:</strong> Limited to 100 participants
                  </div>
                </div>
              </div>

              <div className="webinar-features">
                <h4>What You'll Learn:</h4>
                <div className="features-grid">
                  {webinarFeatures.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-icon">{feature.icon}</span>
                      <div>
                        <h5>{feature.title}</h5>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="registration-form">
            <div className="form-container">
              <div className="form-header">
                <h3>Reserve Your Seat</h3>
                <p>Join 500+ students who have already transformed their careers</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="webinar-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "error" : ""}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "error" : ""}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className={errors.whatsapp ? "error" : ""}
                      placeholder="Enter your WhatsApp number"
                    />
                    {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Registering...
                      </>
                    ) : (
                      "Register for Free Webinar"
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <h3>Registration Successful!</h3>
                  <p>
                    Thank you for registering! We've sent the webinar link to your email. You'll also receive a WhatsApp
                    reminder 30 minutes before the session.
                  </p>
                  <div className="success-actions">
                    <a href="https://wa.me/1234567890" className="btn btn-primary">
                      Join WhatsApp Group
                    </a>
                  </div>
                </div>
              )}

              <div className="form-footer">
                <p>
                  <span className="security-icon">🔒</span>
                  Your information is secure and will never be shared
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Webinar
