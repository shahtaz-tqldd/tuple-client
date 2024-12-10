import React, { forwardRef } from "react";
import { Bath, Bed, SquareDashed } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyCard = forwardRef(({ property, refCallback }, ref) => {
  return (
    <Link
      ref={(el) => {
        refCallback(el);
        if (ref) ref.current = el;
      }}
      to={`/properties/${property?.name?.toLowerCase().split(" ").join("-")}`}
      className="group rounded-3xl overflow-hidden shadow-[0_35px_60px_-5px_rgba(0,102,85,0.1)] hover:shadow-[0_50px_60px_-15px_rgba(0,102,85,0.13)]"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={property?.image}
          alt={property.name}
          className="h-full w-full object-cover group-hover:scale-[1.025] tr"
        />
      </div>
      <div className="p-5 bg-white group-hover:bg-green-50 tr">
        <h2 className="text-xl font-medium">{property.name}</h2>
        <p className="text-black/40 mt-2">{property?.address}</p>

        <p className="mt-5 text-2xl text-primary font-bold">
          ${property?.price}
          <span className="text-sm text-black/40 font-normal">/month</span>
        </p>

        <div className="mt-3 flex gap-5">
          <div className="fl gap-2 text-sm text-black/50">
            <Bed className="h-4 w-4" />
            <span>{property?.beds} bedrooms</span>
          </div>
          <div className="fl gap-2 text-sm text-black/50">
            <Bath className="h-4 w-4" />
            <span>{property?.bath} baths</span>
          </div>
          <div className="fl gap-2 text-sm text-black/50">
            <SquareDashed className="h-4 w-4" />
            <span>{property?.area} sq. ft</span>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default PropertyCard;
