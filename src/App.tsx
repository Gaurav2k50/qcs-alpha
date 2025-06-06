import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
// import { Blogs, LatestNews } from "./pages/Blogs";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { LatestNews } from "./pages/LatestNews";
import { Support } from "./pages/Support";
import { Products } from "./components/Products";

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latestNews" element={<LatestNews />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/support" element={<Support />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
