"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "@/components/custom/cell-action"
import DailyService from "@/services/horoscope/daily-service"
import { DailyColumnProps } from "@/interface/horoscope-props"
import { CheckIcon, XIcon } from "lucide-react"
import { DateCell } from "@/utils/helper"


export const columns: ColumnDef<DailyColumnProps>[] = [
    // {
    //     header: 'ID',
    //     accessorKey: 'id',
    // },
    {
        header: 'Horoscope',
        accessorKey: 'horoscope',
    },
    {
        header: 'Author',
        accessorKey: 'author',
        cell: ({ row }) => (
            row.original.author
        ),
    },
    {
        header: 'Story',
        accessorKey: 'story',
        cell: ({ row }) => (
            <div className="">
                {row.original.story.length > 180 ? `${row.original.story.slice(0, 180)}...` : row.original.story}
            </div>
        ),
    },
    {
        header: 'Date',
        accessorKey: 'date',
        cell: ({ row }) => (
            <div className=" whitespace-nowrap">
                <DateCell date={row.original.date} />
            </div>
        ),
    },
    {
        header: 'Created',
        accessorKey: 'createdAt',
        cell: ({ row }) => (
            <div className=" whitespace-nowrap">
                <DateCell date={row.original.createdAt} />
            </div>
        ),
    },
    {
        header: 'Featured',
        accessorKey: 'isFeatured',
        cell: ({ row }) => (
            row.original.isFeatured ? <CheckIcon /> : <XIcon />
        ),
    },
    {
        header: 'Archived',
        accessorKey: 'isArchived',
        cell: ({ row }) => (
            row.original.isArchived ? <CheckIcon /> : <XIcon />
        ),
    },
    {
        header: 'Actions',
        accessorKey: 'id',
        cell: ({ row }) => (
            <CellAction
                data={row.original}
                updateId={`admin/horoscope/daily/${row.original.id}`}
                callback={() => DailyService.deleteDailyHoroscope({ id: row.original.id })}
            />
        )
    }
]
