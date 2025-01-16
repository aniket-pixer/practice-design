import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div<{ placement: string }>`
  position: absolute;
  z-index: 1000;
  background-color: #000;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateY(0);
  transition: opacity 0.2s ease, transform 0.2s ease;

  ${({ placement }) =>
    placement === "top" &&
    `
    bottom: 100%;
    left: -60%;
    transform: translateX(-50%) translateY(-10px);
    margin-bottom: 8px;
  `}

  ${({ placement }) =>
    placement === "bottom" &&
    `
    top: 100%;
    right: -30%;
    transform: translateX(-50%) translateY(10px);
    margin-top: 8px;
  `}

  ${({ placement }) =>
    placement === "left" &&
    `
    right: 100%;
    top: -10%;
    transform: translateY(-50%) translateX(-10px);
    margin-right: 8px;
  `}

  ${({ placement }) =>
    placement === "right" &&
    `
    left: 100%;
    top: -10%;
    transform: translateY(-50%) translateX(10px);
    margin-left: 8px;
  `}
`;

const TooltipTrigger = styled.div`
  cursor: pointer;

  &:hover + ${TooltipContent}, &:focus + ${TooltipContent} {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
`;

export { TooltipWrapper, TooltipContent, TooltipTrigger };
