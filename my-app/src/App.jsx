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

function App() {
  return (
    <div className="App">
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
