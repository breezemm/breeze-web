import * as React from "react";

import { cn } from "./utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-9 w-full appearance-none border-b border-zinc-800 bg-transparent px-3 py-2 pr-10 text-sm placeholder-zinc-800 shadow-none transition-colors file:text-sm file:font-medium focus:outline-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
