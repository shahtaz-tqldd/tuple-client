import React, { useEffect, useRef } from "react";
import { properties } from "./data";
import PropertyCard from "@/pages/properties/property-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PropertiesSection = () => {
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
    <section className="py-20 properties-section">
      <div className="content">
        <div className="flex justify-between lg:flex-row flex-col gap-4">
          <h2 className="lg:text-5xl text-3xl lg:font-normal font-bold">Featured Properties</h2>
          <p className="max-w-[760px] text-black/50">
            Ensuring every client receives unparalleled guidance through every
            step of the process. Whether you’re searching for your first home, a
            luxury property, or a profitable investment, we are committed to
            helping you achieve your goals with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 lg:mt-16 mt-12">
          {properties?.map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              refCallback={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
      <Link to='/properties' className="py-4 px-7 rounded-full hover:bg-black tr center w-fit mx-auto mt-20 bg-primary text-white">Explore More Properties</Link>
    </section>
  );
};

export default PropertiesSection;
