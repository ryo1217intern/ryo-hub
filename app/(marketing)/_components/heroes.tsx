import Image from "next/image"

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image
                        src="/idea.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Idea"
                    />
                    <Image
                        src="/idea-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Idea"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/group.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Idea"
                    />
                    <Image
                        src="/group-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Idea"
                    />
                </div>
            </div>
        </div>
    )
}
