import {
  DailyHoroscope,
  Horoscope,
  CompatibilityHoroscope,
  User,
} from "@prisma/client";

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
  initialData?: DailyHoroscope;
  horoscopes: Horoscope[];
  userId: string;
}

export interface DailyColumnProps {
  id: string;
  author: string;
  horoscope: string;
  story: string;
  date: Date;
  createdAt: Date;
  isArchived: boolean;
  isFeatured: boolean;
}

export interface DailyClientProps {
  data: DailyColumnProps[];
  userId: string;
  horoscopes: Horoscope[];
}

export interface CompatibilityProps {
  initialData?: CompatibilityHoroscope;
  horoscopes: Horoscope[];
  userId: string;
}
