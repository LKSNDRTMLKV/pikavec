import SideNavbar from "@/components/admin/side-navbar";
import { ChildrenProps } from "@/interface/children-props";
import { admin } from "@/services/auth/admin";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pikavec / Admin",
    description: "Kazi da ako pusis",
};

const AdminLayout = async ({ children }: ChildrenProps) => {
    const isAdmin = await admin();

    if (!isAdmin) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
            <div className="col-span-1 z-50">
                <SideNavbar />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-5 ">
                {children}
            </div>
        </div>
    );
};
export default AdminLayout;