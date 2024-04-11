interface AdminRoutesProps {
    home: string;
    dashboard: string;
    users: string;
    horoscope: string;
}

const adminRoutes : AdminRoutesProps = {
    home: "/admin",
    dashboard: "/admin/dashboard",
    users: "/admin/users",
    horoscope: "/admin/horoscope"
}

export default adminRoutes;