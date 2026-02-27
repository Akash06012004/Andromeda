import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-20 text-white"
    >

      {/* Smooth gradient blend from previous section */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      <div className="about-container">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-glass"
        >
          <h2 className="about-title">About Us</h2>

          <h3 className="about-sub">
            Akash — Developer & Business Analyst
          </h3>

          <p className="about-text">
            We build scalable digital products by combining technology and business strategy.
            <br /><br />
            From websites to full platforms, everything we create is designed to drive growth, performance, and results.
          </p>
        </motion.div>

        {/* WHY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="about-glass"
        >
          <h2 className="about-title">Why Choose Us</h2>

          <div className="why-grid">

            <motion.div
              whileHover={{ y: -6 }}
              className="why-card"
            >
              <h4>⚡ Fast Delivery</h4>
              <p>We deliver projects quickly without compromising quality.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="why-card"
            >
              <h4>📈 Growth Focused</h4>
              <p>Every product is built with performance and conversions in mind.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="why-card"
            >
              <h4>🧠 Startup Understanding</h4>
              <p>We understand what startups need to scale.</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}