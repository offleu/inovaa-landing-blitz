import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inovaaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-white shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105",
        secondary: "bg-gradient-secondary text-white shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105",
        yellow: "bg-yellow-brand text-white shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110",
        outline: "border border-purple-brand text-purple-brand bg-transparent hover:bg-purple-brand hover:text-white transition-all duration-300",
      },
      size: {
        default: "h-12 px-8 py-3 text-base font-semibold",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-12 py-4 text-lg font-bold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface InovaaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof inovaaButtonVariants> {
  asChild?: boolean
}

const InovaaButton = React.forwardRef<HTMLButtonElement, InovaaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(inovaaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
InovaaButton.displayName = "InovaaButton"

export { InovaaButton, inovaaButtonVariants }