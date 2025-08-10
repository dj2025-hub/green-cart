import React from "react";
import {Slot} from "@radix-ui/react-slot";
import cn from "../../lib/utils"

const badgeVariants = {
    base: "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px] aria-invalid:border-red-500 aria-invalid:ring-red-500/20 transition-all overflow-hidden",
    variants: {
        variant: {
            default: "border-transparent bg-green-600 text-white hover:bg-green-700",
            secondary: "border-transparent bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
            destructive: "border-transparent bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/20",
            outline: "text-gray-900 border-gray-300 hover:bg-gray-100 hover:text-gray-900",
        },
    },
    defaultVariants: {
        variant: "default",
    },
};

function Badge({className, variant, asChild = false, ...props}) {
    const Comp = asChild ? Slot : "span";

    // Combine base, variant, and className
    const classes = cn(
        badgeVariants.base,
        badgeVariants.variants.variant[variant || badgeVariants.defaultVariants.variant],
        className
    );

    return (
        <Comp
            data-slot="badge"
            className={classes}
            {...props}
        />
    );
}

export default Badge;