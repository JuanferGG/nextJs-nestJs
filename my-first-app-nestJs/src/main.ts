import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    // TODO Elimina los campos que no estan en el DTO
    whitelist: true,
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
