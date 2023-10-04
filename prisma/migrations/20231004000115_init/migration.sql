/*
  Warnings:

  - The required column `id` was added to the `Agenda` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agenda" (
    "id" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "nomePcte" TEXT NOT NULL
);
INSERT INTO "new_Agenda" ("data", "nomePcte") SELECT "data", "nomePcte" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
CREATE UNIQUE INDEX "Agenda_id_key" ON "Agenda"("id");
CREATE UNIQUE INDEX "Agenda_data_key" ON "Agenda"("data");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
