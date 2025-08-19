/*
  Warnings:

  - You are about to drop the column `name` on the `categoria` table. All the data in the column will be lost.
  - Added the required column `activo` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esPredeterminada` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoPredeterminada` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` DROP COLUMN `name`,
    ADD COLUMN `activo` BOOLEAN NOT NULL,
    ADD COLUMN `esPredeterminada` BOOLEAN NOT NULL,
    ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `nombre` VARCHAR(40) NOT NULL,
    ADD COLUMN `tipoPredeterminada` VARCHAR(40) NOT NULL,
    ADD COLUMN `usuarioId` INTEGER NOT NULL;
