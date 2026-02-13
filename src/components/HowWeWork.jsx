import { ClipboardCheck, PencilRuler, Hammer, CheckCircle } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Consultation",
      text: "We begin by understanding your goals, vision, and project requirements. Our team works closely with you to define scope, budget, and expectations.",
    },
    {
      icon: PencilRuler,
      title: "Planning & Design",
      text: "We develop detailed plans, layouts, and design strategies to ensure your project is functional, efficient, and visually aligned with your vision.",
    },
    {
      icon: Hammer,
      title: "Construction",
      text: "Our skilled professionals execute every phase with precision, using quality materials and proven construction methods for lasting results.",
    },
    {
      icon: CheckCircle,
      title: "Final Delivery",
      text: "We review every detail, ensure quality standards are met, and deliver a completed project that exceeds expectations.",
    },
  ];

  return (
    <section className="how-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="how-header">
          <h2 className="section-heading2">How We Work</h2>
          <p className="section-subheading2">
            Our proven process ensures every project is delivered with clarity,
            efficiency, and exceptional quality.
          </p>
        </div>

        {/* Steps */}
        <div className="how-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="how-card">
                <div className="how-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="how-icon">
                  <Icon size={32} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
