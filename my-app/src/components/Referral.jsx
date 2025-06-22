"use client";

import { useState, useEffect, useRef } from "react";
import "./Referral.css";
// import { useEffect } from "react";
import { useToggleStore } from "./store";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


const Referral = () => {
  // const [options, setOptions] = useState({
  //   ananath: "TECH00001REF",
  //   hemanth: "TECH00002REF",
  // });
  const isSubmitted = useToggleStore((state) => state.isSubmitted);
  const [options, setOptions] = useState([]);
  const [selectedCode, setSelectedCode] = useState("");
  const [referralCode, setReferralCode] = useState("TECH2024REF");
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  // console.log(options);
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

  const copyReferralCode = () => {
    navigator.clipboard.writeText(selectedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const leaderboardData = [
    {
      name: "Priya Sharma",
      referrals: 12,
      earnings: 6000,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Rahul Kumar",
      referrals: 8,
      earnings: 4000,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Anita Singh",
      referrals: 6,
      earnings: 3000,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Vikash Gupta",
      referrals: 5,
      earnings: 2500,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sneha Patel",
      referrals: 4,
      earnings: 2000,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];
  useEffect(() => {
    const getApplicants = async () => {
      try {
        const response = await axios.get(`${API_URL}/get_applicants/`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        setOptions(response.data);
        // console.log("Applicants:", response.data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    getApplicants();
  }, [isSubmitted]);

  return (
    <section id="referral" className="section referral" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-r">Referral Program</h2>
          <p className="section-subtitle">
            Earn ₹500 for every friend you refer. No limits on earnings!
          </p>
        </div>

        <div className={`referral-content ${isVisible ? "animate" : ""}`}>
          <div className="referral-hero">
            <div className="referral-card">
              <div className="referral-header">
                <div className="referral-icon">💰</div>
                <h3>Earn ₹500 per Referral</h3>
                <p>
                  Share your referral code and earn money when your friends join
                </p>
              </div>

              <div className="referral-code-section">
                <div className="code-input-group1">
                  <label className="referLabel">
                    Select Your Refered Person
                  </label>
                  <select
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="referral-input1"
                  >
                    <option className="referOptions" value="">
                      -- Choose --
                    </option>
                    {options.length === 0 ? (
                      <option className="referOptions" disabled>
                        Loading applicants...
                      </option>
                    ) : (
                      options.map((option, index) => (
                        <option
                          className="referOptions"
                          key={index}
                          value={option.code}
                        >
                          {option.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <br></br>

                <div className="code-input-group">
                  <input
                    type="text"
                    value={selectedCode == "" ? referralCode : selectedCode}
                    readOnly
                    className="referral-input"
                  />
                  <button
                    className={`copy-btn ${copied ? "copied" : ""}`}
                    onClick={copyReferralCode}
                  >
                    {copied ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="referral-stats">
                <div className="stat">
                  <span className="stat-number">
                    {options.length !== 0 ? options[0].refered_count : 0}
                  </span>
                  <span className="stat-label">Referrals</span>
                </div>
                <div className="stat">
                  <span className="stat-number">
                    {options.length !== 0 ? options[0].refered_count * 500 : 0}
                  </span>
                  <span className="stat-label">Earned</span>
                </div>
              </div>
            </div>

            <div className="earnings-chart">
              <h4>Potential Earnings</h4>
              <div className="chart-bars">
                <div
                  className="chart-bar"
                  style={{ "--height": "20%", "--delay": "0.1s" }}
                >
                  <span className="bar-value">₹500</span>
                  <span className="bar-label">1 Friend</span>
                </div>
                <div
                  className="chart-bar"
                  style={{ "--height": "40%", "--delay": "0.2s" }}
                >
                  <span className="bar-value">₹2500</span>
                  <span className="bar-label">5 Friends</span>
                </div>
                <div
                  className="chart-bar"
                  style={{ "--height": "60%", "--delay": "0.3s" }}
                >
                  <span className="bar-value">₹5000</span>
                  <span className="bar-label">10 Friends</span>
                </div>
                <div
                  className="chart-bar"
                  style={{ "--height": "80%", "--delay": "0.4s" }}
                >
                  <span className="bar-value">₹10000</span>
                  <span className="bar-label">20 Friends</span>
                </div>
                <div
                  className="chart-bar"
                  style={{ "--height": "100%", "--delay": "0.5s" }}
                >
                  <span className="bar-value">₹25000</span>
                  <span className="bar-label">50 Friends</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="referral-leaderboard">
            <h3>Top Referrers This Month</h3>
            <div className="leaderboard">
              {leaderboardData.map((user, index) => (
                <div key={index} className="leaderboard-item">
                  <div className="rank">#{index + 1}</div>
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                  </div>
                  <div className="user-stats">
                    <span className="referrals">
                      {user.referrals} referrals
                    </span>
                    <span className="earnings">₹{user.earnings}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="how-it-works">
          <h3>How It Works</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Share Your Code</h4>
                <p>Share your unique referral code with friends and family</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Friend Enrolls</h4>
                <p>
                  Your friend uses your code during enrollment and pays the fee
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>You Earn ₹500</h4>
                <p>Get ₹500 credited to your account within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="referral-benefits">
          <div className="benefit">
            <div className="benefit-icon">🚀</div>
            <h4>No Limits</h4>
            <p>Refer unlimited friends and earn unlimited money</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">⚡</div>
            <h4>Instant Payout</h4>
            <p>Earnings credited within 24 hours of successful enrollment</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🎯</div>
            <h4>Easy Tracking</h4>
            <p>Track all your referrals and earnings in real-time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
