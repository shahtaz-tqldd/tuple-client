import React from "react";

const TextField = ({
  type = "text",
  placeholder,
  label,
  className,
  register,
  name,
  icon,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-black/50 text-sm ml-1">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`border border-black/5 py-2.5 pr-3 rounded-full bg-bg50 w-full outline-none focus:border-green-300 tr ${
            icon ? "pl-11" : "pl-4"
          }`}
        />

        {icon && (
          <span className="absolute top-1/2 -translate-y-1/2 left-3">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField;
