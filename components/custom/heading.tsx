import { cn } from "@/lib/utils"

interface HeadingProps {
    title: string,
    description: string,
    titleSize?: string,
    className?: string,
}

export const Heading: React.FC<HeadingProps> = ({ title, description, titleSize, className }) => {
    return (
        <div className={className}>
            <h2 className={cn("text-2xl font-bold tracking-tight", titleSize)}>
                {title}
            </h2>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    )
}