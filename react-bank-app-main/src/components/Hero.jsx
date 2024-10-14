import './Hero.css';
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <div className="hero-discount-banner">
          <img src={discount} alt="discount" />
          <p className="hero-discount-text">
            20% <span className="text-highlight">Discount For</span> 1 Month{" "}
            <span className="text-highlight">Account</span>
          </p>
        </div>

        <div className="hero-title-container">
          <h1 className="hero-title">
            The Next <br className="desktop-only" />
            <span className="text-gradient">Generation</span> <br className="desktop-only" />
            Payment <br className="desktop-only" />
            Method.
          </h1>
          <div className="get-started-button desktop-only">
            <GetStarted />
          </div>
        </div>

        <p className="hero-description">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className="hero-right">
        <img src={robot} alt="robot" className="hero-image" />
        {/* <div className="pink-gradient"></div>
        <div className="white-gradient"></div>
        <div className="blue-gradient"></div> */}

        <div className="get-started-button mobile-only">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
