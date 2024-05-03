// import { SideNavBarProps } from '@/interface/navbar-props';
// import adminRoutes from '@/routes/admin';
// import { GamepadIcon, HomeIcon, LayoutDashboardIcon, TelescopeIcon, UserIcon, UsersIcon } from 'lucide-react';
// import React from 'react';

// export default function useNavbarList() {
//     const {
//         home: [home],
//         dashboard: [dashboard],
//         users: [users],
//         horoscope: [horoscope],
//         games: [games],
//         account: [account],
//     } = adminRoutes;

//     const [sideNavbarList, setSideNavbarList] = React.useState<SideNavBarProps[]>([
//         {
//             label: 'Home',
//             link: home,
//             icon: <HomeIcon />,
//             active: true,
//             disabled: false,
//         },
//         {
//             label: 'Dashboard',
//             link: dashboard,
//             icon: <LayoutDashboardIcon />,
//             active: false,
//             disabled: false,
//         },
//         {
//             label: 'Users',
//             link: users,
//             icon: <UsersIcon />,
//             active: false,
//             disabled: false,
//         },
//         {
//             label: 'Horoscope',
//             link: horoscope,
//             icon: <TelescopeIcon />,
//             active: false,
//             disabled: false,
//         },
//         {
//             label: 'Games',
//             link: games,
//             icon: <GamepadIcon />,
//             active: false,
//             disabled: false,
//         },
//         {
//             label: 'Account',
//             link: account,
//             icon: <UserIcon />,
//             active: false,
//             disabled: false,
//         },
//     ])
//     return {
//         sideNavbarList,
//         setSideNavbarList
//     }
// }