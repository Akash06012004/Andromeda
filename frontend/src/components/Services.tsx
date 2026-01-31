import { useState } from "react";

export default function Services() {
  const [active, setActive] = useState<"web" | "marketing">("web");

  return (
    <div className="services-modern">

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

      <div className="services-right">
        <img
          key={active}
          className="service-image"
          src={
            active === "web"
              ? "/services-web.png"
              : "/services-marketing.png"
          }
          alt="service"
        />
      </div>

    </div>
  );
}
