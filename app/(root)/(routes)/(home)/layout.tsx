import ChildrenProps from "@/interface/children-props";

const HomeLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col py-4">
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    );
};
export default HomeLayout;