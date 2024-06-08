import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "../ui/separator"


export function AdminSideNavSkeleton({ length }: { length: number }) {
    return (
        <div className="flex flex-col p-4 gap-2">
            {[...Array(length)].map((_, i) => (
                <Skeleton
                    key={i}
                    className="h-11 w-full rounded-md"
                />
            ))}
        </div>
    )
}

export function DailyHoroscopeSkeleton() {
    return (
        <div className="flex flex-col w-full p-4">
            <Skeleton className="h-10 w-[250px] rounded-md" />

            <Separator className="mt-2 mb-4" />

            <Skeleton className=" h-128 w-full" />
        </div>
    )
}