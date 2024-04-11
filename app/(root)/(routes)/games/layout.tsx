import ChildrenProps from "@/interface/children-props";

const GamesLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col">
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    );
};
export default GamesLayout;