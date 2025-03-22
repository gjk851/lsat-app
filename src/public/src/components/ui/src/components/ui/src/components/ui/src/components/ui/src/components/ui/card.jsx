import React from "react";

export const Card = ({ className, ...props }) => {
  return <div className={className} {...props} />;
};

export const CardHeader = ({ className, ...props }) => {
  return <div className={className || "p-6 pb-2"} {...props} />;
};

export const CardTitle = ({ className, ...props }) => {
  return <h3 className={className || "text-xl font-bold"} {...props} />;
};

export const CardDescription = ({ className, ...props }) => {
  return <p className={className || "text-sm text-gray-500"} {...props} />;
};

export const CardContent = ({ className, ...props }) => {
  return <div className={className || "p-6"} {...props} />;
};

export const CardFooter = ({ className, ...props }) => {
  return <div className={className || "p-6 pt-2"} {...props} />;
};

export default Card;
