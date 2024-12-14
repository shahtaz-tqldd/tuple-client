import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Bath,
  Bed,
  ChevronRight,
  CircleUser,
  SquareDashed,
} from "lucide-react";
import gsap from "gsap";
import { HERO_IMAGE, properties } from "./data";

const HeroSection = () => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  // Refs for GSAP animations
  const headingRefs = useRef([]);
  const buttonRef = useRef(null);
  const propertyListRef = useRef(null);
  const propertyDetailRef = useRef(null);
  const propertyImagesRefs = useRef([]);

  // Refs for card content animations
  const propertyNameRef = useRef(null);
  const propertyAddressRef = useRef(null);
  const propertyPriceRef = useRef(null);
  const propertyDetailsRefs = useRef([]);

  useEffect(() => {
    // Create a timeline for staggered animations
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate heading with correct stagger
    tl.fromTo(
      headingRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      }
    );

    // Animate button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
      "-=0.5"
    );

    // Animate property list
    tl.fromTo(
      propertyImagesRefs.current,
      { opacity: 0, x: -20, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.3"
    );

    // Animate property details
    tl.fromTo(
      propertyDetailRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    );
    tl.fromTo(
      propertyNameRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );

    tl.fromTo(
      propertyAddressRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );

    tl.fromTo(
      propertyPriceRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );

    tl.fromTo(
      propertyDetailsRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      }
    );
  }, []);

  const handlePropertySelect = (property) => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    setSelectedProperty(property);

    tl.fromTo(
      propertyNameRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4 }
    );

    tl.fromTo(
      propertyAddressRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );

    tl.fromTo(
      propertyPriceRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.2"
    );

    tl.fromTo(
      propertyDetailsRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      }
    );
  };

  return (
    <div
      className="min-h-screen pt-20 relative z-10 center"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="content w-full">
        <div>
          <div className="lg:text-7xl md:text-4xl text-3xl max-w-[800px] lg:leading-[80px] text-black/60 font-medium">
            <h1 ref={(el) => (headingRefs.current[0] = el)}>Find the Most</h1>
            <h1
              ref={(el) => (headingRefs.current[1] = el)}
              className="text-primary"
            >
              Appropiate Residence
            </h1>
            <h1 ref={(el) => (headingRefs.current[2] = el)}>
              For your <span className="text-white">Needs</span>
            </h1>
          </div>
        </div>
        <div className="mt-20 fl gap-2">
          <Button ref={buttonRef}>
            Find Property
            <ChevronRight className="ml-1.5 mt-0.5 -mr-2 h-5 w-5" />
          </Button>
          <Button className="lg:hidden flex bg-white text-primary py-4 pl-5 pr-6 rounded-full fl gap-2">
            <CircleUser className="h-4 w-4" />
            <h2>Hire an Agent</h2>
          </Button>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex lg:flex-row flex-col gap-4 mt-12 max-w-[500px]">
            <div ref={propertyListRef}>
              <div className="flex lg:flex-col flex-row gap-2">
                {properties?.map((property, index) => (
                  <div
                    key={index}
                    onClick={() => handlePropertySelect(property)}
                  >
                    <img
                      ref={(el) => (propertyImagesRefs.current[index] = el)}
                      src={property.image}
                      alt={property.name}
                      className={`h-20 w-20 object-cover rounded-xl border border-[3px] cursor-pointer ${
                        selectedProperty.name === property.name
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div
                ref={propertyDetailRef}
                className="bg-white/50 backdrop-blur-lg rounded-2xl p-5"
              >
                <h2 ref={propertyNameRef} className="text-xl">
                  {selectedProperty?.name}
                </h2>
                <p ref={propertyAddressRef} className="text-sm text-black/40">
                  {selectedProperty?.address}
                </p>
                <p
                  ref={propertyPriceRef}
                  className="mt-5 text-xl text-primary font-bold"
                >
                  ${selectedProperty?.price}
                </p>
                <div className="mt-3 flex gap-5">
                  <div
                    ref={(el) => (propertyDetailsRefs.current[0] = el)}
                    className="fl gap-2 text-sm text-black/50"
                  >
                    <Bed className="h-4 w-4" />
                    <span>{selectedProperty?.beds} bedrooms</span>
                  </div>
                  <div
                    ref={(el) => (propertyDetailsRefs.current[1] = el)}
                    className="fl gap-2 text-sm text-black/50"
                  >
                    <Bath className="h-4 w-4" />
                    <span>{selectedProperty?.bath} baths</span>
                  </div>
                  <div
                    ref={(el) => (propertyDetailsRefs.current[2] = el)}
                    className="fl gap-2 text-sm text-black/50"
                  >
                    <SquareDashed className="h-4 w-4" />
                    <span>{selectedProperty?.area} sq. ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="lg:flex hidden bg-white text-primary py-4 pl-5 pr-6 rounded-full fl gap-2">
            <CircleUser className="h-4 w-4" />
            <h2>Hire an Agent</h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
