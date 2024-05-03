'use client'

import { LanguageToggle } from "@/components/custom/language-toggle";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from '../auth/user-button';
import { usePathname } from 'next/navigation';
import { AppLogo } from "@/components/custom/app-logo";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header>
            <nav className="border-b max-w-screen fixed top-0 left-0 w-full z-50 bg-background -mb-20">
                <div className="flex h-20 justify-center items-center px-2">

                    <AppLogo />

                    <div className="flex justify-center items-center mx-2 lg:mx-4 gap-4">
                        <div className="flex gap-x-2">
                            <Button
                                asChild
                                variant={pathname === "/server" ? "default" : "outline"}
                            >
                                <Link href="/server">
                                    Server
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant={pathname === "/client" ? "default" : "outline"}
                            >
                                <Link href="/client">
                                    Client
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant={pathname === "/admin" ? "default" : "outline"}
                            >
                                <Link href="/admin">
                                    Admin
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant={pathname === "/settings" ? "default" : "outline"}
                            >
                                <Link href="/settings">
                                    Settings
                                </Link>
                            </Button>
                        </div>
                        <UserButton />
                    </div>
                    <div className="ml-auto flex items-center space-x-2 lg:space-x-4">

                        <LanguageToggle />
                        <ThemeToggle />
                        {/* <Button variant="outline" size="icon" className="md:hidden sm:hidden xs:hidden">
                            <MenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                            <span className="sr-only">Navigation Menu</span>
                        </Button> */}

                        {/* <AvatarButton user={user} /> */}
                    </div>
                </div>
            </nav>
            <div className="h-20" />
        </header>
    )
}

export default Navbar;