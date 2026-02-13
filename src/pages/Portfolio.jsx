import React from "react";

import FooterCTA from "../components/FooterCTA";
import PageHero from "../components/PageHero";
import ServiceShowcase from "../components/ServiceShowcase";
import heroBg from "../assets/portfolio-hero.png";
const Portfolio = () => {
  return (
    <div>
      {/* HERO */}
      <PageHero
        bgImage={heroBg}
        line1="Our"
        line2="Completed"
        line3="Projects"
      />

      {/* INTRO SECTION */}
      <section className="services-intro">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="services-intro-content">
            <h2 className="section-heading2">Our Portfolio at Apexconstruct</h2>

            <p className="section-text2">
              At Apexconstruct, every project reflects our commitment to
              quality, craftsmanship, and thoughtful design. Our portfolio
              showcases a wide range of residential and commercial construction
              projects, from modern home builds and renovations to outdoor
              living spaces and structural improvements. Each project is
              completed with precision, attention to detail, and a focus on
              long-term value — delivering spaces that are both functional and
              visually exceptional.
            </p>

            <div className="services-intro-actions">
              <a href="/contact" className="services-intro-btn">
                Contact Us
              </a>
              <a href="#portfolio" className="services-scroll-link">
                View Projects ↓
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio">
        <ServiceShowcase />
      </div>
      <FooterCTA />
    </div>
  );
};

export default Portfolio;
