"use client";
import React, { useState } from "react";
import {
  FAQItem,
  FAQContainer,
  Question,
  Answer,
  FAQSectionWrapper,
  FAQTitle,
  FAQDescription,
  PlusIcon,
} from "./style";

const FAQSection = () => {
  const faqs = [
    {
      question: "How much does Teamcamp cost per user?",
      answer:
        "Teamcamp offers tiered pricing plans, so the cost depends on features and number of users.",
    },
    {
      question: "Is there a free trial available for Teamcamp?",
      answer:
        "Yes, Teamcamp typically offers a free trial to explore its functionalities.",
    },
    {
      question:
        "Do you offer any discounts for non-profit organizations or startups?",
      answer:
        "Teamcamp may have special pricing options for non-profits and startups. Contact sales for details.",
    },
    {
      question: "What happens if I outgrow my current plan?",
      answer:
        "Teamcamp allows you to easily upgrade your plan as your team or business needs evolve.",
    },
    {
      question: "Do you offer any pay-as-you-go options?",
      answer:
        "Check Teamcamp's pricing page to see if they offer any pay-as-you-go options for specific features.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Frequently asked questions</FAQTitle>
      <FAQDescription>Have questions? We’re here to help.</FAQDescription>
      {faqs.map((faq, index) => (
        <FAQSectionWrapper
          key={index}
          isOpen={openIndex === index}
          onClick={() => toggleFAQ(index)}
        >
          <FAQItem onClick={() => toggleFAQ(index)}>
            <Question isOpen={openIndex === index}>
              {faq.question} <PlusIcon isOpen={openIndex === index}>+</PlusIcon>
            </Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        </FAQSectionWrapper>
      ))}
    </FAQContainer>
  );
};

export default FAQSection;
