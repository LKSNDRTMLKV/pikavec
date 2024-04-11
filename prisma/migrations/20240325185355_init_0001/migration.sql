-- CreateEnum
CREATE TYPE "HoroscopeSign" AS ENUM ('ARIES', 'TAURUS', 'GEMINI', 'CANCER', 'LEO', 'VIRGO', 'LIBRA', 'SCORPIO', 'SAGITTARIUS', 'CAPRICORN', 'AQUARIUS', 'PISCES');

-- CreateTable
CREATE TABLE "Horoscope" (
    "id" TEXT NOT NULL,
    "sign" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL,
    "dateEnd" TIMESTAMP(3) NOT NULL,
    "sexDrive" INTEGER,
    "hustle" INTEGER,
    "vibe" INTEGER,
    "success" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Horoscope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyHoroscope" (
    "id" TEXT NOT NULL,
    "horoscopeId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "familyDescription" TEXT,
    "familyRating" INTEGER,
    "loveDescription" TEXT,
    "loveRating" INTEGER,
    "friendshipDescription" TEXT,
    "friendshipRating" INTEGER,
    "careerDescription" TEXT,
    "careerRating" INTEGER,
    "moneyDescription" TEXT,
    "moneyRating" INTEGER,
    "healthDescription" TEXT,
    "healthRating" INTEGER,
    "hapinessDescription" TEXT,
    "hapinessRating" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyHoroscope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HoroscopeCompatibility" (
    "id" TEXT NOT NULL,
    "signAId" TEXT NOT NULL,
    "signBId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "paragraph" TEXT,
    "compatibility" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HoroscopeCompatibility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_horoscopeToImages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_horoscopeToImages_AB_unique" ON "_horoscopeToImages"("A", "B");

-- CreateIndex
CREATE INDEX "_horoscopeToImages_B_index" ON "_horoscopeToImages"("B");

-- AddForeignKey
ALTER TABLE "DailyHoroscope" ADD CONSTRAINT "DailyHoroscope_horoscopeId_fkey" FOREIGN KEY ("horoscopeId") REFERENCES "Horoscope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HoroscopeCompatibility" ADD CONSTRAINT "HoroscopeCompatibility_signAId_fkey" FOREIGN KEY ("signAId") REFERENCES "Horoscope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HoroscopeCompatibility" ADD CONSTRAINT "HoroscopeCompatibility_signBId_fkey" FOREIGN KEY ("signBId") REFERENCES "Horoscope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horoscopeToImages" ADD CONSTRAINT "_horoscopeToImages_A_fkey" FOREIGN KEY ("A") REFERENCES "Horoscope"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horoscopeToImages" ADD CONSTRAINT "_horoscopeToImages_B_fkey" FOREIGN KEY ("B") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
