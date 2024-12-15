import React from "react";
import { CONTACT_HERO } from "../data";

const ContactHero = () => {
  return (
    <div
      className="pt-20 pb-16 h-[380px]"
      style={{
        backgroundImage: `url(${CONTACT_HERO})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="content">
        <h4 className="text-center tracking-[2px] text-black/40 mt-12 uppercase">
          Contact us
        </h4>
        <h2 className="text-center text-4xl font-black mt-4 uppercase tracking-[4px] font-oxan">
          {" "}
          we are just one click away
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

export default ContactHero;
