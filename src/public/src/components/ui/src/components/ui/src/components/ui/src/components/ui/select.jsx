import React, { useState, useRef, useEffect } from "react";

export const Select = ({ children, value, onValueChange, ...props }) => {
  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            value,
            onValueChange,
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({ children, value, onValueChange, className, ...props }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children}
      </button>
      {open && React.Children.map(props.children, (child) => {
        if (child.type === SelectContent) {
          return React.cloneElement(child, {
            value,
            onValueChange: (value) => {
              onValueChange(value);
              setOpen(false);
            },
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectValue = ({ placeholder, children }) => {
  return <span>{children || placeholder}</span>;
};

export const SelectContent = ({ children, value, onValueChange, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {React.Children.map(children, (child) => {
        if (child.type === SelectItem) {
          return React.cloneElement(child, {
            selected: child.props.value === value,
            onSelect: () => onValueChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectItem = ({ children, value, className, selected, onSelect, ...props }) => {
  return (
    <div
      className={className}
      data-value={value}
      onClick={onSelect}
      role="option"
      aria-selected={selected}
      {...props}
    >
      {children}
    </div>
  );
};

export default Select;
