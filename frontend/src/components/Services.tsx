import { useState } from "react";

export default function Services() {

  const [active, setActive] = useState<"web" | "marketing">("web");;

  const data = {
    web: {
      title: "Web Development",
      desc: "We build lightning-fast websites, dashboards, admin panels and startup platforms.",
      img: "/services-web.png"
    },
    marketing: {
      title: "Digital Marketing",
      desc: "SEO, Ads, Analytics & Growth strategies to scale your business faster.",
      img: "/services-marketing.png"
    }
  };

  return (
    <div className="services-modern">

      {/* LEFT */}
      <div className="services-left">

        <h1 className="services-title">Our Services</h1>

        {/* TABS */}
        <div className="service-tabs">

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

        {/* CONTENT */}
        <p>{data[active].desc}</p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="services-right">
        <img
          src={data[active].img}
          className="service-image"
        />
      </div>

    </div>
  );
}