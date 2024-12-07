import React, { useEffect, useRef } from "react";
import { FEATURE_IMG, features } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 320px",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate heading and paragraph
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate feature items
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animations
  }, []);

  return (
    <div
      ref={sectionRef}
      className="my-20 relative h-[860px] bg-black overflow-hidden"
    >
      <div className="">
        <img
          ref={imageRef}
          src={FEATURE_IMG}
          alt="explaining why should you choose us"
          className="absolute h-full w-[65%] z-0 object-cover"
        />
        <div className="bg-gradient-to-l from-black to-transparent absolute h-full w-[40%] right-[35%] z-[1]"></div>
      </div>
      <div className="content flex gap-20 relative z-10 items-center h-full">
        <div className="flex-1"></div>
        <div className="lg:w-[55%]">
          <h2
            ref={headingRef}
            className="text-6xl text-white/80"
          >
            What set us{" "}
            <span className="text-white font-semibold">Apart</span>
          </h2>
          <p
            ref={paragraphRef}
            className="text-white/80 mt-4 mb-20 text-xl"
          >
            With years of experience in the property market, we specialize in
            connecting buyers, sellers, and renters with their ideal homes and
            investments.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item"
                ref={(el) => (featuresRef.current[index] = el)}
              >
                <div className="icon relative mb-4 h-14 w-14">
                  <feature.icon
                    strokeWidth={1}
                    className="h-12 w-12 text-green-300 relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
