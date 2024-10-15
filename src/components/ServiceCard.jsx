import { BiLogoEbay, BiLogoVisa, BiLogoWix } from "react-icons/bi";
import { IoLogoDropbox, IoLogoPlaystation } from "react-icons/io";
import { TbBrandMeta, TbBrandHbo } from "react-icons/tb";
import CommonTitle from "./CommonTitle";
import CommonButton from "./CommonButton";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <section className="service-card-section">
      <div className="service-card-content">
        <div className="brands-logo">
          <BiLogoEbay className="brand-icon" />
          <TbBrandHbo className="brand-icon" />
          <BiLogoVisa className="brand-icon" />
          <TbBrandMeta className="brand-icon" />
          <BiLogoWix className="brand-icon" />
          <IoLogoDropbox className="brand-icon" />
          <IoLogoPlaystation className="brand-icon" />
        </div>

        <div className="service-info">
          <div>
            <CommonTitle title="Let's try our service now!" />
            <p className="service-description">
              Everything you need to accept card payments and grow your business anywhere on the planet. Get Started
            </p>
          </div>
          <div>
            <CommonButton btnText="get started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
