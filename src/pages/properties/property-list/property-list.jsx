import React, { useEffect, useRef, useState } from "react";
import PropertyCard from "../property-card";
import Dropdown from "@/components/dropdown/dropdown";
import TablePaginate from "@/components/table/pagination";

import { X } from "lucide-react";
import {
  BEDROOM_SIZE_OPTIONS,
  CITY_OPTIONS,
  PROEPRTY_PAGE_SIZE,
} from "../data";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { properties } from "../demo-data";
gsap.registerPlugin(ScrollTrigger);

export default function PropertyList() {
  const [page, setPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState({});
  const [selectedBedroomSize, setSelectedBedroomSize] = useState({});

  // CARD EFFECTS
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
    <div className="content">
      <div className="mt-5 mb-8 flbx">
        <p className="text-black/60">
          {PROEPRTY_PAGE_SIZE * (page - 1) + 1}-{PROEPRTY_PAGE_SIZE * page} of
          45 Properties Found
        </p>
        <div className="fl gap-3">
          {(selectedBedroomSize?.value || selectedCity?.value) && (
            <button
              onClick={() => {
                setSelectedCity({});
                setSelectedBedroomSize({});
              }}
              className="py-1.5 pr-4 pl-3 rounded-full text-sm border fl gap-2 text-red-500"
            >
              <X className="h-3 w-3" />
              Reset
            </button>
          )}
          <Dropdown
            options={BEDROOM_SIZE_OPTIONS}
            setSelectedOption={setSelectedBedroomSize}
          >
            {selectedBedroomSize.label || "Bedroom Size"}
          </Dropdown>
          <Dropdown options={CITY_OPTIONS} setSelectedOption={setSelectedCity}>
            {selectedCity.label || "Select City"}
          </Dropdown>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
        {properties?.map((property, index) => (
          <PropertyCard
            key={index}
            property={property}
            refCallback={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
      <TablePaginate
        total={45}
        pageSize={PROEPRTY_PAGE_SIZE}
        setCurrentPage={setPage}
        currentPage={page}
        className="mt-16 mb-20"
      />
    </div>
  );
}
