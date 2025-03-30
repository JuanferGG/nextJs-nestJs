import { Module } from '@nestjs/common';
import { TasksController } from './Tasks.controller';
import { TasksService } from './Tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService] // add the TasksService provide
})
export class TasksModule {}
