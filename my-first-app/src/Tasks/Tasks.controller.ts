import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService, TypeTask } from './Tasks.service';

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

  @Get('/GetTask/:id')
  getTask(@Param('id') id: string) {
    // console.log(id)
    return this.tasksService.getTask(parseInt(id)); 
  }

  // TODO un query es un objeto con los parametros de la url.
  // ? Ejemplo: http://localhost:3000/tasks/GetTaskQuery?limit=2
  // ? Ejemplo: URL_ADDRESS:3000/tasks/GetTaskQuery?id=1&name=jose&apellido=ma
  @Get('/GetTaskQuery')
  getTaskQuery(@Query() query : any) {
    console.log(query)
    return this.tasksService.getTasks();
  }
  
  @Get('/GetTest')
  getTest() {
    return this.tasksService.tesTing();
  }

  @Post('/PostTask')
  createTask(@Body() task: TypeTask) {
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
