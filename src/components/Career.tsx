import "./styles/Career.css";
import { career } from "../data/portfolio";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {career.map((item) => (
            <div className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.organization}</h5>
                  {item.meta && <h6>{item.meta}</h6>}
                </div>
                <h3>{item.period}</h3>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
