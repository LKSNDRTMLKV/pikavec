import DashboardHeaderNavbar from "@/components/admin/dashboard/dashboard-header-navbar";
import { ChildrenProps } from "@/interface/children-props";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pikavec / Admin / Dashboard",
    description: "Kazi da ako pusis",
};


const DashboardLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <DashboardHeaderNavbar />
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
export default DashboardLayout;