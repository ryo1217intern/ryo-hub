import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Welcome to <span className="underline">RyoHub</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                RyoHub is a platform for developers to share
                <br />
                their knowledge and experience.
            </h3>
            <Button>
                <Link href="/contents">Enter RyoHub</Link>
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}
