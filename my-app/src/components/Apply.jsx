// "use client";
import { create } from "zustand";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Apply.css";
import { useToggleStore } from "./store";
const API_URL = import.meta.env.VITE_API_URL;
const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [refreshData, setRefreshData] = useState(false);
  // const useToggleStore = create((set) => ({
  //   isSubmitted: false,

  //   // This will toggle the value (true → false → true → ...)
  //   toggleIsSubmitted: () =>
  //     set((state) => ({ isSubmitted: !state.isSubmitted })),
  // }));
  const toggleIsSubmitted = useToggleStore((state) => state.toggleIsSubmitted);

  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    education: "",
    // Background
    programmingExperience: "",
    motivation: "",
    goals: "",
    // Payment
    referralCode: "",
    transactionId: "",
    termsAndConditions: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
        newErrors.phone = "Please enter a valid 10-digit number";
      if (!formData.education) newErrors.education = "Education is required";
    }

    if (step === 2) {
      if (!formData.programmingExperience)
        newErrors.programmingExperience = "Please select your experience level";
      if (!formData.motivation.trim())
        newErrors.motivation = "Please tell us your motivation";
      if (!formData.goals.trim()) newErrors.goals = "Please share your goals";
    }
    if (step === 3) {
      if (!formData.transactionId?.trim()) {
        newErrors.transactionId =
          "Please enter your transaction ID (if you have one)";
      }
      if (!formData.termsAndConditions) {
        newErrors.termsAndConditions =
          "You must agree to the terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setIsLoading(true);

    try {
      const CreateUserResponse = await axios.post(
        `${API_URL}/applied_user/`,
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
      toggleIsSubmitted();
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
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="section apply success" ref={sectionRef}>
        <div className="container">
          <div className="success-content">
            <div className="success-animation">
              <div className="checkmark">✓</div>
            </div>
            <h2>Application Submitted Successfully!</h2>
            <p>
              Thank you for applying to our Python Full Stack Internship
              program.
            </p>

            <div className="next-steps">
              <h3>What happens next?</h3>
              <div className="step-item">
                <div className="step-number1">1</div>
                <div className="step-content">
                  <h4>Payment Confirmation</h4>
                  <p>
                    Complete your payment using the details sent to your email
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number1">2</div>
                <div className="step-content">
                  <h4>Welcome Package</h4>
                  <p>Receive course materials and WhatsApp group invite</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number1">3</span>
                <div className="step-content">
                  <h4>Program Starts</h4>
                  <p>Join the orientation session and begin your journey</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <p>Questions? Contact us at:</p>
              <div className="contact-methods">
                <a href="mailto:info@techintern.com" className="contact-method">
                  <span className="contact-icon">📧</span>
                  info@techintern.com
                </a>
                <a href="https://wa.me/9491321951" className="contact-method">
                  <span className="contact-icon">📱</span>
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="section apply" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-app">Apply for Internship</h2>
          <p className="section-subtitle-app">
            Join 500+ students who have transformed their careers with our
            program
          </p>
        </div>

        <div className={`application-container ${isVisible ? "animate" : ""}`}>
          <div className="progress-bar">
            <div className="progress-steps">
              <div
                className={`progress-step ${currentStep >= 1 ? "active" : ""}`}
              >
                <span className="step-number">1</span>
                <span className="step-label">Personal Info</span>
              </div>
              <div
                className={`progress-step ${currentStep >= 2 ? "active" : ""}`}
              >
                <span className="step-number">2</span>
                <span className="step-label">Background</span>
              </div>
              <div
                className={`progress-step ${currentStep >= 3 ? "active" : ""}`}
              >
                <span className="step-number">3</span>
                <span className="step-label">Payment</span>
              </div>
            </div>
            <div className="progress-line">
              <div
                className="progress-fill"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          <form className="application-form">
            {currentStep === 1 && (
              <div className="form-step">
                <h3>Personal Information</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">
                      Full Name <span className="s1">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={errors.fullName ? "error" : ""}
                    />
                    {errors.fullName && (
                      <span className="error-message">{errors.fullName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="s1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="s1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="education">
                      Education <span className="s1">*</span>
                    </label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className={errors.education ? "error" : ""}
                    >
                      <option value="">Select your education</option>
                      <option value="12th">12th Pass</option>
                      <option value="diploma">Diploma</option>
                      <option value="graduation">Graduation</option>
                      <option value="postgraduation">Post Graduation</option>
                    </select>
                    {errors.education && (
                      <span className="error-message">{errors.education}</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <h3>Background Information</h3>

                <div className="form-group">
                  <label>
                    Programming Experience <span className="s1">*</span>
                  </label>
                  <select
                    id="programmingExperience"
                    name="programmingExperience"
                    value={formData.programmingExperience}
                    onChange={handleInputChange}
                    className={errors.programmingExperience ? "error" : ""}
                  >
                    <option value="">Select Experience</option>
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Basic Knowledge">Basic Knowledge</option>
                    <option value="Some Experience">Some Experience</option>
                  </select>
                  {errors.programmingExperience && (
                    <span className="error-message">
                      {errors.programmingExperience}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="motivation">
                    Why do you want to join this program?{" "}
                    <span className="s1">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Tell us what motivates you to learn programming..."
                    rows="4"
                    className={errors.motivation ? "error" : ""}
                  ></textarea>
                  {errors.motivation && (
                    <span className="error-message">{errors.motivation}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="goals">
                    What are your career goals? <span className="s1">*</span>
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="Share your career aspirations and goals..."
                    rows="4"
                    className={errors.goals ? "error" : ""}
                  ></textarea>
                  {errors.goals && (
                    <span className="error-message">{errors.goals}</span>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                <h3>Payment Information</h3>

                <div className="payment-summary">
                  <div className="summary-item">
                    <span>Course Fee:</span>
                    <span>₹3,000</span>
                  </div>
                  {/* {formData.referralCode && (
                    <div className="summary-item discount">
                      <span>Referral Discount:</span>
                      <span>-₹500</span>
                    </div>
                  )} */}
                  <div className="summary-total">
                    <span>Total Amount:</span>
                    <span>₹3,000</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="referralCode">Referral Code (Optional)</label>
                  <input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                    placeholder="Enter referral code"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="transactionId">
                    Transaction Id <span className="s1">*</span>
                  </label>
                  <input
                    type="text"
                    id="transactionId"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleInputChange}
                    className={errors.transactionId ? "error" : ""}
                    placeholder="Enter Transaction Id"
                    // required
                  />
                  {errors.transactionId && (
                    <span className="error-message">
                      {errors.transactionId}
                    </span>
                  )}
                </div>

                <div className="terms-agreement">
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      name="termsAndConditions"
                      value={formData.termsAndConditions}
                      onChange={handleInputChange}
                      className={errors.termsAndConditions ? "error" : ""}
                      // required
                    />
                    <span className="checkbox-custom"></span>I agree to the{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      Privacy Policy
                    </a>
                  </label>
                  {errors.termsAndConditions && (
                    <span className="error-message">
                      {errors.termsAndConditions}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary"
                >
                  Previous
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`btn btn-primary ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Apply;
