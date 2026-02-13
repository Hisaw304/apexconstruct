import {
  ShieldCheck,
  HardHat,
  Users,
  HeartHandshake,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    text: "We operate with transparency, honesty, and accountability in every project. Our commitment to doing the right thing builds trust with clients, partners, and communities.",
  },
  {
    icon: HardHat,
    title: "Quality Craftsmanship",
    text: "We deliver precision-driven construction using proven methods, skilled professionals, and high-quality materials that stand the test of time.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    text: "We work closely with our clients, understanding their vision and delivering solutions that align with their goals and expectations.",
  },
  {
    icon: HeartHandshake,
    title: "Safety & Responsibility",
    text: "We prioritize safe work environments and responsible building practices that protect our people, clients, and the environment.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    text: "We constantly refine our processes, embrace innovation, and pursue excellence to improve every project we undertake.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "We believe successful projects are built on open dialogue, timely updates, and strong collaboration from start to finish.",
  },
];

export default function CoreValues() {
  return (
    <section className="core-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="core-header">
          <h2 className="section-heading core-heading">Core Values</h2>

          <p className="section-subheading core-subheading">
            The principles that guide every decision, project, and partnership
            at Apexconstruct.
          </p>
        </div>

        {/* Cards */}
        <div className="core-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div key={index} className="core-card">
                <div className="core-icon">
                  <Icon size={28} />
                </div>

                <h3 className="core-title">{value.title}</h3>

                <p className="core-text">{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
