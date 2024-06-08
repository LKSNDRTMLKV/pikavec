/*
  Warnings:

  - You are about to drop the `HoroscopeCompatibility` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `planet` to the `DailyHoroscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eclipticLongitudeA` to the `Horoscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eclipticLongitudeB` to the `Horoscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `element` to the `Horoscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloss` to the `Horoscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planet` to the `Horoscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `polarity` to the `Horoscope` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HoroscopeElement" AS ENUM ('FIRE', 'EARTH', 'AIR', 'WATER');

-- CreateEnum
CREATE TYPE "HoroscopePlanet" AS ENUM ('SUN', 'MOON', 'MERCURY', 'VENUS', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO');

-- DropForeignKey
ALTER TABLE "HoroscopeCompatibility" DROP CONSTRAINT "HoroscopeCompatibility_signAId_fkey";

-- DropForeignKey
ALTER TABLE "HoroscopeCompatibility" DROP CONSTRAINT "HoroscopeCompatibility_signBId_fkey";

-- AlterTable
ALTER TABLE "DailyHoroscope" ADD COLUMN     "planet" "HoroscopePlanet" NOT NULL;

-- AlterTable
ALTER TABLE "Horoscope" ADD COLUMN     "eclipticLongitudeA" INTEGER NOT NULL,
ADD COLUMN     "eclipticLongitudeB" INTEGER NOT NULL,
ADD COLUMN     "element" TEXT NOT NULL,
ADD COLUMN     "gloss" TEXT NOT NULL,
ADD COLUMN     "planet" TEXT NOT NULL,
ADD COLUMN     "polarity" TEXT NOT NULL;

-- DropTable
DROP TABLE "HoroscopeCompatibility";

-- CreateTable
CREATE TABLE "CompatibilityHoroscope" (
    "id" TEXT NOT NULL,
    "signAId" TEXT NOT NULL,
    "signBId" TEXT NOT NULL,
    "compatibility" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "sex" TEXT,
    "friendship" TEXT,
    "family" TEXT,
    "work" TEXT,
    "love" TEXT,
    "planets" TEXT,
    "paragraph" TEXT,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompatibilityHoroscope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanetHoroscope" (
    "id" TEXT NOT NULL,
    "planet" TEXT NOT NULL,
    "enum" "HoroscopePlanet" NOT NULL,
    "description" TEXT NOT NULL,
    "nature" TEXT NOT NULL,
    "keywords" TEXT[],
    "transition" TEXT NOT NULL,
    "within" TEXT[],
    "life" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanetHoroscope_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompatibilityHoroscope_signAId_signBId_key" ON "CompatibilityHoroscope"("signAId", "signBId");

-- AddForeignKey
ALTER TABLE "CompatibilityHoroscope" ADD CONSTRAINT "CompatibilityHoroscope_signAId_fkey" FOREIGN KEY ("signAId") REFERENCES "Horoscope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompatibilityHoroscope" ADD CONSTRAINT "CompatibilityHoroscope_signBId_fkey" FOREIGN KEY ("signBId") REFERENCES "Horoscope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
