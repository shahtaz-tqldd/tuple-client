import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Status = ({ variant = "default", size = "default", className }) => {
  return (
    <div className={`fl gap-2 ${className}`}>
      <span
        className={cn(
          statusVariants({
            variant,
            size,
          })
        )}
      ></span>
      {variant}
    </div>
  );
};

export default Status;

const statusVariants = cva("block", {
  variants: {
    variant: {
      default: "bg-primary",
      "Hold": "bg-yellow-500",
      "Live": "bg-green-500",
      "Archived": "bg-red-300",
      "Pending": "bg-yellow-500",
      "Failed": "bg-red-500",
      "Completed": "bg-green-500",
      "Reviewed": "bg-green-500",
    },
    size: {
      default: "h-2 w-2 rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
