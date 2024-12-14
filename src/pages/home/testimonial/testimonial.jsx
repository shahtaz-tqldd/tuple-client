import React, { useRef } from "react";
import { testimonials } from "../data";
import ReviewCard from "./review-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <section className="py-20 properties-section">
      <div className="content">
        <div className="flex justify-between lg:flex-row flex-col gap-4">
          <h2 className="lg:text-5xl text-3xl lg:font-normal font-bold">
            Testimonial
          </h2>
          <p className="max-w-[760px] text-black/50">
            Ensuring every client receives unparalleled guidance through every
            step of the process. Whether you’re searching for your first home, a
            luxury property, or a profitable investment, we are committed to
            helping you achieve your goals with confidence.
          </p>
        </div>

        <Carousel
          className="lg:mt-16 mt-12"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {testimonials?.map((review, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 select-none"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-5 lg:mt-16 mt-12"></div> */}
      </div>
    </section>
  );
};

export default Testimonial;
