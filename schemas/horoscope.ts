import { horoscopeMessages } from "@/constants/admin/horoscope";
import { z } from "zod";

//Horoscope schema
export const horoscopeFormSchema = z.object({
  sign: z.string().min(1, { message: horoscopeMessages.missingSign }),
  description: z.string().min(1, { message: horoscopeMessages.missingDescription }),
  dateStart: z.date(),
  dateEnd: z.date(),
  sexDrive: z.number().nullable(),
  hustle: z.number().nullable(),
  vibe: z.number().nullable(),
  success: z.number().nullable(),
});

export type HoroscopeFormValues = z.infer<typeof horoscopeFormSchema>;

//Daily schema
export const dailyFormSchema = z.object({
  authorId: z.string().cuid(),
  horoscopeId: z
    .string()
    .cuid({ message: horoscopeMessages.missingHoroscopeId }),
  story: z.string().min(1, { message: horoscopeMessages.missingStory }),
  date: z.date().refine((value) => value > new Date(), {
    message: horoscopeMessages.missingDate,
  }),
  familyDescription: z.string(),
  familyRating: z.number().min(0).max(5).nullable(),
  loveDescription: z.string(),
  loveRating: z.number().min(0).max(5).nullable(),
  healthDescription: z.string(),
  healthRating: z.number().min(0).max(5).nullable(),
  careerDescription: z.string(),
  careerRating: z.number().min(0).max(5).nullable(),
  friendshipDescription: z.string(),
  friendshipRating: z.number().min(0).max(5).nullable(),
  moneyDescription: z.string(),
  moneyRating: z.number().min(0).max(5).nullable(),
  happinessDescription: z.string(),
  happinessRating: z.number().min(0).max(5).nullable(),
  travelDescription: z.string(),
  travelRating: z.number().min(0).max(5).nullable(),
});

export type DailyFormValues = z.infer<typeof dailyFormSchema>;
