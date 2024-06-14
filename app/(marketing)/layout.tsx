import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }:{children: ReactNode}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full pt-28">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout;