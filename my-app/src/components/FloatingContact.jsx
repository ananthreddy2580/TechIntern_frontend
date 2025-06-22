"use client"

import { useState } from "react"
import "./FloatingContact.css"

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="floating-contact">
      <div className={`contact-options ${isExpanded ? "expanded" : ""}`}>
        <a
          href="https://wa.me/9491321951?text=Hi! I'm interested in the Python Full Stack Internship program."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option whatsapp"
        >
          <span className="contact-icon">💬</span>
          <span className="contact-label">WhatsApp</span>
        </a>

        <a
          href="mailto:info@techintern.com?subject=Inquiry about Python Full Stack Internship"
          className="contact-option email"
        >
          <span className="contact-icon">📧</span>
          <span className="contact-label">Email</span>
        </a>

        {/* <a href="tel:+911234567890" className="contact-option phone">
          <span className="contact-icon">📞</span>
          <span className="contact-label">Call</span>
        </a> */}
      </div>

      <button className={`contact-toggle ${isExpanded ? "active" : ""}`} onClick={toggleExpanded}>
        <span className="toggle-icon">{isExpanded ? "✕" : "💬"}</span>
      </button>
    </div>
  )
}

export default FloatingContact
