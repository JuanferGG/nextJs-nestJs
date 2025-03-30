import { Controller, Get } from '@nestjs/common';
import { TasksService } from './Tasks.service';

@Controller("tasks")
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/GetTasks')
  getAllTasks() {
    return this.tasksService.getTasks();
  }
}
