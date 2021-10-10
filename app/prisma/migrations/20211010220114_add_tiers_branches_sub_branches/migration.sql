/*
  Warnings:

  - You are about to drop the `SubBranch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_tierId_fkey";

-- DropForeignKey
ALTER TABLE "SubBranch" DROP CONSTRAINT "SubBranch_branchId_fkey";

-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "branchId" TEXT,
ALTER COLUMN "tierId" DROP NOT NULL;

-- DropTable
DROP TABLE "SubBranch";

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_tierId_fkey" FOREIGN KEY ("tierId") REFERENCES "Tier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
