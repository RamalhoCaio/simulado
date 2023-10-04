/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "RG" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "id_paciente" TEXT NOT NULL,
    "id_secretaria" TEXT NOT NULL,
    "nome_dent" TEXT NOT NULL,
    "rg_secretaria" INTEGER NOT NULL,
    CONSTRAINT "Consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_id_secretaria_fkey" FOREIGN KEY ("id_secretaria") REFERENCES "Secretaria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agenda" (
    "data" DATETIME NOT NULL,
    "nomePcte" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_id_key" ON "Paciente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_senha_key" ON "Paciente"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_id_key" ON "Secretaria"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_RG_key" ON "Secretaria"("RG");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_key" ON "Consulta"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_id_paciente_key" ON "Consulta"("id_paciente");

-- CreateIndex
CREATE UNIQUE INDEX "Agenda_data_key" ON "Agenda"("data");
