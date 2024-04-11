import { Footer } from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { ChildrenProps } from "@/interface/children-props";


const RootLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
};

export default RootLayout;