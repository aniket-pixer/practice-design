import React, { useState, useRef, useEffect } from "react";
import { TooltipContent, TooltipTrigger, TooltipWrapper } from "./style";

type TooltipProps = {
  title: string | React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click";
  children: React.ReactNode;
};

export const CustomTooltip: React.FC<TooltipProps> = ({
  title,
  placement = "top",
  trigger = "hover",
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [currentPlacement, setCurrentPlacement] = useState(placement);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const calculatePlacement = () => {
    if (!tooltipRef.current || !triggerRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (placement === "top" && triggerRect.top < tooltipRect.height) {
      setCurrentPlacement("bottom");
    } else if (
      placement === "bottom" &&
      triggerRect.bottom + tooltipRect.height > viewportHeight
    ) {
      setCurrentPlacement("top");
    } else if (placement === "left" && triggerRect.left < tooltipRect.width) {
      setCurrentPlacement("right");
    } else if (
      placement === "right" &&
      triggerRect.right + tooltipRect.width > viewportWidth
    ) {
      setCurrentPlacement("left");
    } else {
      setCurrentPlacement(placement);
    }
  };

  const showTooltip = () => {
    if (trigger === "click") {
      setVisible((prev) => !prev);
    }
  };

  const hideTooltip = () => {
    if (trigger === "click") {
      setVisible(false);
    }
  };

  const handleHover = () => {
    if (trigger === "hover") {
      setVisible(true);
      calculatePlacement();
    }
  };

  const handleLeave = () => {
    if (trigger === "hover") {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      calculatePlacement();
    }
  }, [visible]);

  return (
    <TooltipWrapper>
      <TooltipTrigger
        ref={triggerRef}
        onClick={showTooltip}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onBlur={hideTooltip}
        onFocus={showTooltip}
      >
        {children}
      </TooltipTrigger>
      {visible && (
        <TooltipContent ref={tooltipRef} placement={currentPlacement}>
          {title}
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};
