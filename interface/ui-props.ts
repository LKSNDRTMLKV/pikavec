import React from "react";

export interface TabDataProps {
    value: string;
    label: string;
    active: boolean;
    content: React.ReactNode;
}

export interface PageTabsProps {
    tabs: TabDataProps[];
    setTabs: React.Dispatch<React.SetStateAction<TabDataProps[]>>;
}