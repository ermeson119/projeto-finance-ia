import React, { forwardRef } from "react";

// Interface para as props do Input
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Componente Input
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border rounded px-3 py-2 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
