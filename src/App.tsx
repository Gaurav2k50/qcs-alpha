import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
// import { Blogs, LatestNews } from "./pages/Blogs";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import Services from "./pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { LatestNews } from "./pages/LatestNews";
import { Support } from "./pages/support";

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
          <Route path="/latestNews" element={<LatestNews />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/support" element={<Support />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
