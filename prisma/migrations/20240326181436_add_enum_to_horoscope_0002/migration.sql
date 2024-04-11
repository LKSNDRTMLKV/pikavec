/*
  Warnings:

  - Added the required column `enum` to the `Horoscope` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Horoscope" ADD COLUMN     "enum" "HoroscopeSign" NOT NULL;
