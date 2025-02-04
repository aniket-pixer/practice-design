import styled from "styled-components";

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ProgressBar = styled.div<{ strokeWidth: number }>`
  width: 100%;
  height: ${(props) => props.strokeWidth}px;
  background: #f3f3f3;
  border-radius: ${(props) => props.strokeWidth / 2}px;
  overflow: hidden;
  position: relative;

  .progress-inner {
    height: 100%;
    background: #1890ff;
    transition: width 0.3s ease-in-out;
  }
`;

export const ProgressCircle = styled.svg<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: rotate(-90deg);
`;

export const CircleTrack = styled.circle`
  fill: none;
  stroke: #f3f3f3;
`;

export const CircleFill = styled.circle`
  fill: none;
  stroke: #1890ff;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease-in-out;
`;

export const ProgressText = styled.div<{ size?: number }>`
  font-size: ${(props) => (props.size ? props.size / 5 : 14)}px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
