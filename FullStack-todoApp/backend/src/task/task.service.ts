import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  private async deleteImage(imagePath: string): Promise<void> {
    if (imagePath && imagePath !== '/uploads/tasks/default_task.jpg') {
      try {
        const fullPath = join(process.cwd(), imagePath);
        await unlink(fullPath);
      } catch (error) {
        console.error('Error al eliminar la imagen:', error);
      }
    }
  }

  // TODO: Crear una tarea
  async create(
    createTaskDto: CreateTaskDto,
    image?: Express.Multer.File,
  ): Promise<{ message: string; task: Task }> {
    const createdTask = new this.TaskModel({
      ...createTaskDto,
      image: image ? `/uploads/tasks/${image.filename}` : '/uploads/tasks/default_task.jpg',
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
  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
    image?: Express.Multer.File,
  ) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Formato de id inválido');
    }

    const existingTask = await this.TaskModel.findById(id);
    if (!existingTask) {
      throw new BadRequestException('Tarea no encontrada');
    }

    // TODO: Si hay una nueva imagen, eliminar la imagen anterior
    if (image) {
      await this.deleteImage(existingTask.image);
    }

    // TODO Actualizar la tarea con los nuevos datos y la nueva imagen si existe
    const updatedTask = await this.TaskModel.findByIdAndUpdate(
      id,
      {
        ...updateTaskDto,
        image: image ? `/uploads/tasks/${image.filename}` : existingTask.image,
      },
      { new: true },
    );

    return { 
      message: 'Tarea actualizada exitosamente', 
      task: updatedTask 
    };
  }

  // TODO: Eliminar una tarea por id
  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Formato de id inválido');
    }

    const TaskFound = await this.TaskModel.findById(id);

    if (!TaskFound) {
      throw new BadRequestException('Tarea no encontrada');
    }

    // TODO: Eliminar la imagen asociada
    await this.deleteImage(TaskFound.image);

    await this.TaskModel.findByIdAndDelete(id);

    return { message: 'Tarea eliminada exitosamente' };
  }
}
