import React from "react";
import FooterCTA from "../components/FooterCTA";
import Contact from "../components/Contact";
import PageHero from "../components/PageHero";
import Faq from "../components/Faq";

import heroBg from "../assets/contact-hero.png";

const ContactPage = () => {
  return (
    <div>
      {/* HERO */}
      <PageHero
        bgImage={heroBg}
        line1="Start Your"
        line2="Next"
        line3="Project Today"
      />

      {/* INTRO SECTION */}
      <section className="services-intro">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="services-intro-content">
            <h2 className="section-heading2">
              Get in Touch with Apexconstruct
            </h2>

            <p className="section-text2">
              Whether you're planning a new construction project, a renovation,
              or simply exploring your options, our team is ready to help.
              Apexconstruct is committed to delivering exceptional
              craftsmanship, transparent communication, and reliable service
              from start to finish. Reach out today to discuss your project
              requirements, request a consultation, or learn more about how we
              can bring your vision to life.
            </p>

            {/* CONTACT DETAILS */}
            <div className="services-intro-actions">
              <a href="tel:+12125557824" className="services-intro-btn">
                +1 (212) 555-7824
              </a>

              <a
                href="mailto:info@apexconstruct.com"
                className="services-scroll-link"
              >
                info@apexconstruct.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <Contact />

      <Faq />
      <FooterCTA />
    </div>
  );
};

export default ContactPage;
