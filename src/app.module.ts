import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MotivacionesModule } from './motivaciones/motivaciones.module';
import { PromesasModule } from './promesas/promesas.module';

@Module({
  imports: [CustomersModule, UsuariosModule, MotivacionesModule, PromesasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
