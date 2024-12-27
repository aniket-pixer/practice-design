import styled from "styled-components";
import { Typography } from "@/styles/typography";

// Styled Components
const FAQTitle = styled.h1`
  ${Typography.heading_large_regular};
  text-align: center;
  margin-top: 50px;
  &:hover {
    color: black;
  }
`;

// Styled FAQDescription
const FAQDescription = styled.p`
  ${Typography.heading_lg_regular}
  text-align: center;
  margin-top: 20px;
  color: rgb(108, 110, 120);
  margin-bottom: 7vh;
`;

const FAQContainer = styled.div`
  margin: 0 auto;
  max-width: 736px;
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AccordionItem = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
  padding: 24px;
`;

const AccordionButton = styled.button<{ "aria-expanded": boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  font-size: 1.15rem;
  font-weight: 400;
  color: ${({ "aria-expanded": expanded }) => (expanded ? "black" : "#7288a2")};
  cursor: pointer;
  text-align: left;
  &:hover {
    color: black;
  }
`;

const Icon = styled.span<{ "aria-expanded": boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  transform: rotate(
    ${({ "aria-expanded": expanded }) => (expanded ? "45deg" : "0deg")}
  );
  transition: transform 300ms ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: currentColor;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background: currentColor;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AccordionContent = styled.div<{ height: number }>`
  max-height: ${({ height }) => height}px;
  opacity: ${({ height }) => (height ? 1 : 0)};
  overflow: hidden;
  transition: max-height 300ms ease, opacity 300ms ease;
`;

const Answer = styled.div`
  ${Typography.body_lmd_regular}
  color: rgb(108, 110, 120);
  padding-top: 16px;
`;

export {
  FAQTitle,
  FAQDescription,
  FAQContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  Icon,
  AccordionContent,
  Answer,
};
