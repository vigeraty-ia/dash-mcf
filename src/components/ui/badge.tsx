import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:     "border-transparent bg-[#C8FF00] text-white",
        secondary:   "border-transparent bg-[#141414] text-[#888888]",
        destructive: "border-transparent bg-[#D45820] text-white",
        outline:     "text-[#F0F0F0] border-[#222222]",
        success:     "bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30",
        warning:     "bg-[#C8900A]/20 text-[#E8A820] border border-[#C8900A]/30",
        error:       "bg-[#D45820]/20 text-[#E87040] border border-[#D45820]/30",
        info:        "bg-[#DFFF4D]/15 text-[#DFFF4D] border border-[#DFFF4D]/30",
        gray:        "bg-[#222222]/60 text-[#888888] border border-[#222222]",
        active:      "bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30",
        paused:      "bg-[#C8900A]/20 text-[#E8A820] border border-[#C8900A]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
