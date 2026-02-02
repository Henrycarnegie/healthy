"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   placeholder?: string;
}

const Input = ({ placeholder, className = "", ...props }: InputProps) => {
   return (
      <input
         {...props}
         placeholder={placeholder}
         className={`flex-1 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${className}`}
      />
   );
};

export default Input;
