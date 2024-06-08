"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/custom/data-table";
import { Heading } from "@/components/custom/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/custom/api-list";

import { columns } from "@/app/(admin)/(routes)/admin/horoscope/daily/column";
import { DailyClientProps } from "@/interface/horoscope-props";
import React from "react";
import DailyForm from "@/components/admin/horoscope/daily-form";
import { TabDataProps } from "@/interface/ui-props";
import { PageTabs } from "./page-tabs";

export const DailyClient: React.FC<DailyClientProps> = ({
    data,
    horoscopes,
    userId
}) => {
    const params = useParams();
    const router = useRouter();

    const [tabs, setTabs] = React.useState<TabDataProps[]>([
        {
            label: 'Records',
            value: 'records',
            active: true,
            content:
                <DataTable
                    searchKey="horoscope"
                    columns={columns}
                    data={data}
                />
        },
        {
            label: 'Form',
            value: 'form',
            active: false,
            content:
                <DailyForm
                    userId={userId}
                    horoscopes={horoscopes}
                />
        },
        {
            label: 'API',
            value: 'api',
            active: false,
            content:
                <ApiList
                    baseUrl="api/admin/horoscope"
                    entityName="daily"
                    entityIdName="dailyId" />
        }
    ]);


    return (
        <>
            <PageTabs
                tabs={tabs}
                setTabs={setTabs}
            />
        </>
    );
};