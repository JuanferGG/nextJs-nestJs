import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // TODO --> Esto es para aplicar el middleware a todos los endpoints de users
    // consumer.apply(LoggerMiddleware).forRoutes('/users');

    // ? --> Esto es para aplicar el middleware a un endpoint especifico
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/users/createUser',
      method: RequestMethod.POST,
    });
  }
}
