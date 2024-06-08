'use client'

import { Separator } from '@/components/ui/separator';
import { SideNavBarProps } from '@/interface/navbar-props';
import { cn } from '@/lib/utils';
import adminRoutes from '@/routes/admin';
import { GamepadIcon, HomeIcon, LayoutDashboardIcon, TelescopeIcon, UserIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AppLogo } from '../custom/app-logo';
import { ScrollArea } from '../ui/scroll-area';
import path from 'path';
import { AdminSideNavSkeleton, DailyHoroscopeSkeleton } from '../custom/skeletons';

const SideNavbar: React.FC = () => {
    const {
        home,
        dashboard,
        users,
        horoscope,
        games,
        account,
    } = adminRoutes;

    const pathname = usePathname();

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [sideNavbarList, setSideNavbarList] = React.useState<SideNavBarProps[]>([
        {
            label: 'Home',
            link: home.base,
            icon: <HomeIcon />,
            active: true,
            disabled: false,
        },
        {
            label: 'Dashboard',
            link: dashboard.base,
            icon: <LayoutDashboardIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Users',
            link: users.base,
            icon: <UsersIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Horoscope',
            link: horoscope.base,
            icon: <TelescopeIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Games',
            link: games.base,
            icon: <GamepadIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Account',
            link: account.base,
            icon: <UserIcon />,
            active: false,
            disabled: false,
        },
    ])

    React.useEffect(() => {
        setSideNavbarList(prevList =>
            prevList.map(item => {
                if (item.link === home.base) return { ...item, active: pathname === home.base };

                const route = Object.values(adminRoutes).find(route => route.base === item.link);
                const isActive = route
                    ? pathname.startsWith(route.base)
                    : item.link === pathname;

                return {
                    ...item,
                    active: isActive,
                };
            })
        );
        setIsLoading(false);
    }, [pathname, home.base]);

    return (
        <nav className="flex flex-col w-full h-full bg-background border-r md:min-h-screen">
            {/* Desktop version */}
            {/* <div className="flex px-4 py-5">
                <Link className="flex flex-row items-center gap-2" href="/">
                    <Image
                        src={logo}
                        alt="pikavec-logo"
                        className="w-10 h-10 rounded-xl"
                    />
                    <h2 className="text-2xl">Pikavec</h2>
                </Link>
            </div> */}
            <div className='px-2'>
                <AppLogo />
            </div>

            <Separator />

            {
                isLoading ?
                    <AdminSideNavSkeleton
                        length={sideNavbarList.length}
                    /> :
                    <>
                        <ScrollArea className='max-h-128'>
                            <div className="hidden md:block p-4">
                                <ul className="space-y-2">
                                    {sideNavbarList.map((item, index) => (
                                        <li key={index} className={cn(
                                            "rounded-md text-lg text-muted-foreground hover:text-primary w-full h-full p-2 px-2",
                                            item.active ? " bg-secondary text-primary" : "",
                                        )}>
                                            <Link href={item.link} className='flex items-center gap-2 w-full h-full'>
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </ScrollArea>
                    </>
            }

            {/* Mobile and tablet version */}
            {/* <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div> */}
        </nav>
    );
};

export default SideNavbar;