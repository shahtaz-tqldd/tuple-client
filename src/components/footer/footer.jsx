import React from "react";
import { Link } from "react-router-dom";

import { footerNavLinks } from "./data";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 pt-16 pb-10">
      <div className="content">
        <div className="flex flex-wrap lg:gap-x-12 gap-x-0 lg:gap-y-auto gap-y-8">
          <div className="lg:flex-1 w-full">
            <Link to="/" className="text-2xl text-primary uppercase font-oxan">
              Tuple <span className="font-black">Spot</span>
            </Link>
            <p className="mt-4 text-black/50 ">
              At Tuple Spot, we pride ourselves on integrity, innovation, and
              exceptional customer service. Let us help you find not just a
              property but a place to call home.
            </p>
            <p className="mt-10 text-start text-xs text-black/50 hidden md:block">
              &copy; {new Date().getFullYear()} All Rights Reserved to tuplespot
              inc.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:max-w-[220px] lg:w-full w-1/2  text-black/60">
            <h2 className="text-black/30 uppercase mb-4">Nav Links</h2>
            {footerNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-sm hover:text-black tr w-fit"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 lg:max-w-[220px] lg:w-full w-1/2 text-black/60">
            <h2 className="text-black/30 uppercase mb-4">Quick Links</h2>
            <Link
              to="/privact"
              className="text-sm text-nowrap hover:text-black tr w-fit"
            >
              Privacy Policy
            </Link>
            <Link
              to="/privact"
              className="text-sm text-nowrap hover:text-black tr w-fit"
            >
              Terms and Conditions
            </Link>
          </div>
          <div className="lg:max-w-[300px] w-full">
            <h2 className="text-black/30 uppercase mb-4">Connect With Us</h2>
            <div className="text-black/60 text-sm flex flex-col gap-2">
              <div className="fl gap-2">
                <Phone className="h-4 w-4" />

                <a href="tel:+99023456(810)">+99023456(810)</a>
              </div>

              <div className="fl gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:+99023456(810)">support@tuplespot.com</a>
              </div>
            </div>
            <div className="fl gap-5 mt-10 text-black/40">
              <a
                href="https://www.instagram.com"
                target="__blank"
                className="hover:text-black tr"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="__blank"
                className="hover:text-black tr"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="__blank"
                className="hover:text-black tr"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-black/50 block md:hidden">
          &copy; {new Date().getFullYear()} All Rights Reserved to tuplespot
          inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
