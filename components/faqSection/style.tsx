import styled, { css } from "styled-components";
import { Typography } from "@/styles/typography";

// Define Props interface
interface Props {
  isOpen?: boolean;
}

// Styled FAQItem
const FAQItem = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
  }
`;

// Styled Question
const Question = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Props>`
  ${Typography.body_lg_regular}
  color: #333;
  background: rgb(255, 255, 255);
  ${(props) =>
    props.isOpen &&
    css`
      background: rgb(247, 247, 248);
    `};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Styled Answer
const Answer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Props>`
  max-height: 0;
  ${(props) =>
    props.isOpen &&
    css`
      max-height: none;
    `};

  overflow: hidden;
  padding: 0;
  ${(props) =>
    props.isOpen &&
    css`
      padding: 16px 0 0;
    `}
  ${Typography.body_lmd_regular}
  color: rgb(108, 110, 120);
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease,
    visibility 0.3s ease;
  ${(props) =>
    props.isOpen &&
    css`
      background-color: rgb(247, 247, 248);
    `};
`;

// Styled FAQSectionWrapper
const FAQSectionWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Props>`
  padding: 24px;
  border: 1px solid rgb(220, 220, 221);
  margin-bottom: 24px;
  border-radius: 16px;
  ${(props) =>
    props.isOpen &&
    css`
      background-color: rgb(247, 247, 248);
    `};
`;

// Styled FAQTitle
const FAQTitle = styled.h1`
  ${Typography.heading_large_regular};
  text-align: center;
  margin-top: 50px;
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
  max-width: 736px;
  margin: 0 auto;
`;

const PlusIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

export {
  FAQTitle,
  FAQSectionWrapper,
  Answer,
  Question,
  FAQItem,
  FAQContainer,
  FAQDescription,
  PlusIcon,
};
