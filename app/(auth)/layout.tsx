import { ChildrenProps } from "@/interface/children-props";

export default function AuthLayout({ children }: ChildrenProps) {
    return (
        <div className='flex items-center justify-center h-full'>
            {children}
        </div>
    )
}