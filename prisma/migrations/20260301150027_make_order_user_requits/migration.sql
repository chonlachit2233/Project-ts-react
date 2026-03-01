-- AlterTable
ALTER TABLE `cart` MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `image` MODIFY `productId` INTEGER NULL;

-- AlterTable
ALTER TABLE `order` MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `categoryId` INTEGER NULL;
