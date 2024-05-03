export interface SideNavBarProps {
    label: string;
    link: string;
    icon: JSX.Element;
    active: boolean;
    disabled: boolean;
}

export interface HeaderNavbarProps {
    label: string;
    link: string;
    icon?: JSX.Element;
    active: boolean;
    disabled: boolean;
}