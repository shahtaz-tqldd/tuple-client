import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";
import green1 from "@/assets/images/green1.svg"
import blue1 from "@/assets/images/blue1.svg"

const FaqsSection = () => {
  return (
    <div className="relative py-20">
      <h2 className="text-center text-5xl mb-20">Frequently Asked Questions</h2>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-[800px] mx-auto relative z-10"
      >
        {faqs?.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-xl font-normal">
              {faq?.ques}
            </AccordionTrigger>
            <AccordionContent className="text-black/50 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <img src={green1} className="select-none h-full absolute top-1/2 -translate-y-1/2 bottom-0 left-0 z-0 opacity-30"/>
      <img src={blue1} className="select-none h-full absolute top-1/2  -translate-y-1/2 bottom-0 -right-40 z-0 opacity-30"/>
    </div>
  );
};

export default FaqsSection;
