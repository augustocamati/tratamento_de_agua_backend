/*
  Warnings:

  - You are about to drop the column `userId` on the `Card` table. All the data in the column will be lost.
  - Added the required column `proprietario` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldo` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_userId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "userId",
ADD COLUMN     "proprietario" TEXT NOT NULL,
ADD COLUMN     "saldo" DOUBLE PRECISION NOT NULL;
