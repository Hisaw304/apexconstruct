import { newsData } from "../data/newsData";

const NewsInsights = () => {
  // duplicate data for seamless infinite loop
  const loopData = [...newsData, ...newsData];

  return (
    <section className="news-section">
      {/* Header stays aligned with other components */}
      <div className="container">
        <div className="news-header">
          <h2 className="section-heading">News & Insights</h2>
          <p className="section-subheading">
            Latest updates, achievements, and company milestones
          </p>
        </div>
      </div>

      {/* Full width scrolling area */}
      <div className="news-wrapper">
        <div className="news-track">
          {loopData.map((item, i) => (
            <div className="news-item" key={i}>
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
