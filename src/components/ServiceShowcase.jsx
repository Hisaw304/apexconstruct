/* kitchen images */
import k1 from "../assets/services-portfolio/kitchen-1.png";
import k2 from "../assets/services-portfolio/kitchen-2.png";
import k3 from "../assets/services-portfolio/kitchen-3.png";
import k4 from "../assets/services-portfolio/kitchen-4.png";

/* basement */
import b1 from "../assets/services-portfolio/basement-1.png";
import b2 from "../assets/services-portfolio/basement-2.png";
import b3 from "../assets/services-portfolio/basement-3.png";
import b4 from "../assets/services-portfolio/basement-4.png";

/* deck */
import d1 from "../assets/services-portfolio/deck-1.png";
import d2 from "../assets/services-portfolio/deck-2.png";
import d3 from "../assets/services-portfolio/deck-3.png";
import d4 from "../assets/services-portfolio/deck-4.png";

/* general */
import g1 from "../assets/services-portfolio/general-1.png";
import g2 from "../assets/services-portfolio/general-2.png";
import g3 from "../assets/services-portfolio/general-3.png";
import g4 from "../assets/services-portfolio/general-4.png";

/* new home */
import h1 from "../assets/services-portfolio/home-1.png";
import h2 from "../assets/services-portfolio/home-2.png";
import h3 from "../assets/services-portfolio/home-3.png";
import h4 from "../assets/services-portfolio/home-4.png";

const services = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    text: `We design and remodel kitchens that balance beauty, comfort, and
    everyday functionality. From smart layouts to premium materials,
    every space is tailored to how you cook, gather, and live — creating
    a modern kitchen built for efficiency and style.`,
    images: [k1, k2, k3, k4],
  },
  {
    id: "basement",
    title: "Basement Remodeling",
    text: `Transform unused basement space into a functional extension of
    your home. Whether you need a family lounge, workspace, or
    entertainment area, we create comfortable and practical environments
    that increase both livability and property value.`,
    images: [b1, b2, b3, b4],
  },
  {
    id: "deck",
    title: "Deck Construction",
    text: `Our custom decks extend your living space outdoors with durable,
    well-crafted structures designed for relaxation and entertaining.
    Each project is built to complement your home while withstanding the
    elements for years of enjoyment.`,
    images: [d1, d2, d3, d4],
  },
  {
    id: "general",
    title: "General Construction",
    text: `From structural improvements to complete rebuilds, our general
    construction services deliver reliable solutions for projects of any
    scale. We focus on precision, efficiency, and quality workmanship in
    every phase of construction.`,
    images: [g1, g2, g3, g4],
  },
  {
    id: "new-home",
    title: "New Home Construction",
    text: `We build custom homes from the ground up with careful planning,
    expert craftsmanship, and attention to detail. Every home is
    designed around your vision, ensuring a space that reflects your
    lifestyle and stands the test of time.`,
    images: [h1, h2, h3, h4],
  },
];

export default function ServiceShowcase() {
  return (
    <section className="service-showcase">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="service-showcase-header">
          <h2 className="section-heading">Our Featured Projects</h2>
          <p className="section-subheading">
            A closer look at the spaces we design, build, and transform.
          </p>
        </div>

        {/* Services */}
        <div className="service-showcase-list">
          {services.map((service, index) => (
            <div className="service-block" key={index} id={service.id}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>

              {/* Images grid */}
              <div className="service-images">
                {service.images.map((img, i) => (
                  <div className="service-image-wrapper" key={i}>
                    <img src={img} alt={service.title} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
