import {
  Home,
  Hammer,
  Building2,
  LayoutGrid,
  PlusSquare,
  ChefHat,
  Bath,
  Star,
  Flame,
  Trees,
  Layers,
  Square,
} from "lucide-react";

/* Import service images from assets */
import s1 from "../assets/services-images/service-1.png";
import s2 from "../assets/services-images/service-2.png";
import s3 from "../assets/services-images/service-3.png";
import s4 from "../assets/services-images/service-4.png";
import s5 from "../assets/services-images/service-5.png";
import s6 from "../assets/services-images/service-6.png";
import s7 from "../assets/services-images/service-7.png";
import s8 from "../assets/services-images/service-8.png";
import s9 from "../assets/services-images/service-9.png";
import s10 from "../assets/services-images/service-10.png";
import s11 from "../assets/services-images/service-11.png";
import s12 from "../assets/services-images/service-12.png";

const services = [
  {
    icon: Home,
    image: s1,
    title: "New Home Construction",
    text: "We design and build homes from the ground up, delivering spaces that combine durability, comfort, and modern design tailored to your lifestyle.",
  },
  {
    icon: Hammer,
    image: s2,
    title: "Residential Remodeling",
    text: "Refresh and upgrade your living spaces with smart renovations that improve functionality, comfort, and long-term value.",
  },
  {
    icon: Building2,
    image: s3,
    title: "Commercial Remodeling",
    text: "We transform commercial environments to improve efficiency, aesthetics, and customer experience while minimizing disruption.",
  },
  {
    icon: LayoutGrid,
    image: s4,
    title: "Custom Deck Construction",
    text: "Expand your outdoor space with custom-built decks designed for relaxation, entertainment, and lasting performance.",
  },
  {
    icon: PlusSquare,
    image: s5,
    title: "Home Additions",
    text: "Seamlessly expand your home with new rooms and extensions that blend perfectly with your existing structure.",
  },
  {
    icon: ChefHat,
    image: s6,
    title: "Kitchen Remodeling",
    text: "We create modern kitchens that combine beauty, efficiency, and high-quality finishes for everyday living.",
  },
  {
    icon: Bath,
    image: s7,
    title: "Bathroom Remodeling",
    text: "Transform your bathroom into a relaxing and functional space with premium materials and thoughtful design.",
  },
  {
    icon: Star,
    image: s8,
    title: "Custom Home Building",
    text: "Every home we build reflects your vision — designed and constructed to match your needs and preferences.",
  },
  {
    icon: Flame,
    image: s9,
    title: "Outdoor Kitchens",
    text: "Enjoy outdoor cooking with durable, stylish kitchen spaces designed for entertaining and convenience.",
  },
  {
    icon: Trees,
    image: s10,
    title: "Outdoor Living Spaces",
    text: "Create inviting outdoor environments that enhance comfort, relaxation, and social experiences.",
  },
  {
    icon: Layers,
    image: s11,
    title: "Flooring Installations",
    text: "Professional flooring solutions that provide strong foundations and beautiful interior finishes.",
  },
  {
    icon: Square,
    image: s12,
    title: "Patio Installations",
    text: "Custom patios designed for durability and elegance, perfect for outdoor enjoyment year-round.",
  },
];

export default function ServicesDescription() {
  return (
    <section className="services-desc-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="services-desc-header">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            Expert construction solutions designed to enhance your space and
            improve everyday living.
          </p>
        </div>

        {/* Cards */}
        <div className="services-desc-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className="service-desc-card">
                <div className="service-desc-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="service-desc-content">
                  <Icon size={28} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="services-desc-cta">
          <p>
            We offer even more services including painting, site surveys,
            structural planning, and specialized construction solutions.
          </p>

          <a href="/contact" className="services-desc-btn">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
