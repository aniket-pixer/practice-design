import React from "react";
import {
  ProgressWrapper,
  ProgressBar,
  ProgressCircle,
  CircleTrack,
  CircleFill,
  ProgressText,
} from "./style";

interface ProgressProps {
  percent: number;
  type?: "line" | "circle";
  strokeWidth?: number;
  showText?: boolean;
  size?: number;
}

const ProgressSection: React.FC<ProgressProps> = ({
  percent,
  type = "line",
  strokeWidth = 8,
  showText = true,
  size = 100,
}) => {
  const validPercent = Math.min(100, Math.max(0, percent));

  if (type === "circle") {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (validPercent / 100) * circumference;

    return (
      <ProgressWrapper>
        <ProgressCircle size={size}>
          <CircleTrack
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <CircleFill
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          {showText && <ProgressText size={size}>{validPercent}%</ProgressText>}
        </ProgressCircle>
      </ProgressWrapper>
    );
  }

  return (
    <ProgressWrapper>
      <ProgressBar strokeWidth={strokeWidth}>
        <div
          className="progress-inner"
          style={{ width: `${validPercent}%` }}
        ></div>
      </ProgressBar>
      {showText && <ProgressText>{validPercent}%</ProgressText>}
    </ProgressWrapper>
  );
};

export default ProgressSection;
