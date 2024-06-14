import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Image from "next/image"

const font = Poppins({subsets: ["latin"], weight: ["400", "600"]})

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-4">
            <div className="border-b rounded-full shadow-sm">
                <Image
                    src="/logo.svg"
                    alt="RyoHub"
                    width={40}
                    height={40}
                />            
            </div>
            <p className={cn("font-bold", font.className)}>
                RyoHub
            </p>
        </div>
    )
}
