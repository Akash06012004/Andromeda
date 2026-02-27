import { useEffect } from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import About from "../components/About";

// 🔥 VERCEL
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            From Idea to Scalable Product-<br />
            We Build & <br />
            Grow Startups
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
          We design, build, and scale digital products that increase conversions and drive real business growth.
          </motion.p>

          <a href="tel:+919664712233" className="call-link">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Call
            </motion.button>
          </a>

        </div>
      </section>
      <About/>
      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-container">
          <h2>About Andromeda</h2>

          <div className="about-cards">

            <div className="about-glass">
              <h3>🚀 Vision</h3>
              <p>
                To empower startups and businesses with modern digital solutions
                that turn ideas into impactful online products.
              </p>
            </div>

            <div className="about-glass">
              <h3>🎯 Mission</h3>
              <p>
                Help founders launch faster, grow smarter, and scale confidently
                using high-performance technology and data-driven marketing.
              </p>
            </div>

            <div className="about-glass">
              <h3>✨ Objective</h3>
              <p>
                Build beautiful websites, scalable platforms, and growth strategies
                that deliver real results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />

      {/* 🔥 VERCEL TRACKING */}
      <Analytics />
      <SpeedInsights />

      {/* WHATSAPP FLOAT BUTTON */}
  <a
  href="https://wa.me/919664712233?text=Hi%20Akash,%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
  >
  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="28" />
</a>
    </>
    
  );
}