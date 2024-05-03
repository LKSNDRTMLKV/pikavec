'use client'

import { cn } from "@/lib/utils";
import { Horoscope } from "@prisma/client";
import { set } from "date-fns";
import React from "react";
import { HoroscopeIcon } from "../horoscrope-cards";



const HoroscopeInfoPage: React.FC<Horoscope> = (horoscope) => {
    const [cockSize, setSockSize] = React.useState<number>(60);

    const [rightBallScratches, setRightBallScratches] = React.useState<number>(0);
    const [leftBallScratches, setLeftBallScratches] = React.useState<number>(0);

    const [isLeftBallScratched, setIsLeftBallScratched] = React.useState<boolean>(false);
    const [isRightBallScratched, setIsRightBallScratched] = React.useState<boolean>(false);

    const [onPreCum, setOnPreCum] = React.useState<boolean>(false);
    const [onPreCumEjaculations, setOnPreCumEjaculations] = React.useState<number>(0);

    const [shouldCum, setShouldCum] = React.useState<boolean>(false);
    const [hasCame, setHasCame] = React.useState<boolean>(false);




    const handleCockSizeChange = () => {
        if (cockSize < 100) {
            setSockSize(prevSize => prevSize + 2);
        }
        else {
            handleOnPreCum();
        }
        // setSockSize(prevSize => prevSize + 1);
    }

    const handleScratchLeftBall = () => {
        setLeftBallScratches(prevScratches => prevScratches + 1);
        if(leftBallScratches > 5) {
        setIsLeftBallScratched(true);
        }
    }

    const handleScrachRightBall = () => {
        setRightBallScratches(prevScratches => prevScratches + 1);
        if(rightBallScratches > 5) {
        setIsRightBallScratched(true);
        }
    }

    const handleOnPreCum = () => {
        if(cockSize === 100 && isLeftBallScratched && isRightBallScratched) {
            setOnPreCum(true);
        }
        if(onPreCum && onPreCumEjaculations < 5) {
            setOnPreCumEjaculations(prevEjaculations => prevEjaculations + 1);
        }
        if(onPreCumEjaculations >= 5) {
            setShouldCum(true);
        }
    }

    const handleResetValues = () => {
        setSockSize(60);
        setRightBallScratches(0);
        setLeftBallScratches(0);
        setIsLeftBallScratched(false);
        setIsRightBallScratched(false);
        setOnPreCum(false);
        setOnPreCumEjaculations(0);
        setShouldCum(false);
        setHasCame(false);
    }

    React.useEffect(() => {
        if(shouldCum) {
            setTimeout(() => {
                setHasCame(true);
            }, 5000);
        }

        if (hasCame) {
            const interval = setInterval(() => {
            setSockSize(prevSize => Math.max(prevSize - 2, 60));
            if (cockSize === 60) {
                handleResetValues();
            }
            }, 1000);

            return () => clearInterval(interval);
        }
        }
    , [hasCame, shouldCum, cockSize])

    return (
        <div className="w-full max-w-screen-xl grid md:grid-cols-2 grid-cols-1 gap-4 h-full my-28">
            <div className="flex flex-col gap-4">
                <div className=" bg-rio_confetti_cake flex gap-4 w-full h-44 m-8 justify-evenly items-center rounded-xl">
                    <h1 className="text-8xl">{horoscope.sign}</h1>
                    <div>
                        <HoroscopeIcon sign={horoscope.enum} size={100} />
                    </div>
                </div>
                <div className=" flex flex-col gap-4 w-full h-24 rounded-sm">
                    {/* <h1>{sign}</h1> */}
                </div>
                <div className="bg-rio_strawberry_milkshake flex flex-col gap-4 w-full h-64">
                    {/* <h1>{sign}</h1> */}
                </div>
                <div className="flex flex-col gap-4 w-full h-20">
                    {/* <h1>{sign}</h1> */}
                </div>
            </div>
            <div className="flex flex-col gap-4">

                <div className="bg-rio_blue_raspberry flex flex-row items-center gap-4 w-96 h-32 -m-8 rounded-full relative cursor-pointer animate-in"
                    style={{ width: `${cockSize}%`, transform: shouldCum ? "rotate(30deg)" : "", transition: "1s ease-in-out" }}
                    onClick={handleCockSizeChange}
                >

                    <div className={
                        cn("bg-rio_strawberry_milkshake absolute -left-10 -top-12 w-36 h-32 rounded-full cursor-grab",
                            cockSize === 100 && !isLeftBallScratched ? "animate-pulse" : ""
                        )}
                        onClick={handleScratchLeftBall}
                        >

                    </div>
                    <div className={
                        cn("bg-rio_strawberry_milkshake absolute -left-10 -bottom-12 w-36 h-32 rounded-full cursor-grabbing",
                            cockSize > 80 && !isRightBallScratched ? "animate-pulse" : ""
                        )}
                        onClick={handleScrachRightBall}
                        >

                    </div>
                    <div className="ml-auto mr-16">
                        <div className="bg-white h-28 w-2 rounded-full"></div>
                    </div>
                    <div className="bg-white w-16 h-2"></div>
                </div>
                <div className="bg-rio_lolipop flex flex-col gap-4 w-full h-64 m-12 mt-24 rounded-3xl">
                    <p>{horoscope.description}</p>
                </div>
                <div className="bg-rio_confetti_cake flex flex-col gap-4 w-full h-60">
                    {/* <h1>{sign}</h1> */}
                </div>
                <div className="bg-rio-confetti-cake flex flex-col gap-4 w-full h-40">
                    {/* <h1>{sign}</h1> */}
                </div>
            </div>

        </div>
    );
}

export default HoroscopeInfoPage;