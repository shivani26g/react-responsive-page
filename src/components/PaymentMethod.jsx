import "./PaymentMethod.css";
import { card } from "../assets";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";
import { FaStar } from "react-icons/fa";

const Steps = ({ title }) => {
  return (
    <p className="steps-text">
      <span>
        <FaStar className="steps-icon" />
      </span>
      <span>{title}</span>
    </p>
  );
};

const PaymentMethod = () => {
  return (
    <section id="product" className="payment-method-container">
      <div className="payment-method-content">
        <div className="payment-method-info">
          <CommonTitle title="Find a better card deal in few easy steps." />
          <div className="steps-container">
            <Steps title="Choose the carding type that suits your needs" />
            <Steps title="Don't double entry, interconnect to your accounting system" />
            <Steps title="Speed up month-end closing with a rigorous invoicing process" />
          </div>
          <CommonButton btnText="get started" />
        </div>

        <div className="payment-method-image">
          <img src={card} alt="card payment method" className="image" />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
