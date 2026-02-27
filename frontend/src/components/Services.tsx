import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Services() {

  const [active, setActive] = useState<"web" | "marketing">("web");

  const handlers = useSwipeable({
    onSwipedLeft: () => setActive("marketing"),
    onSwipedRight: () => setActive("web"),
    trackMouse: true
  });

  return (
    <div className="services-modern" {...handlers}>

      {/* LEFT */}
      <div className="services-left">

        <h1 className="services-title">Our Services</h1>

        <div className="service-tabs big-tabs">

          <button
            className={active === "web" ? "active" : ""}
            onClick={() => setActive("web")}
          >
            Web Development
          </button>

          <button
            className={active === "marketing" ? "active" : ""}
            onClick={() => setActive("marketing")}
          >
            Digital Marketing
          </button>

        </div>

        {active === "web" && (
          <p>
            We build lightning-fast websites, dashboards, admin panels and startup
            platforms using modern technologies like React and Node.
          </p>
        )}

        {active === "marketing" && (
          <p>
            We help brands grow with SEO, paid ads, funnels, analytics and
            data-driven marketing strategies that convert visitors into customers.
          </p>
        )}

      </div>

      {/* RIGHT IMAGE */}
      <div className="services-right">

        <img
          key={active}   // IMPORTANT for animation
          src={
            active === "web"
              ? "/services-web.png"
              : "/services-marketing.png"
          }
          className="service-image"
        />

      </div>

      {/* DOT INDICATOR */}
      <div className="swipe-dots">
        <span className={active === "web" ? "active" : ""}></span>
        <span className={active === "marketing" ? "active" : ""}></span>
      </div>

    </div>
  );
}