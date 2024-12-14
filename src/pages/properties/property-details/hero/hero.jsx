import { Search } from "lucide-react";
import React from "react";
const hero =
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const PropertiesHero = () => {
  return (
    <div
      className=" pt-20 pb-10"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        
      }}
    >
      <div className="content">
        <h2 className="text-center text-5xl font-semibold mt-12 "> Discover Your Next Home</h2>
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
            <Search className="h-4 w-4 absolute top-1/2 -translate-y-1/2 left-4"/>
            <button className="py-2 px-4 rounded-full bg-primary text-white absolute top-1/2 -translate-y-1/2 right-1.5">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesHero;
