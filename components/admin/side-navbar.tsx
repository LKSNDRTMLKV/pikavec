'use client'

import { cn } from '@/lib/utils';
import adminRoutes from '@/routes/admin';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideNavbar: React.FC = () => {

    const pathname = usePathname();

    const {
        home,
        dashboard,
        users,
        horoscope
    } = adminRoutes;

    const [sideNavbarList, setSideNavbarList] = React.useState([
        {
            label: 'Home',
            link: home,
            active: true,
            disabled: false,
        },
        {
            label: 'Dashboard',
            link: dashboard,
            active: false,
            disabled: false,
        },
        {
            label: 'Users',
            link: users,
            active: false,
            disabled: false,
        },
        {
            label: 'Horoscope',
            link: horoscope,
            active: false,
            disabled: false,
        }
    ])

    React.useEffect(() => {
        setSideNavbarList(prevList => prevList.map(item => ({
            ...item,
            active: item.link === pathname
        })));
    }, [pathname]);

    return (
        <nav className="flex flex-col w-full h-full bg-background border-r">
            {/* Desktop version */}
            <div className="hidden md:block px-4 py-6">
                <ul className="space-y-4">
                    {/* <li>
                        <Link href={dashboard} className="text-gray-600 hover:text-gray-800">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={users} className="text-gray-600 hover:text-gray-800">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link href={horoscope} className="text-gray-600 hover:text-gray-800">
                            Horoscope
                        </Link>
                    </li> */}
                    {sideNavbarList.map((item, index) => (
                        <li key={index} className={cn(`${item.active ? "bg-white" : ""} rounded-sm p-2`)}>
                            <Link href={item.link} className="text-gray-600 hover:text-gray-800 w-full h-full">
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>

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