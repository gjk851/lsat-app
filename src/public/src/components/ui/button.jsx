import React from "react";

export const Button = ({ children, className, variant, size, ...props }) => {
  return (
    <button 
      className={className} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
