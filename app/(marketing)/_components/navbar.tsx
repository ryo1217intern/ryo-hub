"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "flex flex-row z-50 bg-background fixed top-0 items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <>
                    <Button variant="ghost" size="sm">
                        <Link href="/contents">
                            Enter Ryo Hub
                        </Link>
                    </Button>
                </>
                <ModeToggle />
            </div>
        </div>
    );
}