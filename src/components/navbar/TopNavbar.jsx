import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User } from "lucide-react";
import gsap from "gsap";

import IconButton from "../buttons/icon-button";
import { navLinks } from "./data";

const TopNavbar = () => {
  const { pathname } = useLocation();
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const actionButtonsRef = useRef([]);

  const isActive = (link) => {
    if (link === "/") return link === pathname;
    return pathname.includes(link);
  };

  const handleSearchShow = () => {
    console.log("You wanna search?");
  };

  useEffect(() => {
    const ntl = gsap.timeline({ defaults: { ease: "power2.out" } });

    ntl.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );

    // Staggered navigation links animation
    ntl.fromTo(
      navLinksRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        stagger: 0.1,
      },
      "-=0.4" // Slight overlap with previous animation
    );

    ntl.fromTo(
      actionButtonsRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
  }, []);

  return (
    <nav className="absolute left-0 right-0 z-20">
      <div className="flbx py-5 content">
        <div className="fl gap-20">
          <Link
            ref={logoRef}
            className="text-2xl text-primary uppercase font-oxan"
          >
            Tuple <span className="font-bold">Spot</span>
          </Link>

          <div className="fl gap-10 lg:flex hidden">
            {navLinks?.map(({ title, link }, index) => (
              <Link
                ref={(el) => (navLinksRef.current[index] = el)}
                key={index}
                to={link}
                className={`font-medium ${
                  isActive(link) ? "text-black" : "text-black/60 "
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="fl gap-3">
          <IconButton
            ref={(el) => (actionButtonsRef.current[0] = el)}
            onClick={handleSearchShow}
            icon={Search}
            className="bg-white/40 backdrop-blur-sm text-white"
          />
          <IconButton
            ref={(el) => (actionButtonsRef.current[1] = el)}
            onClick={handleSearchShow}
            icon={User}
            className="bg-white/40 backdrop-blur-sm text-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
