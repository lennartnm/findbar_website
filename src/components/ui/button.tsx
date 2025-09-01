import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border shadow-sm",
  {
    variants: {
      variant: {
        // filled default; on hover: transparent bg, green text, keep border visible
        default:
          "bg-[#1b4d2b] text-white border-[#1b4d2b] hover:bg-transparent hover:text-[#1b4d2b] hover:shadow-none",

        // outline stays transparent; on hover keep it transparent (no fill), text already green
        outline:
          "bg-transparent text-[#1b4d2b] border-[#1b4d2b] hover:bg-transparent hover:shadow-none",

        ghost: "bg-transparent hover:bg-slate-100"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm", // sehr geringe Abrundung
        md: "rounded"     // falls du etwas mehr willst
      }
    },
    defaultVariants: { variant: "default", size: "default", radius: "sm" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
