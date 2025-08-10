import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {XIcon} from "lucide-react";
import cn from "../../lib/utils.js";

function Sheet({...props}) {
    return <Dialog.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({...props}) {
    return <Dialog.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({...props}) {
    return <Dialog.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({...props}) {
    return <Dialog.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({className, ...props}) {
    return (
        <Dialog.Overlay
            data-slot="sheet-overlay"
            className={cn(
                "fixed inset-0 bg-black/5",
                "transition-opacity duration-300",
                className
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
        />
    );
}

function SheetContent({ className, children, side = "right", ...props }) {
    return (
        <SheetPortal>
            <SheetOverlay />
            <Dialog.Content
                data-slot="sheet-content"
                className={cn(
                    "bg-white flex flex-col gap-4 shadow-lg transition-all duration-300",
                    side === "right" &&
                    "fixed inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                    side === "left" &&
                    "fixed inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                    side === "top" && "fixed inset-x-0 top-0 h-auto border-b",
                    side === "bottom" && "fixed inset-x-0 bottom-0 h-auto border-t",
                    className
                )}
                onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling to overlay
                {...props}
            >
                <SheetClose
                    className={cn(
                        "absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100",
                        "focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none",
                        "disabled:pointer-events-none"
                    )}
                >
                    <XIcon className="size-4" aria-hidden="true" />
                    <span className="sr-only">Fermer</span>
                </SheetClose>
                <div className="flex flex-col flex-1 p-4">{children}</div>
            </Dialog.Content>
        </SheetPortal>
    );
}

function SheetHeader({className, ...props}) {
    return (
        <div
            data-slot="sheet-header"
            className={cn("flex flex-col gap-1.5 p-4", className)}
            {...props}
        />
    );
}

function SheetFooter({className, ...props}) {
    return (
        <div
            data-slot="sheet-footer"
            className={cn("mt-auto flex flex-col gap-2 p-4", className)}
            {...props}
        />
    );
}

function SheetTitle({className, ...props}) {
    return (
        <Dialog.Title
            data-slot="sheet-title"
            className={cn(
                "text-gray-900 font-semibold",
                "text-lg",
                className
            )}
            style={{fontFamily: "Rounded, sans-serif"}}
            {...props}
        />
    );
}

function SheetDescription({className, ...props}) {
    return (
        <Dialog.Description
            data-slot="sheet-description"
            className={cn("text-gray-600 text-sm", className)}
            {...props}
        />
    );
}

export {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetPortal,
    SheetOverlay,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
};