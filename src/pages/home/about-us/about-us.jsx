import React, { useRef, useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PlayCircle } from "lucide-react";
import video from "@/assets/images/video.mp4";
import blue1 from "@/assets/images/blue1.svg";
import yellow1 from "@/assets/images/yellow1.svg";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const aboutTitleRefs = useRef([]);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 400px",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      aboutTitleRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      }
    );

    tl.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.5"
    );

    return () => {
      if (ScrollTrigger.getById("aboutUsAnimation")) {
        ScrollTrigger.getById("aboutUsAnimation").kill();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="content lg:py-20 py-12 relative">
      <img
        src={blue1}
        alt=""
        className="absolute -top-40 -right-[500px] z-0 opacity-30 lg:block hidden"
      />
      <img
        src={yellow1}
        alt=""
        className="absolute -top-40 -left-[500px] z-0 opacity-40 lg:block hidden"
      />
      <div className="relative z-10">
        <h4 className="text-center tracking-[2px] text-black/40 uppercase">
          About Us
        </h4>
        <h2
          ref={(el) => (aboutTitleRefs.current[0] = el)}
          className="mt-6 lg:text-5xl text-3xl lg:font-normal font-bold text-center text-black/80"
        >
          Discover the <span className="font-semibold text-black">Difference</span> with us
        </h2>
        <h2
          ref={(el) => (aboutTitleRefs.current[1] = el)}
          className="mt-6 lg:text-xl text-sm text-center text-black/30"
        >
          Every property has a <span className="text-primary">story,</span> and
          every client<span className="text-primary"> matters.</span>
        </h2>

        <div ref={videoRef} className="mt-10 flex justify-center">
          <VideoPlayer videoSrc={video} />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

export const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full max-w-[880px] mx-auto rounded-3xl overflow-hidden mt-4">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full"
        controls={isPlaying}
      >
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer hover:bg-black/20 tr"
        >
          <PlayCircle
            strokeWidth={0.5}
            className="text-white w-20 h-20 hover:scale-110 tr"
          />
        </div>
      )}
    </div>
  );
};
