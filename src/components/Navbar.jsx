import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const portfolioItems = [
  { name: "Kitchen Remodeling", path: "portfolio/#kitchen" },
  { name: "Basement Remodeling", path: "portfolio/#basement" },
  { name: "Deck Construction", path: "portfolio/#deck" },
  { name: "General Construction", path: "portfolio/#general" },
  { name: "New Home Construction", path: "portfolio/#new-home" },
  // "Outdoor Living Spaces",
  // "Flooring Installations",
  // "Patio Installations",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const navigate = useNavigate();
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

          <li className="relative">
            <div className="flex items-center gap-1">
              {/* TEXT → NAVIGATE */}
              <button
                onClick={() => navigate("/portfolio")}
                className="nav-link"
              >
                Portfolio
              </button>

              {/* ARROW → TOGGLE DROPDOWN */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⭐ prevents navigation
                  setPortfolioOpen(!portfolioOpen);
                }}
                className="p-1"
              >
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
            </div>

            {portfolioOpen && (
              <ul className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-md py-3">
                {portfolioItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      className="block px-5 py-2 text-sm hover:bg-[var(--surface)]"
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
              <span className="company-name text-white cursor-pointer">
                Apexconstruct
              </span>

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
                <div className="flex items-center justify-between">
                  {/* TEXT → NAVIGATE */}
                  <button
                    onClick={() => {
                      navigate("/portfolio");
                      setMenuOpen(false);
                      setMobilePortfolioOpen(false);
                    }}
                    className="mobile-link cursor-pointer"
                  >
                    Portfolio
                  </button>

                  {/* ARROW → TOGGLE */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobilePortfolioOpen(!mobilePortfolioOpen);
                    }}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobilePortfolioOpen ? "rotate-180" : ""
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
                </div>

                {mobilePortfolioOpen && (
                  <ul className="mt-4 ml-4 space-y-3">
                    {portfolioItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className="text-sm opacity-90 hover:underline"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobilePortfolioOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
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
