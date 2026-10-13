import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { profile } from "../data/portfolio";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${profile.email}`} data-cursor="disable">
                {profile.email}
              </a>
            </p>
            <h4>Location</h4>
            <p>{profile.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>
                {profile.firstName} {profile.lastName}
              </span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
            <p className="contact-credit">
              Design based on{" "}
              <a
                href="https://github.com/MoncyDev/Portfolio-Website"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                Moncy Yohannan's portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
