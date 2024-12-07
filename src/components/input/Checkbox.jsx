import React from "react";

const Checkbox = ({ name, children, value, setValue }) => {
  return (
    <div className="fl w-fit">
      <input
        checked={value}
        onChange={() => setValue(!value)}
        type="checkbox"
        id={name}
        className="peer cursor-pointer h-[18px] w-[18px] rounded border border-primary bg-bg50 checked:bg-primary checked:border-primary checked:text-white appearance-none inline-block relative"
      />
      <label
        htmlFor={name}
        className="pl-3 text-sm text-nowrap cursor-pointer select-none text-primary"
      >
        {children}
      </label>
      <svg
        className="absolute hidden peer-checked:block w-4 h-4 text-white pointer-events-none translate-x-[1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
