'use client';

import { TabsProps } from "@radix-ui/react-tabs";
import React from "react";

export const DailyTabs = () => {
    const [tabs, setTabs] = React.useState(
        [
        {
            label: 'Horoscope',
            value: 'horoscope',
            content: <div>Horoscope</div>
        },
        {
            label: 'Daily Horoscope',
            value: 'daily-horoscope',
            content: <div>Daily Horoscope</div>
        },
    ]
);

    return tabs;
}
