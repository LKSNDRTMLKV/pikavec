import SideNavbar from "@/components/admin/side-navbar";
import { ChildrenProps } from "@/interface/children-props";

const AdminLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen h-full max-w-screen-2xl">
            <div className="col-span-1">
                <SideNavbar />
            </div>
            <div className="col-span-3 md:grid-cols-4">
                <main className="flex flex-1 flex-col justify-center items-center">
                    {children}
                </main>
            </div>
        </div>
    );
};
export default AdminLayout;