import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MotivacionesModule } from './motivaciones/motivaciones.module';
import { PromesasModule } from './promesas/promesas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FallosModule } from './fallos/fallos.module';
import { PrismaModule } from './prisma/prisma.module';
import { BrandsModule } from './brands/brands.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [CustomersModule, UsuariosModule, MotivacionesModule, PromesasModule, CategoriasModule, FallosModule, PrismaModule, BrandsModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
