import UsersHeaderNavbar from "@/components/admin/users/users-header-navbar";
import { ChildrenProps } from "@/interface/children-props";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pikavec / Admin / Users",
    description: "Kazi da ako pusis",
};


const UsersLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <UsersHeaderNavbar />
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
export default UsersLayout;