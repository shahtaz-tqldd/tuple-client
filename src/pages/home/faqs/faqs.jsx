import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";
import green1 from "@/assets/images/green1.svg";
import blue1 from "@/assets/images/blue1.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FaqsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const accordionItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate accordion items
      gsap.fromTo(
        accordionItemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animations
  }, []);

  return (
    <div ref={sectionRef} className="relative py-20 px-3">
      <h2 ref={headingRef} className="lg:text-center lg:text-5xl text-3xl lg:font-normal font-bold lg:mb-20 mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-[800px] mx-auto relative z-10"
      >
        {faqs?.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            ref={(el) => (accordionItemsRef.current[index] = el)}
          >
            <AccordionTrigger className="lg:text-xl lg:font-normal font-medium text-left">
              {faq?.ques}
            </AccordionTrigger>
            <AccordionContent className="text-black/50 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <img
        src={green1}
        className="select-none h-full absolute top-1/2 -translate-y-1/2 bottom-0 left-0 z-0 opacity-30"
      />
      <img
        src={blue1}
        className="select-none h-full absolute top-1/2 -translate-y-1/2 bottom-0 -right-40 z-0 opacity-30"
      />
    </div>
  );
};

export default FaqsSection;
