import React from "react";
import cn from "../../lib/utils"

function Input({ className, type, ...props }) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "placeholder:text-gray-400 selection:bg-green-600 selection:text-white bg-transparent border border-gray-300 flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px]",
                "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
                className
            )}
            {...props}
        />
    );
}

export default Input;