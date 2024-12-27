import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  AccordionItem,
  Answer,
  FAQContainer,
  FAQDescription,
  FAQTitle,
  Icon,
} from "./style";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getContentHeight = (index: number) => {
    if (contentRefs.current[index]) {
      return contentRefs.current[index].scrollHeight;
    }
    return 0;
  };

  const faqItems = [
    {
      title:
        "Can I create custom invoices with my company branding in Teamcamp?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Donec vel orci ut velit pulvinar scelerisque. Quisque ac tristique nisl.",
    },
    {
      title: "Does Teamcamp offer online payment processing for invoices?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      title:
        "Can I send automated payment reminders to clients through Teamcamp?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit.",
    },
    {
      title: "Does Teamcamp offer online payment processing for invoices?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      title: "Does Teamcamp offer online payment processing for invoices?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  useEffect(() => {
    // Optional: Handle content resize dynamically
    const resizeObserver = new ResizeObserver(() => {
      if (activeIndex !== null && contentRefs.current[activeIndex]) {
        // Force re-render with updated height
        setActiveIndex((prev) => prev);
      }
    });

    contentRefs.current.forEach((ref) => {
      if (ref) resizeObserver.observe(ref);
    });

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <FAQContainer>
      <FAQTitle>Frequently asked questions</FAQTitle>
      <FAQDescription>Have questions? We’re here to help.</FAQDescription>
      <Accordion>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} onClick={() => toggleAccordion(index)}>
            <AccordionButton
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.title}</span>
              <Icon aria-expanded={activeIndex === index} />
            </AccordionButton>
            <AccordionContent
              ref={(el) => {
                if (el) contentRefs.current[index] = el;
              }}
              height={activeIndex === index ? getContentHeight(index) : 0}
            >
              <Answer>{item.content}</Answer>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FAQContainer>
  );
};

export default FAQSection;
