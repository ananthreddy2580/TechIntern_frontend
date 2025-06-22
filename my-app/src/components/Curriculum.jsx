"use client";

import { useState, useEffect, useRef } from "react";
import "./Curriculum.css";

const Curriculum = () => {
  const [activeWeek, setActiveWeek] = useState(null);
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

  const curriculum = [
    {
      week: 1,
      title: "Frontend Fundamentals",
      topics: [
        "____HTML TOPICS____",
        "HTML Structure & Syntax",
        "Text Formatting Elements",
        "Links & Navigation",
        "Images & Media Embeds",
        "Lists (ul, ol, dl)",
        "Tables & Data Presentation",
        "Forms & Input Elements",
        "Semantic HTML5 Elements",
        "HTML Entities & Special Characters",
        "Meta Tags & SEO Basics",
        "Accessibility & ARIA Attributes",
        "Iframes & Embedded Content",
        "____CSS TOPICS____",
        "CSS Syntax & Selectors",
        "Text Styling & Fonts",
        "Colors & Backgrounds",
        "Box Model (Margin, Padding, Border)",
        "Display & Visibility",
        "Flexbox Layout",
        "Grid Layout",
        "Positioning (Static, Relative, Absolute, Fixed, Sticky)",
        "Pseudo-classes & Pseudo-elements",
        "Transitions & Animations",
        "Media Queries & Responsive Design",
        "CSS Units (px, %, em, rem, vh, vw)",
        "CSS Variables",
        "Custom Fonts & @font-face",
        "Advanced Features (z-index, clip-path, scroll behavior)",
      ],
      icon: "🌐",
      color: "#ff6b6b",
    },
    {
      week: 2,
      title: "Basic to Advanced JavaScript",
      topics: [
        "____BASICS____",
        "JavaScript Syntax & Basics",
        "Variables (var, let, const)",
        "Data Types (String, Number, Boolean, null, undefined)",
        "Operators (Arithmetic, Assignment, Comparison, Logical)",
        "Conditional Statements (if, else, switch)",
        "Loops (for, while, do...while)",
        "Functions (declaration, expression, arrow functions)",
        "Arrays & Array Methods (push, pop, map, filter, etc.)",
        "Objects & Object Methods",
        "String Methods",
        "Date & Math Objects",

        "____INTERMEDIATE____",
        "DOM Manipulation (getElementById, querySelector, etc.)",
        "Event Handling (click, input, mouseover, etc.)",
        "Form Validation",
        "LocalStorage & SessionStorage",
        "ES6+ Features (let/const, arrow functions, template literals)",
        "Destructuring & Spread/Rest Operators",
        "Callback Functions",
        "Promises",
        "Async/Await",
        "____ADVANCED____",
        "Closures",
        "Hoisting",
        "Scope (Global, Local, Block)",
        "The `this` Keyword",
        // "Prototype & Inheritance",
        "Event Loop & Call Stack",
        "Debouncing & Throttling",
        "Modules (import/export)",
        "Error Handling (try/catch, throw)",
        "Fetch API & HTTP Requests",
        "JSON Handling",
        // "Object-Oriented JavaScript (OOP)",
        // "JavaScript Design Patterns (Factory, Singleton, Module)",
        "Memory Management & Garbage Collection",
      ],

      icon: "⚡",
      color: "#4ecdc4",
    },
    {
      week: 3,
      title: "React Development",
      topics: [
        // 🟢 Basics
        "Introduction to React & JSX",
        "React Components (Function & Class)",
        "Props & State",
        "Event Handling in React",
        "Conditional Rendering",
        "Lists and Keys",
        "Forms in React",
        // "Lifting State Up",
        // "Component Lifecycle (Class Components)",
        "React Hooks (useState, useEffect)",

        // 🟡 Intermediate
        "useRef, useMemo, useCallback",
        "Custom Hooks",
        "Context API",
        "React Router (v6+)",
        // "Code Splitting & Lazy Loading",
        // "Controlled vs Uncontrolled Components",
        // "Handling Side Effects",
        // "React Portals",
        "Error Boundaries",
        // "Forms with Validation (Formik, Yup)",

        // 🔵 Advanced
        "State Management with Zustand",
        "React Query (data fetching)",
        "useReducer & Complex State Logic",
        "React Performance Optimization",
        "Higher-Order Components (HOC)",
        "Render Props",
        "Server-Side Rendering (SSR) vs Client-Side (CSR)",
        // "React with TypeScript",
        // "Testing React Components (Jest, React Testing Library)",
        // "React DevTools & Debugging",

        // ⚙️ Ecosystem & Tools
        // "Create React App / Vite Setup",
        // "ESLint & Prettier Integration",
        // "React + Tailwind CSS",
        // "React + Axios / Fetch API",
        // "Deploying React Apps (Netlify, Vercel, GitHub Pages)",
      ],
      icon: "⚛️",
      color: "#45b7d1",
    },
    {
      week: 4,
      title: "React Frontend Project Week!",
      topics: [
        `Hi everyone,

This week, we’ll be applying everything you’ve learned so far by building a React Frontend Project! 🎯

You’ll get hands-on experience working with:

React components and props

State and hooks (useState, useEffect)

React Router for navigation

Form handling and validations

API integration (using fetch or Axios)

Styling with CSS or Tailwind

By the end of the week, you’ll have a fully functional, interactive frontend application that showcases your React skills and can be added to your portfolio.

Stay focused, ask questions, and let’s build something amazing! `,
      ],
      icon: "💼",
      color: "#f7d2c4",
    },
    {
      week: "5-6",
      title: "Python Backend",
      topics: [
        // 🟢 Basics
        "Introduction to Python & Installation",
        "Python Syntax & Indentation",
        "Variables & Data Types",
        "Type Casting",
        "Operators (Arithmetic, Comparison, Logical)",
        "Control Flow (if, elif, else)",
        "Loops (for, while, nested)",
        "Break & Continue Statements",
        "Input & Output",
        "String Manipulation",
        "Lists & List Methods",
        "Tuples & Tuple Methods",
        "Sets & Set Operations",
        "Dictionaries & Dictionary Methods",

        // 🟡 Intermediate
        "Functions (def, return, arguments, scope)",
        "Lambda Functions",
        "Functional Programming (map, filter, reduce)",
        "List Comprehensions",
        "Error Handling (try, except, finally)",
        "File Handling (read, write, append)",
        "Modules & Packages (import, custom modules)",
        "Python Standard Library (math, datetime, random, os)",
        "OOP Basics (Classes & Objects)",
        "OOP Concepts (Inheritance, Polymorphism, Encapsulation)",
        "Iterators & Generators",
        "Decorators",
        "Closures",

        // 🔵 Advanced
        // "Virtual Environments (venv, pip)",
        // "Working with APIs (requests, JSON)",
        // "Regular Expressions (re module)",
        // "Multithreading & Multiprocessing",
        // "Unit Testing (unittest, pytest)",
        // "Advanced OOP (MRO, dunder methods)",
        // "Functional Programming (map, filter, reduce)",
        // "Context Managers (with statement)",
        // "Working with Databases (sqlite3, MySQL connector)",
        // "Logging & Debugging",
        // "Python Memory Management",
        // "Type Hinting (PEP 484)",
        // "Performance Optimization (timeit, profiling)",
        // "Packaging & Distribution (pip, setup.py)",

        // ⚙️ Applications
        // "Web Development (Flask, Django basics)",
        // "Data Analysis (pandas, NumPy)",
        // "Data Visualization (Matplotlib, Seaborn)",
        // "Machine Learning (scikit-learn basics)",
        // "Web Scraping (BeautifulSoup, requests)",
        // "Automation Scripts (Selenium, OS automation)",
        // "Command Line Tools",
        // "Game Development (pygame)",
        // "Scripting for Excel/CSV/JSON",
        // "Basic Networking (socket, urllib)",
      ],
      icon: "🐍",
      color: "#96ceb4",
    },
    {
      week: "6-7",
      title: "Django Framework",
      topics: [
        // 🟢 Basics
        "Introduction to Django & Installation",
        "Django Project Structure",
        "Creating & Running Django Projects",
        "Creating Django Apps",
        "URL Routing (urls.py)",
        "Views (Function-based views)",
        // "Templates & Template Inheritance",
        "Static Files & Media Files",
        "Django Admin Panel",
        "Models & ORM (Object-Relational Mapping)",
        "Model Field Types",
        "Migrations (makemigrations, migrate)",
        "Creating and Using Superuser",

        // 🟡 Intermediate
        // "Form Handling (Django Forms, HTML Forms)",
        // "ModelForms",
        // "Class-based Views",
        "CRUD Operations (Create, Read, Update, Delete)",
        // "Django Messages Framework",
        "User Authentication (Login, Logout, Registration)",
        "User Permissions & Groups",
        "Custom User Model",
        "Django Middleware",
        "QuerySets & Managers",
        // "Pagination",
        "Working with Sessions & Cookies",
        "Django Shell",

        // 🔵 Advanced
        // "Advanced QuerySet Methods",
        // "Signals",
        // "Custom Template Tags & Filters",
        // "File Uploads",
        "Email Integration",
        // "Caching (File, Database, Memcached, Redis)",
        "REST API with Django REST Framework (DRF)",
        "JWT Authentication (with DRF)",
        "Throttling, Permissions, and Serializers (DRF)",
        // "Testing in Django (Unit Tests, TestClient)",
        // "Security Best Practices (CSRF, XSS, HTTPS)",
        // "Deployment (Heroku, Vercel, PythonAnywhere, AWS)",
        // "Environment Variables & Django-Environ",
        // "Performance Optimization in Django",
      ],
      icon: "🧩",
      color: "#16cda4",
    },
    {
      week: 8,
      title: "Database",
      topics: [
        // 🐍 Basics
        " Introduction to SQL & Databases",
        " SQL Data Types",
        " CREATE, DROP, ALTER TABLE",
        " INSERT INTO",
        " SELECT Statement",
        " WHERE Clause",
        " ORDER BY",
        " LIMIT & OFFSET",
        " DISTINCT Keyword",
        " UPDATE Statement",
        " DELETE Statement",

        // 🐍 Intermediate
        " SQL Functions (COUNT, SUM, AVG, MAX, MIN)",
        " GROUP BY & HAVING",
        " LIKE, IN, BETWEEN, IS NULL",
        " Aliases (AS)",
        " INNER JOIN",
        " LEFT JOIN / RIGHT JOIN / FULL JOIN",
        " SELF JOIN",
        " UNION, INTERSECT, EXCEPT",
        " Subqueries (Nested SELECT)",
        " CASE Statements (IF/ELSE Logic)",
        " Views (CREATE, UPDATE, DROP)",

        // 🐍 Advanced
        " Indexes (CREATE INDEX, performance)",
        " Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK)",
        " Transactions (BEGIN, COMMIT, ROLLBACK)",
        // " ACID Properties",
        // " Triggers",
        // " Stored Procedures & Functions",
        // " Normalization (1NF, 2NF, 3NF)",
        // " Denormalization",
        // " ER Diagrams & Relationships",
        // " SQL Injection (Security)",
        // " Performance Tuning (EXPLAIN, Query Optimization)",
        // " Working with Multiple Tables",
      ],
      icon: "🗄️",
      color: "#feca57",
    },
    {
      week: 9,
      title: "Django Backend Project week",
      topics: [
        `
       Hi everyone,

This week, we’ll be applying everything you’ve learned so far by building a Django Backend Project! ⚙️🐍
You’ll get hands-on experience working with:

Setting up a Django project and apps

Django models and the ORM (Object-Relational Mapping)

Admin panel customization

Views and URL routing

Handling forms and user input

Working with templates (Jinja-style)

Building and connecting REST APIs with Django REST Framework

Authentication and user management

Connecting with a frontend (React, HTML, or any API client)

Deployment basics (SQLite/PostgreSQL + local server)

By the end of the week, you’ll have a fully functional, secure backend application that can power real-world web apps and strengthen your portfolio.

Stay curious, build confidently, and let’s bring your backend skills to life! 💪🌿`,
      ],
      icon: "🚀",
      color: "#ff9ff3",
    },
    {
      week: "10-12",
      title: "Full Project & Deployment",
      topics: [
        `
        Hi everyone, this week we’re taking a major step forward by building a full stack web project with deployment! 🚀 You’ll be working with React on the frontend and Django on the backend, combining everything you've learned into one powerful, real-world application. On the frontend, you'll build responsive interfaces using components, props, hooks like useState and useEffect, 
        handle form inputs, manage routes with React Router, and integrate APIs seamlessly. On the backend, you’ll set up a Django project, design models, build APIs with Django REST Framework, and handle user authentication. Once the application is complete, we’ll deploy it — hosting the frontend on platforms like Netlify or Vercel and the backend on Render, Railway, or Heroku. You’ll also learn how to configure databases, manage environment variables, and test everything live. By the end, you’ll have a fully functional, deployed full stack application that not only showcases your technical skills but also becomes a standout project in your portfolio. Let’s build something amazing together! 🌿💻🌐
      `,
      ],
      icon: "🚀",
      color: "#af9ff3",
    },
  ];

  const toggleWeek = (weekIndex) => {
    setActiveWeek(activeWeek === weekIndex ? null : weekIndex);
  };

  return (
    <section id="curriculum" className="section curriculum" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-cir">6-Week Curriculum</h2>
          <p className="section-subtitle-cir">
            Comprehensive full-stack development program designed to make you
            job-ready
          </p>
        </div>

        <div className={`timeline ${isVisible ? "animate" : ""}`}>
          {curriculum.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                activeWeek === index ? "active" : ""
              }`}
              style={{ "--delay": `${index * 0.2}s`, "--color": item.color }}
            >
              <div className="timeline-marker">
                <span className="week-icon">{item.icon}</span>
                <span className="week-number">Week {item.week}</span>
              </div>

              <div className="timeline-content">
                <div
                  className="timeline-header"
                  onClick={() => toggleWeek(index)}
                >
                  <h3 className="week-title">{item.title}</h3>
                  <div
                    className={`expand-icon ${
                      activeWeek === index ? "rotated" : ""
                    }`}
                  >
                    <span>▼</span>
                  </div>
                </div>

                <div
                  className={`timeline-details ${
                    activeWeek === index ? "expanded" : ""
                  }`}
                >
                  <ul className="topics-list">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="topic-item">
                        <span className="topic-bullet">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="curriculum-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">📚</div>
            <h4>Hands-on Learning</h4>
            <p>Every concept taught through practical examples and exercises</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">👨‍💻</div>
            <h4>Industry Mentors</h4>
            <p>Learn from experienced professionals working in top companies</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🎯</div>
            <h4>Job-Ready Skills</h4>
            <p>Curriculum designed based on current industry requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
