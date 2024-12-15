import React from "react";
import AboutHero from "./about-hero/about-hero";
import ShortStory from "./short-story/short-story";
import Stats from "./stats/stats";
import VideoPreview from "./video-preview/video-preview";
import Testimonial from "./testimonial/testimonial";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <ShortStory />
      <Stats />
      <VideoPreview />
      <Testimonial />
    </>
  );
};

export default AboutPage;
