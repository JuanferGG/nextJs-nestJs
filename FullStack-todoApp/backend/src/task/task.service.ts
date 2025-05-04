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

    // Si hay una nueva imagen y la tarea actual tiene una imagen que no es la predeterminada
    if (image && existingTask.image && existingTask.image !== '/uploads/tasks/default_task.jpg') {
      try {
        const imagePath = join(process.cwd(), existingTask.image);
        await unlink(imagePath);
      } catch (error) {
        console.error('Error al eliminar la imagen anterior:', error);
      }
    }

    // Actualizar la tarea con los nuevos datos y la nueva imagen si existe
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

    // Eliminar la imagen si existe y no es la imagen por defecto
    if (TaskFound.image && TaskFound.image !== '/uploads/tasks/default_task.jpg') {
      try {
        const imagePath = join(process.cwd(), TaskFound.image);
        await unlink(imagePath);
      } catch (error) {
        console.error('Error al eliminar la imagen:', error);
      }
    }

    await this.TaskModel.findByIdAndDelete(id);

    return { message: 'Tarea eliminada exitosamente' };
  }
}
