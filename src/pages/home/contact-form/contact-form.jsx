import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT_HERO } from "@/pages/contact-us/data";

gsap.registerPlugin(ScrollTrigger);

const ContactFormSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const formElementsRef = useRef([]);
  const leftElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content (heading and text)
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate form elements (stagger effect)
      gsap.fromTo(
        formElementsRef.current,
        { opacity: 0, y: 20 },
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
      gsap.fromTo(
        leftElementsRef.current,
        { opacity: 0, x: 20 },
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
    <div ref={sectionRef} className="py-20">
      <div
        className="content grid lg:grid-cols-2 grid-cols-1 lg:rounded-3xl px-0"
        style={{
          backgroundImage: `url(${CONTACT_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div ref={leftContentRef} className="lg:m-16 m-3">
          <h2
            ref={(el) => leftElementsRef.current.push(el)}
            className="text-5xl lg:mt-0 mt-4"
          >
            Get In Touch
          </h2>
          <p
            ref={(el) => leftElementsRef.current.push(el)}
            className="mt-4 text-black/60 lg:text-base text-sm max-w-[90%]"
          >
            We are available Monday to Friday from 9:00 AM to 6:00 PM and on
            Saturdays from 10:00 AM to 4:00 PM. For urgent inquiries, you can
            reach out to us via email or phone, and our team will respond
            promptly.
          </p>

          <div className="lg:mt-12 mt-6 fl lg:flex-row flex-col lg:gap-10 gap-4 lg:items-center items-start text-black/60">
            <div
              ref={(el) => leftElementsRef.current.push(el)}
              className="fl gap-2"
            >
              <Phone className="h-4 w-4" />
              <a href="tel:+99023456(810)">+99023456(810)</a>
            </div>

            <div
              ref={(el) => leftElementsRef.current.push(el)}
              className="fl gap-2"
            >
              <Mail className="h-4 w-4" />
              <a href="mailto:+99023456(810)">support@tuplespot.com</a>
            </div>
          </div>
        </div>
        <div className="lg:m-8 lg:ml-auto m-4">
          <div className="bg-white max-w-[540px] mx-auto lg:py-16 py-6 lg:px-12 px-6 rounded-2xl">
            <h2 className="text-3xl">Contact Us</h2>
            <p className="text-black/70 mt-2">
              We strive to accommodate our clients’ schedules to make the
              process convenient.
            </p>

            <form className="mt-10 flex flex-col gap-5">
              <div
                className="relative"
                ref={(el) => formElementsRef.current.push(el)}
              >
                <input
                  className="py-3 pr-4 pl-11 rounded-lg outline-none w-full bg-transparent border border-black/40 "
                  placeholder="Your Name"
                />
                <User className="h-4 w-4 text-black absolute top-1/2 -translate-y-1/2 left-4" />
              </div>
              <div
                className="relative"
                ref={(el) => formElementsRef.current.push(el)}
              >
                <input
                  className="py-3 pr-4 pl-11 rounded-lg outline-none w-full bg-transparent border border-black/40 "
                  placeholder="Your Email"
                />
                <Mail className="h-4 w-4 text-black absolute top-1/2 -translate-y-1/2 left-4" />
              </div>
              <textarea
                placeholder="Write your Message"
                className="p-3 min-h-40 rounded-lg outline-none w-full bg-transparent border border-black/40"
                ref={(el) => formElementsRef.current.push(el)}
              />
              <Button
                className="rounded-full h-[56px]"
                ref={(el) => formElementsRef.current.push(el)}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
