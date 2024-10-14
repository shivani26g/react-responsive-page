import { appstore, bill, playstore } from "../assets";
import CommonTitle from "./CommonTitle";
import "./Bill.css"; // Importing the CSS file

const Bill = () => {
  return (
    <section className="bill-section">
      <div className="bill-container">
        <div className="bill-image-container">
          <img src={bill} alt="bill" className="bill-image" />
        </div>

        <div className="bill-content">
          <CommonTitle title="Easily control your billing & invoicing" />
          <p className="bill-description">
            How much money do you leave on the table each month? Too many businesses “forget” to bill all hours worked.
            With HooBank, you can keep track of any invoices, generate them more quickly and bill any type of pricing
            structure to meet clients needs. As a bonus, you can explore new pricing models and compare their viability.
            Stop the revenue leakage and scale your business at full speed!
          </p>
          <p className="bill-subtext">Cash is king, so get it in the bank sooner!</p>
          <div className="store-links">
            <img src={appstore} alt="app store" />
            <img src={playstore} alt="play store" />
          </div>
        </div>
      </div>
      <div className="pink-gradient"></div>
    </section>
  );
};

export default Bill;
