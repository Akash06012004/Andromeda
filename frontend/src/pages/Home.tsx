import { useEffect } from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>

{/* NAVBAR */}
<header className="navbar">
  <div className="nav-brand">
    <img src="/logo.png" className="nav-logo" />
    <h2>Andromeda</h2>
  </div>

  <nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
</header>



{/* HERO */}
<section id="home" className="hero parallax hero-wrap">

<div className="hero-left">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>
Build Digital.<br/>
Measure Growth.<br/>
Scale Smart.
</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.5}}
>
We help startups grow using web development + data driven marketing.
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

{/* SERVICES */}
<section id="services" className="parallax">
<Services/>
</section>

<section id="about">
  <div className="about-container">

    <h2>About Andromeda</h2>

    <div className="about-cards">

      <div className="about-glass">
        <h3>🚀 Vision</h3>
        <p>
          To empower startups and businesses with modern digital solutions that
          turn ideas into impactful online products.
        </p>
      </div>

      <div className="about-glass">
        <h3>🎯 Mission</h3>
        <p>
          Help founders launch faster, grow smarter, and scale confidently using
          high-performance technology and data-driven marketing.
        </p>
      </div>

      <div className="about-glass">
        <h3>✨ Objective</h3>
        <p>
          Build beautiful websites, scalable platforms, and growth strategies that
          don’t just look good — they deliver real results.
        </p>
      </div>

    </div>

  </div>
</section>




{/* CONTACT */}
<section id="contact" className="parallax">
<Contact/>
</section>
<Footer/>

</div>
  );
}
