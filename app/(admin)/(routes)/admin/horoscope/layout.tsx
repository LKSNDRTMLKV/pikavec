import HeaderNavbar from "@/components/admin/header-navbar";
import { ChildrenProps } from "@/interface/children-props";
import { HeaderNavbarProps } from "@/interface/navbar-props";
import { Metadata } from "next";
import React from "react";
import HoroscopeHeaderNavbar from "@/components/admin/horoscope/horoscope-header-navbar";

export const metadata: Metadata = {
    title: "Pikavec / Admin / Horoscope",
    description: "Kazi da ako pusis",
};


const HoroscopeLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="w-full">
           <HoroscopeHeaderNavbar />
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
export default HoroscopeLayout;