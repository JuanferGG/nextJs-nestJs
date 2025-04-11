import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';
import { TasksModule } from './Tasks/Tasks.module';

@Module({
  imports: [
    TasksModule,
    ProjectsModule,
    AuthModule,
    UsersModule,
    PaymentsModule,
    // MongooseModule.forRoot('mongodb+srv://adminadmin:asd1003993886@ejemplo.d4hqtmn.mongodb.net/nestJS'),
  ], // ! ---> Modulos en los imports
  controllers: [HelloController],
})
export class AppModule {}
