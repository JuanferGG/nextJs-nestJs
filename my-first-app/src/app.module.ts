import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { TasksModule } from  './Tasks/Tasks.module'


@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],  // ! ---> Modulos en los imports
  controllers: [HelloController],
})
export class AppModule {} 
