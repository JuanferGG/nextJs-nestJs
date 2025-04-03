import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    title: string;
    status: number;
}
export interface TypeTask {
    id: number;
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

  createTask(task: CreateTaskDto) {
    // console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return this.tasks[this.tasks.length - 1];
  }

  getTask(id: number) {
    const resultFound = this.tasks.find(task => task.id === id);

    if(!resultFound) {
      //* Tambien podemos hacer thown new Error('No se encontro la tarea');, pero esto
      //* termina la ejecucion del programa.
      // ! o algo asi ---> return { msg: 'No se encontro la tarea' }; pero debe ser asi:
      return new NotFoundException(`No se encontro la tarea con el id ${id}`)
    }

    return resultFound;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task)
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
