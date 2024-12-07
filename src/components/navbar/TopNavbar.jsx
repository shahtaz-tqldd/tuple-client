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
    return link === pathname;
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
          <Link ref={logoRef} className="text-2xl text-primary uppercase font-oxan">
            Tuple <span className="font-black">Spot</span>
          </Link>

          <div className="fl gap-10">
            {navLinks?.map(({ title, link }, index) => (
              <Link
                ref={(el) => (navLinksRef.current[index] = el)}
                key={index}
                to={link}
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
          />
          <IconButton
            ref={(el) => (actionButtonsRef.current[1] = el)}
            onClick={handleSearchShow}
            icon={User}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;