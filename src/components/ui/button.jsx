import React from "react";
import {Slot} from "@radix-ui/react-slot";
import cn from "../../lib/utils"

const buttonVariants = {
    base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px] aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
    variants: {
        variant: {
            default: "bg-green-600 text-white shadow-xs hover:bg-green-700",
            destructive: "bg-red-600 text-white shadow-xs hover:bg-red-700 focus-visible:ring-red-500/20",
            outline: "border border-gray-300 bg-white shadow-xs hover:bg-gray-100 hover:text-gray-900",
            secondary: "bg-gray-200 text-gray-900 shadow-xs hover:bg-gray-300",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
            link: "text-green-600 underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
};

function Button({className, variant, size, asChild = false, ...props}) {
    const Comp = asChild ? Slot : "button";

    const classes = cn(
        buttonVariants.base,
        buttonVariants.variants.variant[variant || buttonVariants.defaultVariants.variant],
        buttonVariants.variants.size[size || buttonVariants.defaultVariants.size],
        className
    );

    return (
        <Comp data-slot="button" className={classes} {...props} />
    );
}

export default Button;