import * as React from "react"
import { cn } from "@/lib/utils"

const GlassContainer = React.forwardRef(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-[#0a0a12] border border-[rgba(212,175,55,0.15)]",
            light: "bg-[rgba(255,255,255,0.03)] border border-[rgba(212,175,55,0.15)]",
            gradient: "bg-[rgba(255,255,255,0.03)] border border-[rgba(212,175,55,0.15)] gradient-border",
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl p-6 backdrop-blur-xl",
                    variants[variant],
                    className
                )}
                {...props}
            />
        )
    }
)
GlassContainer.displayName = "GlassContainer"

export { GlassContainer }
