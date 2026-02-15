import { useEffect, useRef, useState } from "react";
import { Smile, Building2, Star, Users } from "lucide-react";
import trustBg from "../assets/hero-3.png";

/* ---------- Count Up Hook ---------- */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const update = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        requestAnimationFrame(update);
      }
    };

    update();
  }, [end, duration]);

  return count;
}

/* ---------- Stats Data ---------- */
const stats = [
  {
    icon: Smile,
    number: 1350,
    label: "Satisfied Clients",
    suffix: "+",
  },
  {
    icon: Building2,
    number: 1920,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: Star,
    number: 5,
    label: "Client Rating",
    suffix: "/5",
  },
  {
    icon: Users,
    number: 15,
    label: "Years Experience",
    suffix: "+",
  },
];

export default function WhyTrustUs() {
  return (
    <section
      className="trust-section"
      style={{ backgroundImage: `url(${trustBg})` }}
    >
      <div className="trust-overlay">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="trust-grid">
            {/* LEFT CONTENT */}
            <div className="trust-content">
              <h2 className="section-heading trust-heading">
                Why Trust Apexconstruct
              </h2>

              <p className="section-subheading trust-subheading">
                Proven results, trusted expertise, and consistent delivery.
              </p>

              <p className="section-text trust-text">
                At Apexconstruct, trust is earned through consistent results,
                quality workmanship, and transparent communication. We combine
                industry expertise with a client-focused approach to deliver
                projects that exceed expectations.
                <br />
                <br />
                Our commitment to reliability, safety, and long-term value has
                helped us build strong relationships and a reputation for
                excellence across every project we complete.
              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="trust-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const count = useCountUp(stat.number);

                return (
                  <div key={index} className="trust-card">
                    <Icon size={28} />

                    <h3 className="trust-number">
                      {count}
                      {stat.suffix}
                    </h3>

                    <p className="trust-label">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
