import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  useEffect(() => {
    if (percent == 100) {
      onComplete();
    }
  }, [percent]);

  return (
    <div className="progress">
      <span style={{ color: `${percent < 49 ? "black" : "white"}` }}>
        {percent}%
      </span>
      <div
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
        className="progress-bar"
      ></div>
    </div>
  );
};

export default ProgressBar;
