import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, User } from "lucide-react";

// import hero from "@/assets/images/hero.jpg";
const hero =
  // "https://img.freepik.com/premium-photo/modern-home-decoration-mock-up-furniture-interior-design-minimal-living-room-dark-green-wall-texture-background-3d-rendering_221619-939.jpg";
  "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg";

const ContactFormSection = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content flex items-center justify-center h-full">
        <div className="w-[500px] p-9 rounded-3xl bg-white/20  backdrop-blur-2xl text-white shadow-[0_50px_60px_-15px_rgba(0,102,85,0.3)]">
          <h2 className="text-4xl">Contact Us</h2>
          <p className="text-white/70 mt-2">
            Write to us your query We will Contact to you shortly
          </p>

          <form className="mt-10 flex flex-col gap-5">
            <div className="relative">
              <input
                className="py-3 pr-4 pl-11 rounded-lg outline-none w-full bg-transparent border border-white/40 placeholder-green-100/75"
                placeholder="Your Name"
              />
              <User className="h-4 w-4 text-white absolute top-1/2 -translate-y-1/2 left-4" />
            </div>
            <div className="relative">
              <input
                className="py-3 pr-4 pl-11 rounded-lg outline-none w-full bg-transparent border border-white/40 placeholder-green-100/75"
                placeholder="Your Email"
              />
              <Mail className="h-4 w-4 text-white absolute top-1/2 -translate-y-1/2 left-4" />
            </div>
            <textarea
              placeholder="Write your Message"
              className="p-3 min-h-40 rounded-lg outline-none w-full bg-transparent border border-white/40 placeholder-green-100/75"
            />
            <Button className="rounded-lg h-[52px]">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
