import "./Footer.css";
import { footerLinks } from "../utils";
import { SiGithub, SiLinkedin, SiUpwork, SiFreelancer } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const SocialMedia = ({ icon, name, link }) => {
  return (
    <a href={link} className="social-icon">
      <span className="social-media-icon">{icon}</span>
      <span className="social-name">{name}</span>
    </a>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer-container">
      <div className="footer-top">
        <div className="footer-description">
          <h2 className="footer-title">Naseem.</h2>
          <p className="footer-text">A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="footer-links-container">
          {footerLinks.map((item, index) => (
            <div key={index} className="footer-links">
              <h3 className="footer-link-title">{item.title}</h3>
              <ul className="footer-link-list">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.link} target="_blank" className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">Copyright Ⓒ {date} Naseem Khan. All Rights Reserved.</p>
        <div className="social-media-icons">
          <SocialMedia icon={<SiGithub />} name="github" link="https://github.com/NaseemKhan005/" />
          <SocialMedia
            icon={<SiLinkedin />}
            name="linkedin"
            link="https://www.linkedin.com/in/naseem-khan-275275258/"
          />
          <SocialMedia
            icon={<TbBrandFiverr />}
            name="fiverr"
            link="https://www.fiverr.com/naseemsafay?up_rollout=true"
          />
          <SocialMedia
            icon={<SiUpwork />}
            name="upWork"
            link="https://www.upwork.com/freelancers/~01a320b86f9044dd91"
          />
          <SocialMedia icon={<SiFreelancer />} name="freelancer" link="https://www.freelancer.com/u/naseemsaffy" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
