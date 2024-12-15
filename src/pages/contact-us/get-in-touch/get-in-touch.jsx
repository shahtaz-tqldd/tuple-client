import { Button } from "@/components/ui/button";
import { Mail, Phone, User } from "lucide-react";
import { RiMessengerFill, RiWhatsappLine } from "react-icons/ri";
import React from "react";
import Map from "./map";
const map =
  "https://storage.googleapis.com/support-forums-api/attachment/thread-7914086-8314489827343524670.png";

const GetInTouch = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="max-w-[700px] w-full ml-auto h-full flex flex-col justify-center lg:pr-20 py-12">
        <h2 className="text-5xl">Get in touch</h2>
        <p className="mt-4 text-black/60">
          Let TupleSpot be your guide to finding not just a property but a place
          to call home or grow your business. Together, we’ll turn your vision
          into reality.
        </p>

        <div className="mt-6 fl lg:flex-row flex-col lg:gap-10 gap-4 lg:items-center items-start text-black/60">
          <div
            // ref={(el) => leftElementsRef.current.push(el)}
            className="fl gap-2"
          >
            <Phone className="h-4 w-4" />
            <a href="tel:+99023456(810)">+99023456(810)</a>
          </div>

          <div
            // ref={(el) => leftElementsRef.current.push(el)}
            className="fl gap-2"
          >
            <Mail className="h-4 w-4" />
            <a href="mailto:+99023456(810)">support@tuplespot.com</a>
          </div>
        </div>

        <form className="mt-14 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <div
              className="relative"
              // ref={(el) => formElementsRef.current.push(el)}
            >
              <input
                className="py-3 pr-4 pl-11 rounded-lg outline-none w-full border border-black/10 bg-gray-50 "
                placeholder="First Name"
              />
              <User className="h-4 w-4 text-black absolute top-1/2 -translate-y-1/2 left-4" />
            </div>
            <div
              className="relative"
              // ref={(el) => formElementsRef.current.push(el)}
            >
              <input
                className="py-3 pr-4 pl-11 rounded-lg outline-none w-full border border-black/10 bg-gray-50 "
                placeholder="Last Name"
              />
              <User className="h-4 w-4 text-black absolute top-1/2 -translate-y-1/2 left-4" />
            </div>
          </div>
          <div
            className="relative"
            // ref={(el) => formElementsRef.current.push(el)}
          >
            <input
              className="py-3 pr-4 pl-11 rounded-lg outline-none w-full border border-black/10 bg-gray-50 "
              placeholder="Your Email"
            />
            <Mail className="h-4 w-4 text-black absolute top-1/2 -translate-y-1/2 left-4" />
          </div>
          <div
            className="relative"
            // ref={(el) => formElementsRef.current.push(el)}
          >
            <input
              className="py-3 pr-4 pl-11 rounded-lg outline-none w-full border border-black/10 bg-gray-50 "
              placeholder="Your Phone Number"
            />
            <Phone className="h-4 w-4 text-black absolute top-1/2 -translate-y-1/2 left-4" />
          </div>
          <textarea
            placeholder="Write your Message"
            className="p-3 min-h-40 rounded-lg outline-none w-full border border-black/10 bg-gray-50"
            // ref={(el) => formElementsRef.current.push(el)}
          />
          <div className="grid grid-cols-2 gap-5 items-center mt-6">
            <button className="h-[56px] flex justify-center items-center rounded-full gap-2 border">
              <RiWhatsappLine className="h-5 w-5" />
              Live Chat
            </button>

            <Button
              className="rounded-full h-[56px]"
              // ref={(el) => formElementsRef.current.push(el)}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default GetInTouch;
