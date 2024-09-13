/*
  Warnings:

  - You are about to drop the column `user_id` on the `Course` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_user_id_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "user_id",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "image" BYTEA NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
