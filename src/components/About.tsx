import "./styles/About.css";
import { about } from "../data/portfolio";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{about}</p>
      </div>
    </div>
  );
};

export default About;
