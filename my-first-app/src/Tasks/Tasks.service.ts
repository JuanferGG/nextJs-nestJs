import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
    //! User[] ---> indica que es un array de objetos de tipo User
  private tasks: User[] = [];

  getTasks(): User[] {
    return this.tasks;
  }

  createTask(task: User) {
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
