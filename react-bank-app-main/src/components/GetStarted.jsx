import './GetStarted.css';
import { HiMiniArrowUpRight } from "react-icons/hi2";

const GetStarted = () => {
  return (
    <a
      href="#features"
      className="get-started-link"
    >
      <div className="get-started-inner">
        <p className="get-started-text">
          <span className="get-started-flex">
            get <HiMiniArrowUpRight className="get-started-icon" />
          </span>
          started
        </p>
      </div>
    </a>
  );
};

export default GetStarted;
