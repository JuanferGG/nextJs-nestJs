import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './config/multer.config';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { unlink } from 'fs/promises';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // TODO: Crear una tarea
  @ApiOperation({ summary: 'Crear una tarea' })
  @ApiResponse({
    status: 201,
    description:
      'Response: { message: "Tarea creada exitosamente", task: savedTask }',
    example: {
      title: 'Titulo 1',
      description: 'Una descripcion de la tarea',
      status: true,
      priority: 'low',
    },
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateTaskDto,
    description: 'Datos de la tarea con imagen opcional',
  })
  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async create(@Body() body: any, @UploadedFile() image: Express.Multer.File) {
    const dto = plainToInstance(CreateTaskDto, body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      // ⚠️ Si hay errores, y Multer ya subió el archivo, lo borramos (opcional)
      if (image?.path) {
        // Usar 'fs' para eliminar la imagen subida por error
        await unlink(image.path);
      }

      const formattedErrors = errors.flatMap((err) => {
        return Object.entries(err.constraints || {}).map(([key, msg]) => ({
          field: err.property,
          type: key,
          message: msg,
        }));
      });

      throw new BadRequestException(formattedErrors);
    }

    // ✅ Solo llegamos aquí si todo está validado correctamente
    return this.taskService.create(dto, image);
  }

  // TODO: Obtener todas las tareas
  @ApiOperation({ summary: 'Obtiene Todas las tareas' })
  @ApiResponse({
    status: 200,
    description: 'Response: [ tasks ]',
    example: [
      {
        title: 'Titulo 1',
        description: 'Una descripcion de la tarea',
        status: true,
        priority: 'low',
      },
      {
        title: 'Titulo 2',
        description: 'Una descripcion de la tarea',
        status: true,
        priority: 'low',
      },
    ],
  })
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  // TODO: Obtener una tarea por id
  @ApiOperation({ summary: 'Obtiene una tarea por id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  // TODO: Actualizar una tarea por id
  @ApiOperation({ summary: 'Actualiza toda la tarea mediante id' })
  @ApiConsumes('multipart/form-data')
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async update(
    @Param('id') id: string,
    @Body() body: any,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const dto = plainToInstance(UpdateTaskDto, body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      // ⚠️ Si hay errores, y Multer ya subió el archivo, lo borramos (opcional)
      if (image?.path) {
        // Usar 'fs' para eliminar la imagen subida por error
        await unlink(image.path);
      }

      const formattedErrors = errors.flatMap((err) => {
        return Object.entries(err.constraints || {}).map(([key, msg]) => ({
          field: err.property,
          type: key,
          message: msg,
        }));
      });

      throw new BadRequestException(formattedErrors);
    }

    return this.taskService.update(id, dto, image);
  }

  // TODO: Eliminar una tarea por id
  @ApiOperation({ summary: 'Elinima una tarea por id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
