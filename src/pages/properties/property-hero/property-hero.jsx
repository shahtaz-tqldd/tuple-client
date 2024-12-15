import { Search } from "lucide-react";
import React from "react";
import { PROPERTY_HERO } from "../data";

const PropertiesHero = () => {
  return (
    <div
      className=" pt-20 pb-10"
      style={{
        backgroundImage: `url(${PROPERTY_HERO})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="content">
        <h2 className="text-center text-4xl font-bold mt-12 uppercase tracking-[4px] font-oxan">
          {" "}
          Find Your Next Home
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-6 text-xl text-black/60">
          Whether you’re searching for your first home, a luxury property, or a
          profitable investment, we are committed to helping you achieve your
          goals with confidence.
        </p>

        <div className="mt-16 center">
          <div className="relative">
            <input
              className="py-3 pr-5 pl-10  lg:min-w-[460px] rounded-full bg-white outline-none"
              placeholder="Search Location"
            />
            <Search className="h-4 w-4 absolute top-1/2 -translate-y-1/2 left-4" />
            <button className="py-2 px-4 rounded-full bg-primary text-white absolute top-1/2 -translate-y-1/2 right-1.5">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesHero;
