import React from "react";
import HeroSection from "./hero/hero";
import AboutUsSection from "./about-us/about-us";
import PropertiesSection from "./properties/properties";
import WhyChooseUsSection from "./why-choose-us/why-choose-us";
import BlogsSection from "./blogs/blogs";
import FaqsSection from "./faqs/faqs";
import ContactFormSection from "./contact-form/contact-form";
import Testimonial from "../about/testimonial/testimonial";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <PropertiesSection />
      <WhyChooseUsSection />
      <BlogsSection />
      <FaqsSection />
      <ContactFormSection />
      <Testimonial />
    </>
  );
};

export default Homepage;
