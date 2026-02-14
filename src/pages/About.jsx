import React from "react";
import PageHero from "../components/PageHero";

import heroBg from "../assets/contact-hero.png";
import HowWeWork from "../components/HowWeWork";
import FooterCTA from "../components/FooterCTA";
import CoreValues from "../components/CoreValues";
const About = () => {
  return (
    <div>
      {/* HERO */}

      <PageHero bgImage={heroBg} line1="About" line2="Apex" line3="Construct" />

      {/* INTRO SECTION */}
      <section className="services-intro">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="services-intro-content">
            <h2 className="section-heading2">
              Building Excellence with Apexconstruct
            </h2>

            <p className="section-text2">
              Apexconstruct is a trusted construction company dedicated to
              delivering high-quality residential and commercial projects. With
              years of industry experience, we combine innovative design, expert
              craftsmanship, and modern construction techniques to create spaces
              that are functional, durable, and visually exceptional. Our
              mission is to bring every client’s vision to life through reliable
              service, transparent communication, and attention to detail at
              every stage of the project. From planning and design to execution
              and final delivery, we focus on excellence, integrity, and
              long-lasting value. At Apexconstruct, we don’t just build
              structures — we build lasting relationships and spaces that
              inspire.
            </p>

            {/* CTA */}
            <div className="services-intro-actions">
              <a href="/services" className="services-intro-btn">
                Explore Our Services
              </a>

              <a href="#contact" className="services-scroll-link">
                Work With Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowWeWork />
      <CoreValues />
      <FooterCTA />
    </div>
  );
};

export default About;
