'use client';

import React from "react";
import {
    TbZodiacAquarius as AquariusIcon,
    TbZodiacAries as AriesIcon,
    TbZodiacCancer as CancerIcon,
    TbZodiacCapricorn as CapricornIcon,
    TbZodiacGemini as GeminiIcon,
    TbZodiacLeo as LeoIcon,
    TbZodiacLibra as LibraIcon,
    TbZodiacPisces as PiscesIcon,
    TbZodiacSagittarius as SagittariusIcon,
    TbZodiacScorpio as ScorpioIcon,
    TbZodiacTaurus as TaurusIcon,
    TbZodiacVirgo as VirgoIcon
} from "react-icons/tb";

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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Horoscope, HoroscopeSign } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HoroscopeProps } from "@/interface/horoscope-props";

const HoroscopeCards: React.FC<{ horoscopes: Horoscope[] }> = ({ horoscopes }) => {
    const router = useRouter();

    const handleNavigation = (id: string) => {
        router.push(`/horoscope/${id}`);
    };

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {horoscopes.map((horoscope) => (
                <HoroscopeCard
                    key={horoscope.id}
                    horoscope={horoscope}
                    handleNavigation={handleNavigation}
                />
            ))}
        </div>
    );
};

const HoroscopeCard: React.FC<{ horoscope: Horoscope; handleNavigation: (id: string) => void }> = ({
    horoscope,
    handleNavigation,
}) => {
    return (
        <Card
            className={`flex flex-col w-[300px] h-[300px] relative z-20 bg-gradient-to-r from-sky-500 to-indigo-500 cursor-pointer`}
            onClick={() => handleNavigation(horoscope.id)}
        >
            <CardHeader className="flex flex-row items-center justify-between z-20 py-2 px-4">
                <CardTitle>{horoscope.sign}</CardTitle>
                <HoroscopeIcon sign={horoscope.enum} />
            </CardHeader>
            <Separator />
            <CardContent>
                <CardDescription>{horoscope.sexDrive}</CardDescription>
            </CardContent>
            <CardFooter>
                <div className=" w-full flex justify-end items-center">
                    {format(horoscope.dateStart, "dd.MMMM")}
                    {" - "}
                    {format(horoscope.dateEnd, "dd.MMMM")}
                </div>
            </CardFooter>
        </Card>
    );
};

const HoroscopePlanet = ({ sign }: { sign: HoroscopeSign }) => {
    switch (sign) {
        case HoroscopeSign.AQUARIUS:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet0} alt="Planet" />;
        case HoroscopeSign.ARIES:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet1} alt="Planet" />;
        case HoroscopeSign.CANCER:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet2} alt="Planet" />;
        case HoroscopeSign.CAPRICORN:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet3} alt="Planet" />;
        case HoroscopeSign.GEMINI:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet4} alt="Planet" />;
        case HoroscopeSign.LEO:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet5} alt="Planet" />;
        case HoroscopeSign.LIBRA:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet6} alt="Planet" />;
        case HoroscopeSign.PISCES:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet7} alt="Planet" />;
        case HoroscopeSign.SAGITTARIUS:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet8} alt="Planet" />;
        case HoroscopeSign.SCORPIO:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet9} alt="Planet" />;
        case HoroscopeSign.TAURUS:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet0} alt="Planet" />;
        case HoroscopeSign.VIRGO:
            return <Image className="w-full h-full absolute top-0 left-0 z-10" src={Planet1} alt="Planet" />;

        default:
            return <div>...Loading</div>;
    }
};

export const HoroscopeIcon = ({ sign, size }: { sign: HoroscopeSign, size?: number }) => {
    switch (sign) {
        case HoroscopeSign.AQUARIUS:
            return <AquariusIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.ARIES:
            return <AriesIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.CANCER:
            return <CancerIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.CAPRICORN:
            return <CapricornIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.GEMINI:
            return <GeminiIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.LEO:
            return <LeoIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.LIBRA:
            return <LibraIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.PISCES:
            return <PiscesIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.SAGITTARIUS:
            return <SagittariusIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.SCORPIO:
            return <ScorpioIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.TAURUS:
            return <TaurusIcon size={size ? size : 50} className="mt-0" />;
        case HoroscopeSign.VIRGO:
            return <VirgoIcon size={size ? size : 50} className="mt-0" />;
        default:
            return <div>...Loading</div>;
    }
};

export default HoroscopeCards;
