import { CheckCircle } from "lucide-react";
import servicesBg from "../assets/services-bg.jpg";

const services = [
  "Survey",
  "Decks and Porches",
  "Residential Remodeling",
  "Commercial Remodeling",
  "New Construction Home Building",
  "Kitchen Remodeling",
  "Home Additions",
  "Custom Home Building",
  "Bathroom Remodeling",
  "Outdoor Kitchens",
  "Outdoor Living Spaces",
  "Flooring Installations",
  "Painting",
  "Patio Installation",
];

export default function Services() {
  return (
    <section
      className="services-section"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      <div className="services-overlay">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="services-grid">
            {/* Left Column */}
            <div className="services-intro">
              <h2 className="services-heading">Explore Our Services</h2>

              <p className="services-subtext">
                Explore our services and delivery method — built on planning,
                craftsmanship, and reliable execution from start to finish.
              </p>

              <a href="/services" className="services-btn">
                Learn More
              </a>
            </div>

            {/* Middle Column */}
            <ul className="services-list">
              {services.slice(0, 7).map((service, index) => (
                <li key={index} className="services-item">
                  <CheckCircle size={20} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="services-list">
              {services.slice(7).map((service, index) => (
                <li key={index} className="services-item">
                  <CheckCircle size={20} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
