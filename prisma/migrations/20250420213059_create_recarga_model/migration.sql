-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Ativo',
ADD COLUMN     "tipo" TEXT NOT NULL DEFAULT 'Residencial';

-- CreateTable
CREATE TABLE "Recarga" (
    "id" SERIAL NOT NULL,
    "cartaoId" INTEGER NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "metodo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recarga_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recarga" ADD CONSTRAINT "Recarga_cartaoId_fkey" FOREIGN KEY ("cartaoId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
