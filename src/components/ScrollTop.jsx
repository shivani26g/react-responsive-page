import { useEffect, useRef } from "react";
import { BsArrowUp } from "react-icons/bs";
import "./ScrollTop.css";

const ScrollTop = () => {
  const arrow = useRef();

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 180) {
        arrow.current.classList.add("visible");
      } else {
        arrow.current.classList.remove("visible");
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-container">
      <button aria-label="arrow" className="scroll-button" onClick={scrollToTop} ref={arrow}>
        <BsArrowUp className="arrow-icon" />
      </button>
    </div>
  );
};

export default ScrollTop;
