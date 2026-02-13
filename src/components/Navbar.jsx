import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const portfolioItems = [
  { name: "Kitchen Remodeling", path: "/#kitchen" },
  { name: "Basement Remodeling", path: "/#basement" },
  { name: "Deck Construction", path: "/#deck" },
  { name: "General Construction", path: "/#general" },
  { name: "New Home Construction", path: "/#new-home" },
  // "Outdoor Living Spaces",
  // "Flooring Installations",
  // "Patio Installations",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  // const navigate = useNavigate();
  return (
    <nav className="bg-[var(--surface)] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="company-name text-[var(--primary)]">
          Apexconstruct
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>

          {/* Portfolio Dropdown */}
          <li className="relative">
            <button
              onClick={() => setPortfolioOpen(!portfolioOpen)}
              className="nav-link flex items-center gap-1"
            >
              Portfolio
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  portfolioOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {portfolioOpen && (
              <ul className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-md py-3">
                {portfolioItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-5 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface)]"
                      onClick={() => setPortfolioOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-between w-7 h-5"
        >
          <span
            className={`line ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`line ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`line ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[var(--primary)] text-white">
          <div className="p-6">
            <div className="flex justify-between items-center mb-10">
              <span className="company-name text-white">Apexconstruct</span>

              <button
                onClick={() => setMenuOpen(false)}
                className="flex flex-col justify-between w-7 h-5"
              >
                <span className="line rotate-45 translate-y-2 bg-white" />
                <span className="line opacity-0 bg-white" />
                <span className="line -rotate-45 -translate-y-2 bg-white" />
              </button>
            </div>

            <ul className="space-y-6 text-left">
              <li>
                <a href="/" className="mobile-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="mobile-link">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="mobile-link">
                  Services
                </a>
              </li>

              {/* Mobile Portfolio */}
              <li>
                <button
                  onClick={() => setPortfolioOpen(!portfolioOpen)}
                  className="mobile-link w-full text-left flex items-center justify-between"
                >
                  Portfolio
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      portfolioOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {portfolioOpen && (
                  <ul className="mt-4 ml-4 space-y-3">
                    {portfolioItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm opacity-90 hover:underline decoration-[var(--secondary)]"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a href="/contact" className="mobile-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
