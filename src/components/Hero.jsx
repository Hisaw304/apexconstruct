import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";
import hero5 from "../assets/hero-5.png";

const images = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  return (
    <section className="hero-wrapper">
      {/* Background Slider */}
      <div className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl space-y-6">
          <h1 className="animate-reveal space-y-2">
            <span className="hero-heading-line">Building Spaces That</span>
            <span className="hero-heading-line">Stand the Test of Time</span>
          </h1>

          <p className="hero-subtext animate-reveal delay-1">
            Precision construction, thoughtful design, and quality craftsmanship
            — from remodels to custom homes.
          </p>

          <div className="flex gap-4 pt-4 animate-reveal delay-2">
            <a href="#contact" className="hero-btn-primary">
              Get a Quote
            </a>
            <a href="/portfolio" className="hero-btn-secondary">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
