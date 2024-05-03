import { DailyHoroscope, Horoscope, CompatabilityHoroscope } from "@prisma/client";

export interface HoroscopeProps {
    id: string;
    sign: string;
    description: string;
    enum: string;
    logoId?: string;
    logo?: string;
    dateStart: string;
    dateEnd: string;
    sexDrive?: number;
    hustle?: number;
    vibe?: number;
    success?: number;
    dailyHoroscope?: string[];
    horoscopeCompatibilitiesA?: string[];
    horoscopeCompatibilitiesB?: string[];
    createdAt: string;
    updatedAt: string;
}

export interface DailyFormProps {
    initialData?: DailyHoroscope
    horoscopes: Horoscope[]
    userId: string
}

export interface CompatabilityProps {
    initialData?: CompatabilityHoroscope
    horoscopes: Horoscope[]
    userId: string
}
