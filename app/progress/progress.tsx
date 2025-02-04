import React, { useState } from "react";
import { ButtonWrapper, StyledButton } from "./style";
import ProgressSection from "@/components/progressSection";

const Progress = () => {
  const [progress, setProgress] = useState(50);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div>
      <h3>Linear Progress</h3>
      <ProgressSection percent={progress} />

      <h3>Circular Progress</h3>
      <ProgressSection
        percent={progress}
        type="circle"
        size={120}
        strokeWidth={10}
      />

      <ButtonWrapper>
        <StyledButton onClick={decreaseProgress}>- Decrease</StyledButton>
        <StyledButton onClick={increaseProgress}>+ Increase</StyledButton>
      </ButtonWrapper>
    </div>
  );
};

export default Progress;
