import { useEffect, useState } from "react";
import "../styles.css";

export const ProgressBar = ({ value = 0, onComplete }) => {
  const [persent, setPersent] = useState(value);

  useEffect(() => {
    setPersent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) onComplete();
  }, [value]);

  return (
    <div className="progressbar">
      <span style={{ color: persent > 49 ? "white" : "black" }}>
        {persent}%
      </span>
      <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={persent}
        style={{ width: `${persent}%` }}
      />
    </div>
  );
};
