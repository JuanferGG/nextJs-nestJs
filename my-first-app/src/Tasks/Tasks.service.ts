import { Injectable } from '@nestjs/common';

export interface User {
    title: string;
    status: number;
}
export interface TypeTask {
    title: string;
    status: boolean;
}

@Injectable()
export class TasksService {
    //! User[] ---> indica que es un array de objetos de tipo User
  private tasks: TypeTask[] = [];

  getTasks(): TypeTask[] {
    return this.tasks;
  }

  createTask(task: TypeTask) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  updateTask() {
    return 'update task';
  }

  deleteTask() {
    return 'delete task';
  }

  updateTaskStatus() {
    return 'actualizando status de la tarea...!';
  }
  tesTing() {
    return 'test ejemplo !';
  }
}
