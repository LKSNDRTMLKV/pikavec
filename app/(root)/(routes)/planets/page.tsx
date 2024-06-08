import Image from "next/image";
import Planet0 from "@/assets/planets/planet00.png";
import Planet1 from "@/assets/planets/planet01.png";
import Planet2 from "@/assets/planets/planet02.png";
import Planet3 from "@/assets/planets/planet03.png";
import Planet4 from "@/assets/planets/planet04.png";
import Planet5 from "@/assets/planets/planet05.png";
import Planet6 from "@/assets/planets/planet06.png";
import Planet7 from "@/assets/planets/planet07.png";
import Planet8 from "@/assets/planets/planet08.png";
import Planet9 from "@/assets/planets/planet09.png";
import BatmanAndRobin from "@/assets/fun/batman_and_robin.png";
import BekiIRobi from "@/assets/fun/beki_i_robi.avif";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const PlanetsPage = () => {
    return (
        <div className=" mb-128 w-full">
            <div className="flex flex-wrap justify-center items-center">
                <Image src={Planet0} alt="wow" width={300} height={300} />
                <Image src={Planet1} alt="wow" width={300} height={300} />
                <Image src={Planet2} alt="wow" width={300} height={300} />
                <Image src={Planet3} alt="wow" width={300} height={300} />
                <Image src={Planet4} alt="wow" width={300} height={300} />
                <Image src={Planet5} alt="wow" width={300} height={300} />
                <Image src={Planet6} alt="wow" width={300} height={300} />
                <Image src={Planet7} alt="wow" width={300} height={300} />
                <Image src={Planet8} alt="wow" width={300} height={300} />
                <Image src={Planet9} alt="wow" width={300} height={300} />
            </div>

            {/* <div className="flex w-full justify-center relative mx-auto my-20">
                <Image
                    src={BatmanAndRobin}
                    className="animate-custom-pulse absolute top-10 left-30 z-50"
                    alt="batman_and_robin"
                    width={300}
                    height={300}
                />
                <Image
                    src={BekiIRobi}
                    className="absolute top-0 left-30 z-10"
                    alt="beki_i_robi"
                    width={300}
                    height={300}
                />
            </div> */}
        </div>


        // <ResizablePanelGroup
        //     direction="horizontal"
        //     className="max-w-xxxl rounded-lg border"
        // >
        //     <ResizablePanel defaultSize={150}>
        //         <Image src={Planet0} alt="wow" width={300} height={300} />
        //     </ResizablePanel>
        //     <ResizableHandle />
        //     <ResizablePanel defaultSize={100}>
        //         <ResizablePanelGroup direction="vertical">
        //             <ResizablePanel defaultSize={100}>
        //                 <div className="flex h-full items-center justify-center p-6">
        //                     <span className="font-semibold">Two</span>
        //                 </div>
        //             </ResizablePanel>
        //             <ResizableHandle />
        //             <ResizablePanel defaultSize={100}>
        //                 <div className="flex h-full items-center justify-center p-6">
        //                     <span className="font-semibold">Three</span>
        //                 </div>
        //             </ResizablePanel>
        //         </ResizablePanelGroup>
        //         <Image src={Planet1} alt="wow" width={300} height={300} />
        //     </ResizablePanel>
        // </ResizablePanelGroup>
    );
}

export default PlanetsPage;