interface HoroscopeRoutesProps {
  daily: string;
  compatibility: string;
  hero: string;
}

const horoscopeRoutes: HoroscopeRoutesProps = {
  daily: "/admin/horoscope/daily",
  compatibility: "/admin/horoscope/compatibility",
  hero: "/admin/horoscope/hero",
};

interface UserRoutesProps {
  all: string;
  banned: string;
  active: string;
}

const usersRoutes: UserRoutesProps = {
  all: "/admin/users/all",
  banned: "/admin/users/banned",
  active: "/admin/users/active",
};

interface RouteProps {
  base: string;
  subroutes?: HoroscopeRoutesProps;
}

interface AdminRoutesProps {
  home: RouteProps;
  dashboard: RouteProps;
  users: RouteProps;
  horoscope: RouteProps;
  games: RouteProps;
  account: RouteProps;
}

const adminRoutes: AdminRoutesProps = {
  home: {
    base: "/admin",
  },
  dashboard: {
    base: "/admin/dashboard",
  },
  users: {
    base: "/admin/users",
  },
  horoscope: {
    base: "/admin/horoscope",
    subroutes: horoscopeRoutes,
  },
  games: {
    base: "/admin/games",
  },
  account: {
    base: "/admin/account",
  },
};

export default adminRoutes
