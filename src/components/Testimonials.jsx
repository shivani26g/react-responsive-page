import { testimonials } from "../utils";
import { RiDoubleQuotesL } from "react-icons/ri";
import CommonTitle from "./CommonTitle";
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="clients" className="testimonials-section">
      <div>
        <CommonTitle title="What People are saying about us" />
        <p className="testimonials-description">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((item) => {
            const { id, about, image, name, title } = item;
            return (
              <div key={id} className="testimonial-card">
                <RiDoubleQuotesL className="quote-icon" />
                <p className="testimonial-about">
                  {about}
                </p>
                <div className="testimonial-author">
                  <img
                    src={image}
                    alt={name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h3 className="author-name">{name}</h3>
                    <p className="author-title">{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="blue-gradient"></div> */}
      </div>
    </section>
  );
};

export default Testimonials;
