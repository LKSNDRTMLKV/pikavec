'use client'
import { HeaderNavbarProps } from "@/interface/navbar-props";
import { cn } from '@/lib/utils';
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

const HeaderNavbar = ({ headerNavbarList }: { headerNavbarList: HeaderNavbarProps[] }) => {
    return (
        <ScrollArea className="w-full">
                <nav className="border-b w-full z-20 bg-background">
                    <div className="flex h-20 justify-center items-center px-4">
                        <ul className="flex justify-center items-center mx-2 lg:mx-4 md:gap-6 gap-4">
                            {headerNavbarList.map((navItem, idx) => (
                                <li
                                    key={idx}
                                    className={
                                        cn(
                                            "flex items-center justify-center gap-2 text-xl font-semibold text-muted-foreground hover:text-primary",
                                            navItem.active ? 'border-b-2 border-primary text-primary' : '',
                                            navItem.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                                        )
                                    }
                                >
                                    {navItem.icon}
                                    <Link
                                        href={navItem.link}
                                    >
                                        {navItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
        </ScrollArea>
    )

}

export default HeaderNavbar;