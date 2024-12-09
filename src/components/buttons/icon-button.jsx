import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const IconButton = React.forwardRef(({ className, icon: Icon, ...props }, ref) => {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    
    // Hover animation
    const hoverEnter = () => {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.2,
        ease: "power1.out"
      });
    };
    
    const hoverLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: "power1.out"
      });
    };
    
    // Click animation
    const handleClick = () => {
      gsap.to(button, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      });
    };
    
    // Add event listeners
    button.addEventListener('mouseenter', hoverEnter);
    button.addEventListener('mouseleave', hoverLeave);
    button.addEventListener('click', handleClick);
    
    // Cleanup event listeners
    return () => {
      button.removeEventListener('mouseenter', hoverEnter);
      button.removeEventListener('mouseleave', hoverLeave);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button
      ref={(el) => {
        buttonRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={`h-10 w-10 rounded-full center border border-white/30 origin-center ${className}`}
      {...props}
    >
      <Icon className="h-4" />
    </button>
  );
});

export default IconButton;