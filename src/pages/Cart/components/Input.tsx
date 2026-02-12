import type { InputHTMLAttributes } from "react";

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}


export function Input({ className, ...rest }: BaseInputProps) {
  return (
    <input
      className={`bg-base-input rounded p-3 text-base-text placeholder:text-base-label border border-base-button outline-none focus:border-yellow-dark ${className}`}
      {...rest}
    />
  );
}
