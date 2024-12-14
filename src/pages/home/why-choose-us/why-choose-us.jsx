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
            start: "top 80%",
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
            start: "top 70%",
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
            start: "top 60%",
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
            start: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="my-20 relative min-h-screen bg-black overflow-hidden"
    >
      <div className="">
        <img
          ref={imageRef}
          src={FEATURE_IMG}
          alt="explaining why should you choose us"
          className="absolute h-full lg:w-[65%] w-full z-0 object-cover"
        />
        <div className="lg:bg-gradient-to-l lg:bg-transparent bg-black/50 lg:from-black lg:to-transparent absolute h-full lg:w-[40%] w-full lg:right-[35%] right-0 z-[1]"></div>
      </div>
      <div className="content min-h-screen flex lg:gap-20 relative z-10 items-center py-12">
        <div className="lg:flex-1"></div>
        <div className="lg:w-[55%] w-full">
          <h2 ref={headingRef} className="text-white/80 lg:text-5xl text-3xl">
            What sets us <span className="text-white font-semibold">Apart</span>
          </h2>
          <p ref={paragraphRef} className="text-white/80 mt-4 lg:mb-20 mb-12 lg:text-lg">
            With years of experience in the property market, we specialize in
            connecting buyers, sellers, and renters with their ideal homes and
            investments.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 lg:gap-y-16 gap-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item"
                ref={(el) => (featuresRef.current[index] = el)}
              >
                <div className="icon relative mb-4 lg:h-14 lg:w-14">
                  <feature.icon
                    strokeWidth={1}
                    className="lg:h-12 h-8 lg:w-12 w-8 text-green-300 relative z-10"
                  />
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold mb-2 text-white">
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
