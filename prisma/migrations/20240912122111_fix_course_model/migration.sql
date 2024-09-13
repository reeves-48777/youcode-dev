/*
  Warnings:

  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
