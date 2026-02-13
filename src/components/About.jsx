import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <section className="about-section">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="about-grid">
          {/* Text Content */}
          {/* Text Content */}
          <div className="about-content">
            <h2 className="section-heading">About Apexconstruct</h2>

            <p className="section-subtext">
              We build with intention, precision, and long-term value in mind —
              creating spaces that are functional, durable, and thoughtfully
              designed.
            </p>

            <p className="section-text">
              Apexconstruct is a full-service construction company specializing
              in residential remodeling, custom home building, and outdoor
              living spaces. With a strong focus on craftsmanship and clear
              communication, we work closely with our clients to deliver results
              that align with both vision and budget.
            </p>

            <p className="section-text">
              From kitchens and bathrooms to full home additions, our team is
              committed to quality materials, smart planning, and construction
              practices that stand the test of time.
            </p>
            <a href="#" className="services-btn">
              Learn More
            </a>
          </div>

          {/* Lottie Animation */}
          <div className="about-lottie">
            <DotLottieReact
              src="https://lottie.host/d3405573-b51b-4c59-bbc7-34c5967fe2d5/cSY4jjeeBa.lottie"
              loop
              autoplay
              className="w-full h-100 sm:h-100 md:h-auto lg:flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
