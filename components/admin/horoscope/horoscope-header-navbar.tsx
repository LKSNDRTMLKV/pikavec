'use client'

import { HeaderNavbarProps } from '@/interface/navbar-props';
import { CalendarCheckIcon, FolderSearchIcon, GitCompareIcon, PersonStandingIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';
import HeaderNavbar from '../header-navbar';

const HoroscopeHeaderNavbar = () => {
    const pathname = usePathname();

    const [horoscopeNavbarList, setHoroscopeNavbarList] = React.useState<HeaderNavbarProps[]>([
        {
            label: 'Insights',
            link: '/admin/horoscope',
            icon: <FolderSearchIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Daily',
            link: '/admin/horoscope/daily',
            icon: <CalendarCheckIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Compatibility',
            link: '/admin/horoscope/compatibility',
            icon: <GitCompareIcon />,
            active: false,
            disabled: false,
        },
        {
            label: 'Hero',
            link: '/admin/horoscope/hero',
            icon: <PersonStandingIcon />,
            active: false,
            disabled: false,
        },
    ])

    React.useEffect(() => {
        setHoroscopeNavbarList(prevList => prevList.map(navItem => {
            if (navItem.link === pathname) {
                return {
                    ...navItem,
                    active: true
                }
            }
            return {
                ...navItem,
                active: false
            }
        }
        ))
    }, [pathname])

    return (
        <HeaderNavbar headerNavbarList={horoscopeNavbarList} />
    )
}

export default HoroscopeHeaderNavbar;