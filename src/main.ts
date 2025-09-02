import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //pipes: filtros de validacion 
  //   de los datos de entrada 
  //   en este caso para todos los endpoints

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //elimina atributos que no esten en el DTO
      forbidNonWhitelisted: true, //lanza error en caso de que llegue atributos no deseados  
                                 //no listados en un dto
      transform: true // transforma los bosy 
                      //en dtos
    })
  );
  await app.listen(process.env.PORT ?? 3020);
}
bootstrap();
