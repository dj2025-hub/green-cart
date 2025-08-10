import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import cn from "../../lib/utils"

function Checkbox({ className, ...props }) {
  return (
      <CheckboxPrimitive.Root
          data-slot="checkbox"
          className={cn(
              "peer border-gray-300 bg-transparent data-[state=checked]:bg-green-600 data-[state=checked]:text-white data-[state=checked]:border-green-600",
              "focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px]",
              "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
              "size-4 shrink-0 rounded-[4px] border shadow-xs transition-all outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
          )}
          {...props}
      >
        <CheckboxPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3.5" aria-hidden="true" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
  );
}

export default Checkbox;