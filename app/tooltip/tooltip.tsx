import { CustomTooltip } from "@/components/caustomTooltip";
import React from "react";
import { CustomTooltipMain, TooltipButton } from "./style";

const Tooltip = () => {
  return (
    <CustomTooltipMain>
      <CustomTooltip title="This is a tooltip" placement="top">
        <TooltipButton>Top</TooltipButton>
      </CustomTooltip>
      <CustomTooltip title="This is a tooltip" placement="bottom">
        <TooltipButton>Bottom</TooltipButton>
      </CustomTooltip>
      <CustomTooltip title="This is a tooltip" placement="left">
        <TooltipButton>Left</TooltipButton>
      </CustomTooltip>
      <CustomTooltip title="This is a tooltip" placement="right">
        <TooltipButton>Right</TooltipButton>
      </CustomTooltip>

      <CustomTooltip
        title="Click tooltip example"
        placement="bottom"
        trigger="click"
      >
        <TooltipButton>Click me</TooltipButton>
      </CustomTooltip>
    </CustomTooltipMain>
  );
};

export default Tooltip;
