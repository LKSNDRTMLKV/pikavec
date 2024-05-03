/*
  Warnings:

  - Added the required column `authorId` to the `DailyHoroscope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `story` to the `DailyHoroscope` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DailyHoroscope" ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "story" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DailyHoroscope" ADD CONSTRAINT "DailyHoroscope_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
