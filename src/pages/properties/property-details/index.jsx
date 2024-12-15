import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "../demo-data";
import {
  Armchair,
  Bath,
  BedSingle,
  Car,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Pin,
  Square,
  Star,
  User,
} from "lucide-react";
import Map from "@/components/map/map";
import useTitle from "@/hooks/useTitle";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";

const PropertyDetailsPage = () => {
  const { name } = useParams();
  const property = properties.find(
    (property) =>
      property?.name?.toLocaleLowerCase().split(" ").join("-") === name
  );

  useTitle(property?.name);
  const lists = [
    {
      icon: BedSingle,
      title: "Bedroom",
      value: property.beds,
    },
    {
      icon: Bath,
      title: "Bath",
      value: property.bath,
    },
    {
      icon: Square,
      title: "sq. ft",
      value: property.area,
    },
    {
      icon: Car,
      title: "Parking",
      value: true,
    },
    {
      icon: Armchair,
      title: "Furniture",
      value: true,
    },
    {
      icon: Lightbulb,
      title: "Electricity",
      value: true,
    },
  ];

  const images = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1664301231899-5a7b1a621238?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1661963763623-a328a487487e?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1661963636251-3217d6d09d4f?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="pt-28 mb-20">
      <div className="content grid grid-cols-2 gap-10">
        <div>
          <img
            src={property?.image}
            className="w-full h-[580px] rounded-2xl object-cover"
          />
          <div className="mt-6 grid grid-cols-4 gap-5">
            {images?.map((img, index) => (
              <img
                src={img.img}
                className="h-36 object-cover rounded-xl w-full"
              />
            ))}
          </div>

          <div className="mt-16 border rounded-xl p-10">
            <h2 className="text-4xl">Request for a Tour</h2>
            <p className="text-black/60 mt-4">
              We are available Monday to Friday from 9:00 AM to 6:00 PM and on
              Saturdays from 10:00 AM to 4:00 PM
            </p>

            <form className="mt-10 flex flex-col gap-5">
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
                <button className="h-[52px] flex justify-center items-center rounded-full gap-2 border">
                  <RiWhatsappLine className="h-5 w-5" />
                  Live Chat
                </button>

                <Button
                  className="rounded-full h-[52px]"
                  // ref={(el) => formElementsRef.current.push(el)}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          <h2 className="text-5xl font-semibold">{property.name}</h2>
          <div className="mt-4 fl gap-12">
            <div className="fl gap-2">
              <Home className="text-black/40 h-4 w-4" />
              Residence
            </div>
            <div className="fl gap-2">
              <Star className="text-yellow-500 h-4 w-4" />
              4.5 Review
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Overview</h3>
            <div className="grid grid-cols-3 mt-5 rounded-xl shadow-[0_25px_40px_15px_rgba(0,102,85,0.08)]">
              {lists?.map((item, index) => (
                <div
                  key={index}
                  className={`fl gap-2 border p-4 ${
                    index === 0
                      ? "rounded-tl-xl border-b-0 border-r-0"
                      : index === 1
                      ? "border-b-0 border-r-0"
                      : index === 2
                      ? "border-b-0 rounded-tr-xl"
                      : index === 3
                      ? "rounded-bl-xl border-r-0"
                      : index === 4
                      ? "border-r-0"
                      : "rounded-br-xl"
                  }`}
                >
                  <item.icon className="h-4 w-4 text-black/40" />
                  {item.value} {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Description</h3>
            <div className="flex flex-col gap-4 text-black/60 mt-3">
              <p>
                Our approach goes beyond transactions; it’s about building
                lasting relationships. We pride ourselves on providing tailored
                solutions, leveraging cutting-edge technology, and offering
                unparalleled customer support at every stage of your real estate
                journey. From comprehensive property searches to seamless
                closing processes, we ensure a hassle-free experience that puts
                your goals first. At TupleSpot, your satisfaction is our
                ultimate success.
              </p>
              <p>
                As a forward-thinking real estate agency, we also focus on
                staying ahead of industry trends. Whether you’re a first-time
                buyer, a seasoned investor, or looking for your next rental, our
                team is equipped with the knowledge and resources to deliver
                exceptional results. Let TupleSpot be your guide to finding not
                just a property but a place to call home or grow your business.
                Together, we’ll turn your vision into reality.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Address</h3>
            <p className="mt-3 text-lg fl gap-3">
              <MapPin className="text-black/40 h-5 w-5" />
              {property.address}
            </p>
            <div className="h-80 mt-5 rounded-2xl overflow-hidden">
              <Map location={{ lat: 25.8888031, lng: -80.2620437 }} zoom={17} />
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-semibold">Home Tour</h2>
              <div className="mt-5 rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="372"
                  src="https://www.youtube.com/embed/vM5p3b1bvA0"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
