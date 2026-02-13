import React from "react";

import ServicesDescription from "../components/ServicesDescription";
import FooterCTA from "../components/FooterCTA";
import WhyChooseUs from "../components/WhyChooseUs";

import heroBg from "../assets/services-hero.png";
import PageHero from "../components/PageHero";

const Services = () => {
  return (
    <div>
      {/* HERO */}
      <PageHero
        bgImage={heroBg}
        line1="Expert"
        line2="Construction"
        line3="Services"
      />

      {/* INTRO SECTION */}
      <section className="services-intro">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="services-intro-content">
            <h2 className="section-heading2">Our Services at Apexconstruct</h2>

            <p className="section-text2">
              At Apexconstruct, we provide a full range of construction and
              remodeling services designed to enhance both residential and
              commercial spaces. Our team combines industry expertise,
              innovative design, and precision craftsmanship to deliver results
              that exceed expectations. From new home construction to
              renovations and outdoor living solutions, we focus on quality
              materials, smart planning, and long-lasting value. Every project
              is approached with professionalism, attention to detail, and a
              commitment to client satisfaction.
            </p>

            <div className="services-intro-actions">
              <a href="/contact" className="services-intro-btn">
                Contact Us
              </a>

              <a href="#services" className="services-scroll-link">
                View Our Services ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div id="services">
        <ServicesDescription />
      </div>

      <WhyChooseUs />
      <FooterCTA />
    </div>
  );
};

export default Services;
