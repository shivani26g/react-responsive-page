import { FaStar } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";
import "./Business.css"; // Importing the CSS file

const BusinessCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <div className="business-card">
      <div className="business-card-icon">
        <span className="business-card-icon-inner">{icon}</span>
      </div>
      <div className="business-card-content">
        <h3 className="business-card-title">{title}</h3>
        <p className="business-card-desc">{desc}</p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className="business-section">
      <div className="business-container">
        <div className="business-content">
          <CommonTitle title="You do the business, we'll handle the money." />
          <p className="business-description">
            With the right credit card, you can improve your financial life by building credit, earning rewards and
            saving money. But with hundreds of credit cards on the market.
          </p>
          <CommonButton btnText="get started" />
        </div>

        <div className="business-cards">
          <BusinessCard
            icon={<FaStar />}
            title="Rewards"
            desc="The best credit cards offer some tantalizing combinations of promotions and prizes"
          />
          <BusinessCard
            icon={<MdOutlineSecurity />}
            title="100% Secured"
            desc="We take proactive steps make sure your information and transactions are secure."
          />
          <BusinessCard
            icon={<GiBanknote />}
            title="Balance Transfer"
            desc="A balance transfer credit card can save you a lot of money in interest charges."
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
