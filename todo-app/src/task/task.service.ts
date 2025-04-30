import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  async create(
    createTaskDto: CreateTaskDto,
  ): Promise<{ message: string; task: Task }> {
    const createdTask = new this.TaskModel(createTaskDto);
    const savedTask = await createdTask.save();
    return {
      message: 'Tarea creada exitosamente',
      task: savedTask,
    };
  }

  async findAll() {
    return await this.TaskModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
