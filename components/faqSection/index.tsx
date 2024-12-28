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
  // State to track the currently active accordion index (null if none is active)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Ref to store references to all accordion content div elements
  const contentRefs = useRef<HTMLDivElement[]>([]);

  // Toggles the accordion's active state for a given index
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Retrieves the scroll height of the content for dynamic height calculation
  const getContentHeight = (index: number) => {
    if (contentRefs.current[index]) {
      return contentRefs.current[index].scrollHeight;
    }
    return 0;
  };

  // Array containing FAQ items with title and content
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor pretium viverra suspendisse potenti. Suspendisse potenti. Fusce ac nulla a ligula venenatis blandit." +
        " (Repeating long content for testing dynamic height adjustment.)",
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
    // Handle content resize dynamically using ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (activeIndex !== null && contentRefs.current[activeIndex]) {
        // Trigger a re-render to update the content height
        setActiveIndex((prev) => prev);
      }
    });

    // Observe each content element for resizing
    contentRefs.current.forEach((ref) => {
      if (ref) resizeObserver.observe(ref);
    });

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <FAQContainer>
      {/* FAQ Section Title */}
      <FAQTitle>Frequently asked questions</FAQTitle>
      {/* FAQ Section Description */}
      <FAQDescription>Have questions? We’re here to help.</FAQDescription>
      {/* Accordion Wrapper */}
      <Accordion>
        {/* Loop through FAQ items and render each accordion item */}
        {faqItems.map((item, index) => (
          <AccordionItem key={index} onClick={() => toggleAccordion(index)}>
            {/* Accordion Button for each item */}
            <AccordionButton
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              {/* Accordion Title */}
              <span>{item.title}</span>
              {/* Accordion Icon indicating open/close state */}
              <Icon aria-expanded={activeIndex === index} />
            </AccordionButton>
            {/* Accordion Content that expands or collapses */}
            <AccordionContent
              ref={(el) => {
                if (el) contentRefs.current[index] = el; // Store reference to each content element
              }}
              height={activeIndex === index ? getContentHeight(index) : 0} // Dynamic height calculation
            >
              {/* Content/Answer for each FAQ item */}
              <Answer>{item.content}</Answer>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FAQContainer>
  );
};

export default FAQSection;
