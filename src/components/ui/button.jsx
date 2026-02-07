import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#050508] font-semibold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:scale-[1.02]",
                outline:
                    "border border-[rgba(212,175,55,0.3)] bg-transparent text-white hover:bg-[rgba(212,175,55,0.1)] hover:border-[#D4AF37]",
                ghost:
                    "text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-[#0a0a12]",
                secondary:
                    "bg-[#3B82F6] text-white hover:bg-[#2563EB]",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 py-2 text-xs",
                lg: "h-12 px-8 py-3 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
