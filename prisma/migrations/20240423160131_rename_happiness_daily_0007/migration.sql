/*
  Warnings:

  - You are about to drop the column `hapinessDescription` on the `DailyHoroscope` table. All the data in the column will be lost.
  - You are about to drop the column `hapinessRating` on the `DailyHoroscope` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DailyHoroscope" DROP COLUMN "hapinessDescription",
DROP COLUMN "hapinessRating",
ADD COLUMN     "happinessDescription" TEXT,
ADD COLUMN     "happinessRating" INTEGER;
