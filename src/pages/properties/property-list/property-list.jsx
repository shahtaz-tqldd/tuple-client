import React, { useEffect, useRef } from "react";
import PropertyCard from "../property-card";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { properties } from "../data";

gsap.registerPlugin(ScrollTrigger);

const PropertyList = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".properties-section",
          start: "top 299px",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="content grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 lg:mt-16 mt-12 mb-20">
      {properties?.map((property, index) => (
        <PropertyCard
          key={index}
          property={property}
          refCallback={(el) => (cardsRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
