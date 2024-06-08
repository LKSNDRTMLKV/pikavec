/*
  Warnings:

  - You are about to drop the column `planet` on the `DailyHoroscope` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DailyHoroscope" DROP COLUMN "planet";

-- CreateTable
CREATE TABLE "Wordle" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wordle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WordleUsers" (
    "id" TEXT NOT NULL,
    "wordleId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "result" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WordleUsers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WordleUsers" ADD CONSTRAINT "WordleUsers_wordleId_fkey" FOREIGN KEY ("wordleId") REFERENCES "Wordle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WordleUsers" ADD CONSTRAINT "WordleUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
