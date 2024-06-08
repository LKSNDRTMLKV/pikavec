"use client";

import { DailyHoroscopeSkeleton } from "@/components/custom/skeletons";

export default function Loading() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <DailyHoroscopeSkeleton />
        </div>
    )
};