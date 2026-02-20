import { useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How long does a typical remodeling project take?",
    a: "Project timelines depend on the scope and complexity of the work. Kitchen and bathroom remodels typically take 3–8 weeks, while full home renovations may take longer. We provide a detailed schedule before starting.",
  },
  {
    q: "Do you provide free project estimates?",
    a: "Yes. Apexconstruct provides detailed consultations and transparent estimates so you understand the full cost before work begins.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We operate with full licensing, insurance coverage, and strict compliance with industry standards and safety regulations.",
  },
  {
    q: "Can you help with design and planning?",
    a: "Yes. Our team supports planning, design guidance, material selection, and project execution from start to finish.",
  },
  {
    q: "Do you handle permits and approvals?",
    a: "We assist with required permits and approvals where necessary, ensuring your project meets all local building requirements.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve residential and commercial clients across multiple regions. Contact us to confirm availability in your location.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="faq-header">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about working with Apexconstruct.
          </p>
        </div>

        <div className="faq-grid">
          {/* LEFT — Accordion */}
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-question" onClick={() => toggle(i)}>
                    <span>{item.q}</span>

                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div className="faq-answer">{isOpen && <p>{item.a}</p>}</div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — Support Card */}
          <div className="faq-support">
            <div className="support-card">
              <div className="support-icon">
                <MessageCircle size={42} />
              </div>

              <h3>Still have questions?</h3>

              <p>
                Our team is ready to help you plan your project, answer
                technical questions, and provide expert guidance every step of
                the way.
              </p>

              <div className="support-actions">
                <a href="#contact" className="support-btn primary">
                  Contact Us
                </a>

                <div className="support-links">
                  <span>
                    <Mail size={16} /> leroysmith@apexconstruct.com
                  </span>
                  <span>
                    <Phone size={16} /> +1 856 273 8910
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
