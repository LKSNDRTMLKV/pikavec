"use client";

import axios from "axios";
import { useState } from "react";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { AlertModal } from "@/components/modal/alert-modal";


import { toast } from "@/components/ui/use-toast";
import { useSubmitProps } from "@/hooks/use-submit";
import { DailyHoroscope } from "@prisma/client";
import { DailyColumnProps } from "@/interface/horoscope-props";

interface CellActionProps {
    data: DailyColumnProps;
    updateId: string;
    callback: (data: any) => Promise<any>;
}

export const CellAction: React.FC<CellActionProps> = ({
    data,
    updateId,
    callback,
}) => {
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const onConfirm = async () => {
        try {
            setLoading(true);
            await callback({id: data.id})
            toast({ title: 'Operation successful.' });
            router.refresh();
        } catch (error) {
            toast({ title: 'An error occured.' });
        } finally {
            setOpen(false);
            setLoading(false);
        }
    };


    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast({ title: 'ID copied to clipboard.' });
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => onCopy(data.id)}
                    >
                        <Copy className="mr-2 h-4 w-4" /> Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => router.push(`${pathname}/${data.id}`)}
                    >
                        <Edit className="mr-2 h-4 w-4" /> Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};