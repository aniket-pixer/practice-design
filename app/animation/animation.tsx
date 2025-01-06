import AnimationSection from "@/components/animationSection";
import InvoicePdf from "@/components/InvoicePdf";
import React from "react";
import { AnimationPdfWrapper } from "./style";

function Animation() {
  return (
    <AnimationPdfWrapper>
      <AnimationSection />
      <InvoicePdf />
    </AnimationPdfWrapper>
  );
}

export default Animation;
