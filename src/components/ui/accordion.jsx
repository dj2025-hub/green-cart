import React from "react";
import {Content, Header, Item, Root, Trigger} from "@radix-ui/react-accordion";
import {ChevronDownIcon} from "lucide-react";
import cn from "../../lib/utils"

function Accordion({...props}) {
    return <Root data-slot="accordion" {...props} />;
}

function AccordionItem({className, ...props}) {
    return (
        <Item
            data-slot="accordion-item"
            className={cn("border-b last:border-b-0 border-gray-200", className)}
            {...props}
        />
    );
}

function AccordionTrigger({className, children, ...props}) {
    return (
        <Header className="flex">
            <Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none",
                    "hover:underline",
                    "focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px]",
                    "disabled:pointer-events-none disabled:opacity-50",
                    "[&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon
                    className="text-gray-600 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                    aria-hidden="true"
                />
            </Trigger>
        </Header>
    );
}

function AccordionContent({className, children, ...props}) {
    return (
        <Content
            data-slot="accordion-content"
            className={cn(
                "overflow-hidden text-sm transition-all duration-200",
                className
            )}
            {...props}
        >
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </Content>
    );
}

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent};