import whyChooseUsImg from "../assets/why-choose-us.jpg";

export default function WhyChooseUs() {
  return (
    <section className="apex-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="apex-grid">
          {/* Text Column */}
          <div className="apex-content">
            <h2 className="section-heading2">Why Choose Apexconstruct</h2>

            <p className="section-subheading2">
              Built on trust, precision, and long-term value.
            </p>

            <p className="section-text2">
              Choosing the right construction partner is about more than just
              completing a project — it’s about confidence, communication, and
              craftsmanship. At Apexconstruct, we approach every project with a
              clear process, thoughtful planning, and a commitment to delivering
              results that last.
              <br />
              <br />
              From initial consultation to final walkthrough, our team focuses
              on transparency, quality materials, and attention to detail. We
              work closely with homeowners, architects, and designers to ensure
              every space reflects both function and design excellence. Our goal
              is simple: to build spaces you’re proud of and relationships you
              can rely on.
            </p>
          </div>

          {/* Image Column */}
          <div className="apex-image-wrapper">
            <img
              src={whyChooseUsImg}
              alt="Why Choose Apexconstruct"
              className="apex-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
