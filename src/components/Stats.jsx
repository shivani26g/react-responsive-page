import React from "react";
import "./Stats.css";

const Stats = ({ number, title }) => {
  return (
    <div className="stats-container">
      <h2 className="stats-header">
        <span className="stats-number">{number}+</span>
        <span className="stats-title">{title}</span>
      </h2>
    </div>
  );
};

export default Stats;
