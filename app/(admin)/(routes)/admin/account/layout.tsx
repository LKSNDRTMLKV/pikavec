import AccountHeaderNavbar from "@/components/admin/account/account-header-navbar";
import { ChildrenProps } from "@/interface/children-props";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pikavec / Admin / Account",
    description: "Kazi da ako pusis",
};

const AccountLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <AccountHeaderNavbar />
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
export default AccountLayout;