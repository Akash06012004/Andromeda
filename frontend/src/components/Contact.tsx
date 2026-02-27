import axios from "axios";
import { useState } from "react";
import { track } from "@vercel/analytics";

// Example
track("lead_submitted");
export default function Contact() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendMessage = async () => {
    if (!email || !message) return alert("Fill all fields");

    await axios.post("/leads", { email,message});

    track("lead_submitted");
    
    setEmail("");
    setMessage("");
    setSent(true);

    setTimeout(() => setSent(false), 3000);
  };

  const createRipple = (e: any) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <section className="contact-section">

      <div className="contact-wrap">

        {/* LEFT CARD */}
        <div className="contact-info glass-box">
          <small className="section-label">GET IN TOUCH</small>
          <h2>Let’s Talk</h2>

          <p>
            Have a project in mind or want to grow your startup?
            Let’s talk.
          </p>

          <div className="contact-detail">📧 hello@Andromeda.com</div>
          <div className="contact-detail">📞 +91 9664712233</div>
          <div className="contact-detail">📍 Gujarat,India</div>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-form glass-box">

          <small className="section-label">CONNECT WITH US</small>

          <input
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          {sent && <p style={{ color: "#22c55e" }}>✅ Your message is sent!</p>}

          <button
            onClick={(e) => {
              createRipple(e);
              sendMessage();
            }}
          >
            Send Message
          </button>

        </div>

      </div>
    </section>
  );
}
