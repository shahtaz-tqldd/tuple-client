import React from "react";
import { Link } from "react-router-dom";

import { FooterLogo } from "../logo/nav-logo";

import { footerNavLinks } from "./data";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-6">
      <div className="content flex gap-12">
        <div>
          <Link to="/" className="text-2xl text-primary uppercase font-oxan">
            Tuple <span className="font-black">Spot</span>
          </Link>
          <p className="mt-4 text-black/50">
            At Tuple Spot, we pride ourselves on integrity, innovation, and
            exceptional customer service. Let us help you find not just a
            property but a place to call home.
          </p>
        </div>
        <div className="flex flex-col gap-2 max-w-[220px] w-full">
          {footerNavLinks.map((link, index) => (
            <Link key={index} to={link.link} className="text-sm">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 max-w-[220px] w-full">
          <Link to="/privact" className="text-sm text-nowrap">
            Privacy Policy
          </Link>
          <Link to="/privact" className="text-sm text-nowrap">
            Terms and Conditions
          </Link>
        </div>
        <div className="max-w-[300px] w-full">
          <h2>Connect With Us</h2>
          <p className="mt-2 text-black/50">Social Links</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
