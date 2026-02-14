/* images */
import p1 from "../assets/project-1.png";
import p2 from "../assets/project-2.png";
// import p3 from "../assets/project-3.png";
import p4 from "../assets/project-4.png";
import p5 from "../assets/project-5.png";
import p6 from "../assets/project-6.png";
import p7 from "../assets/project-7.png";
import p8 from "../assets/project-8.png";
// import p9 from "../assets/project-9.png";
import p10 from "../assets/project-10.png";

const projects = [p1, p2, p4, p5, p6, p7, p8, p10];

export default function RecentProjects() {
  return (
    <section className="projects-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="projects-header">
          <h2 className="section-heading">Recent Projects</h2>
          <p className="section-subheading">
            Explore some of our recently completed construction and remodeling
            work.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((img, index) => (
            <div key={index} className="project-card">
              <img src={img} alt={`Project ${index + 1}`} />
              <div className="project-overlay">
                <a href="portfolio">
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="projects-cta">
          <a href="/portfolio" className="projects-btn">
            Show More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
