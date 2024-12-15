import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[rgba(0,102,85,0.07)] rounded-xl flex flex-col justify-between h-full">
      <p className="text-black/60 p-5">{review.comment}</p>
      <div>
        <hr />
        <div className="fl gap-3 p-5">
          <img
            src={review.image}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-medium">{review.reviewer}</h2>
            <div className="fl mt-1">
              <Star fill="#222" className="h-3 w-3" />
              <Star fill="#222" className="h-3 w-3" />
              <Star fill="#222" className="h-3 w-3" />
              <Star fill="#222" className="h-3 w-3" />
              <Star className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
