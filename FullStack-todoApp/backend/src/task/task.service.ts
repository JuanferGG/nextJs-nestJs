import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  // TODO: Crear una tarea
  async create(
    createTaskDto: CreateTaskDto,
    image?: Express.Multer.File,
  ): Promise<{ message: string; task: Task }> {
    const createdTask = new this.TaskModel({
      ...createTaskDto,
      image: image ? `/uploads/tasks/${image.filename}` : undefined,
    });
    const savedTask = await createdTask.save();
    return {
      message: 'Tarea creada exitosamente',
      task: savedTask,
    };
  }

  // TODO: Obtener todas las tareas
  async findAll() {
    return await this.TaskModel.find().exec();
  }

  // TODO: Obtener una tarea por id
  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Formato de id inválido');
    }
    const TaskFound = await this.TaskModel.findById(id);

    if (!TaskFound) {
      throw new BadRequestException('Tarea no encontrada');
    }
    return TaskFound;
  }

  // TODO: Actualizar una tarea por id
  async update(id: string, updateTaskDto: UpdateTaskDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Formato de id inválido');
    }

    const TaskFound = await this.TaskModel.findByIdAndUpdate(id, updateTaskDto);

    if (!TaskFound) {
      throw new BadRequestException('Tarea no encontrada');
    }

    return { message: 'Tarea actualizada exitosamente', TaskFound: TaskFound };
  }

  // TODO: Eliminar una tarea por id
  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Formato de id inválido');
    }

    const TaskFound = await this.TaskModel.findByIdAndDelete(id);

    if (!TaskFound) {
      throw new BadRequestException('Tarea no encontrada');
    }

    return { message: 'Tarea eliminada exitosamente' };
  }
}
