import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService, User } from './Tasks.service';

@Controller("/tasks")
export class TasksController {
  // tasksService: TasksService;

  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }
  constructor(private tasksService: TasksService){}

  @Get('/GetTasks')
  getAllTasks() {
    return this.tasksService.getTasks();
  }
  @Get('/GetTest')
  getTest() {
    return this.tasksService.tesTing();
  }

  @Post('/PostTask')
  createTask(@Body() task: User) {
    return this.tasksService.createTask(task);
  }

  // TODO un put actualiza todos los campos, todo el objeto.
  @Put('/PutTask')
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete('/DeleteTask')
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  // TODO un patch actualiza parcialmente el objeto, campo.
  @Patch('/PatchTask')
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
