import { ChildrenProps } from "@/interface/children-props";

const HoroscopeLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col my-8">
            <main className="flex flex-1 flex-col justify-center items-center">
                {children}
            </main>
        </div>
    );
};
export default HoroscopeLayout;