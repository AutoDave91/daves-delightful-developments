import React from "react";
import { cn } from "@/lib/utils";

export function Button({
    className = "",
    variant = "solid",
    type = "button",
    children,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center font-medium rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        solid:
            "bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-400 shadow-sm",
        outline:
            "border border-amber-700 text-amber-800 hover:bg-amber-100 focus:ring-amber-400",
        ghost:
            "text-amber-800 hover:bg-amber-100 focus:ring-amber-400",
    };

    return (
        <button
            type={type}
            className={cn(base, variants[variant], className, "px-4 py-2")}
            {...props}
        >
            {children}
        </button>
    );
}