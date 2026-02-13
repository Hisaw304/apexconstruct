import rightBg from "../assets/hero-5.png";
import smallLogo from "../assets/logo-mark.svg";

export default function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-grid">
        {/* LEFT — Mission Content */}
        <div className="mission-left">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="mission-content">
              <h2 className="section-heading mission-heading">Our Mission</h2>

              <p className="section-subheading mission-subheading">
                Building spaces with purpose, integrity, and lasting value.
              </p>

              <p className="section-text mission-text">
                At Apexconstruct, our mission is to deliver exceptional
                construction solutions through craftsmanship, innovation, and
                transparency. We believe in building environments that improve
                everyday living while maintaining the highest standards of
                quality and reliability.
                <br />
                <br />
                Through thoughtful design, skilled execution, and strong client
                relationships, we aim to create spaces that stand the test of
                time and provide long-term value for every client we serve.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Career CTA */}
        <div
          className="mission-right"
          style={{ backgroundImage: `url(${rightBg})` }}
        >
          <div className="max-w-7xl mx-auto px-6 py-24 w-full relative">
            {/* floating logo */}
            <img
              src={smallLogo}
              alt="Apexconstruct logo"
              className="mission-logo"
            />

            <div className="mission-cta">
              <h3 className="mission-career-text">
                Build <br />
                a rewarding <br />
                career.
              </h3>

              <a href="#contact" className="mission-btn">
                Join Our Family
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
