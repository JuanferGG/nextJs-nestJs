import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

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
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
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
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  // TODO: Eliminar una tarea por id
  @ApiOperation({ summary: 'Elinima una tarea por id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
