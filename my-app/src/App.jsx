import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Curriculum from "./components/Curriculum";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Referral from "./components/Referral";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Webinar from "./components/Webinar";
import Apply from "./components/Apply";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>
          TechIntern – IT Training for Freshers with Projects & Mentorship
        </title>
        <meta
          name="description"
          content="Join TechIntern to learn Python, Web Development, and more with expert mentors, real-world projects, and job interview preparation."
        />
        <meta
          name="keywords"
          content="TechIntern, IT training, coding courses, freshers, job ready, mentorship, project-based learning"
        />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Curriculum />
      <Projects />
      <Certificate />
      <Referral />
      <Apply />
      <Testimonials />
      <FAQ />
      {/* <Webinar /> */}
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
