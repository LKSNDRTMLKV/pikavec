'use client';

import React, { useEffect } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTabsProps } from "@/interface/ui-props";
import useStorage from '@/hooks/use-storage';
import { Separator } from '@/components/ui/separator';


export const PageTabs: React.FC<PageTabsProps> = ({ tabs, setTabs }) => {
    const { setItem, getItem } = useStorage();

    const [currentTab, setCurrentTab] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const storedTab = getItem('daily_tab', 'local');
        if (storedTab) {
            setCurrentTab(storedTab);
        }
        else {
            setCurrentTab(tabs.find(tabs => tabs.active)?.value!);
        }
        setIsLoading(false);
    }, []);

    // const [currentTab, setCurrentTab] = React.useState(tabs[0].value);

    // React.useEffect(() => {
    //     const storedTab = getItem('daily_tab', 'local');
    //     if (storedTab) {
    //         setCurrentTab(storedTab);
    //     }
    //     setIsLoading(false);
    // }, []);

    // React.useEffect(() => {
    //     if (!isLoading) {
    //         setItem('daily_tab', currentTab, 'local');
    //     }
    // }, [currentTab, isLoading]);

    const handleTabChange = (newTabValue: string) => {
        setItem('daily_tab', newTabValue, 'local');
        setCurrentTab(newTabValue);
    };

    if (isLoading) {
        return null;
    }
    return (
        <Tabs value={currentTab} onValueChange={handleTabChange} className="">
            <TabsList>
                {tabs.map(tab => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className=" min-w-20"
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>

            <Separator className='mt-2' />

            {tabs.map(tab => (
                <TabsContent
                    key={tab.value}
                    value={tab.value}
                >
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
}