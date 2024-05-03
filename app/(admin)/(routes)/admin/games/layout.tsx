import GamesHeaderNavbar from "@/components/admin/games/games-header-navbar";
import HoroscopeHeaderNavbar from "@/components/admin/horoscope/horoscope-header-navbar";
import { ChildrenProps } from "@/interface/children-props";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pikavec / Admin / Games",
    description: "Kazi da ako pusis",
};


const GamesLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <GamesHeaderNavbar />
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
export default GamesLayout;