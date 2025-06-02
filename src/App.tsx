import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import Services from "./pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
