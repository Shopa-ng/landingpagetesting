"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FocusInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const FocusInput = ({ className = "", ...props }: FocusInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        {...props}
        className={`outline-none border rounded-md border-[#d3d3d3] w-full p-2 mt-3 placeholder:text-sm transition-colors duration-300 ${
          isFocused ? "border-transparent" : ""
        } ${className}`}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-green-500 rounded-b-md"
        initial={{ width: "0%" }}
        animate={{ width: isFocused ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

interface FocusTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const FocusTextArea = ({
  className = "",
  ...props
}: FocusTextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <textarea
        {...props}
        className={`outline-none border rounded-md border-[#d3d3d3] w-full p-2 mt-3 placeholder:text-sm transition-colors duration-300 ${
          isFocused ? "border-transparent" : ""
        } ${className}`}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
      />
      <motion.div
        className="absolute bottom-[6px] left-0 h-[2px] bg-green-500 rounded-b-md"
        initial={{ width: "0%" }}
        animate={{ width: isFocused ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};
