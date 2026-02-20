import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="footer-brand">Apexconstruct</h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Building quality homes and spaces with precision, trust, and
              craftsmanship. From remodels to custom builds, we bring visions to
              life.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="footer-social">
                <Facebook size={18} />
              </a>
              <a href="#" className="footer-social">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer-social">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-title">Our services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Kitchen Remodeling</a>
              </li>
              <li>
                <a href="#">Home Additions</a>
              </li>
              <li>
                <a href="#">Bathroom Remodeling</a>
              </li>
              <li>
                <a href="#">Custom Home Building</a>
              </li>
              <li>
                <a href="#">Outdoor Kitchens</a>
              </li>
              <li>
                <a href="#">Outdoor Living Spaces</a>
              </li>
              <li>
                <a href="#">Flooring Installations</a>
              </li>
              <li>
                <a href="#">Patio Installations</a>
              </li>
              <li>
                <a href="#">Survey</a>
              </li>
              <li>
                <a href="#">House Painting</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get construction tips, updates, and project
              inspiration.
            </p>

            <form className="footer-newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer-input"
              />
              <button type="submit" className="footer-btn">
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={16} /> <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} /> <span>leroysmith@apexconstruct.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />{" "}
                <span>1450 Hudson New York, NY 10001 United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Apexconstruct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
