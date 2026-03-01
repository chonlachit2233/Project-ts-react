/*
  Warnings:

  - Made the column `productId` on table `productoncart` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `productoncart` DROP FOREIGN KEY `ProductOnCart_productId_fkey`;

-- DropIndex
DROP INDEX `ProductOnCart_productId_fkey` ON `productoncart`;

-- AlterTable
ALTER TABLE `productoncart` MODIFY `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ProductOnCart` ADD CONSTRAINT `ProductOnCart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
