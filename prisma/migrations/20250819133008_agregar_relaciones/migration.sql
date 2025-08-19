/*
  Warnings:

  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `categoria`;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(40) NOT NULL,
    `correo` VARCHAR(40) NOT NULL,
    `contrasena` VARCHAR(40) NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `activo` BOOLEAN NOT NULL,
    `rol_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(40) NOT NULL,
    `esPredeterminada` BOOLEAN NOT NULL,
    `tipoPredeterminada` VARCHAR(40) NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `activo` BOOLEAN NOT NULL,
    `usuario_Id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_rol_id_fkey` FOREIGN KEY (`rol_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categorias` ADD CONSTRAINT `categorias_usuario_Id_fkey` FOREIGN KEY (`usuario_Id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
