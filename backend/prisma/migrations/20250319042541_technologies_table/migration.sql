/*
  Warnings:

  - You are about to drop the column `highlighted` on the `technologies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "highlighted",
ADD COLUMN     "highlight" BOOLEAN NOT NULL DEFAULT false;
