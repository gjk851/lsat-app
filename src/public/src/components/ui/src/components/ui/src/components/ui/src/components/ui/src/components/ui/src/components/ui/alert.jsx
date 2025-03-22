import React from "react";

export const Alert = ({ className, variant, ...props }) => {
  const baseClass = "p-4 rounded-lg";
  let variantClass = "";
  
  if (variant === "destructive") {
    variantClass = "bg-red-100 text-red-800 border border-red-200";
  } else if (variant === "success") {
    variantClass = "bg-green-100 text-green-800 border border-green-200";
  } else {
    variantClass = "bg-blue-100 text-blue-800 border border-blue-200";
  }
  
  return <div className={`${baseClass} ${variantClass} ${className || ""}`} {...props} />;
};

export const AlertTitle = ({ className, ...props }) => {
  return <h5 className={`font-medium ${className || ""}`} {...props} />;
};

export const AlertDescription = ({ className, ...props }) => {
  return <div className={`mt-2 ${className || ""}`} {...props} />;
};

export default Alert;
