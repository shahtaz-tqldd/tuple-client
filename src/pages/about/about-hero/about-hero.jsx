import { Search } from "lucide-react";
import React from "react";
import { ABOUT_HERO } from "../data";

const AboutHero = () => {
  return (
    <div
      className="pt-20 pb-16 h-[380px]"
      style={{
        backgroundImage: `url(${ABOUT_HERO})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="content">
        <h4 className="text-center tracking-[2px] text-black/40 mt-12 uppercase">
          About Us
        </h4>
        <h2 className="text-center text-4xl font-black mt-4 uppercase tracking-[4px] font-oxan">
          {" "}
          We work with Integrity
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-6 text-xl text-black/60">
          Whether you’re searching for your first home, a luxury property, or a
          profitable investment, we are committed to helping you achieve your
          goals with confidence.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
