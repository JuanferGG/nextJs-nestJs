import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  // TODO Titulo de la tarea
  @ApiProperty({
    description: 'The title of the task',
    minLength: 4,
  })
  @IsString()
  @MinLength(4)
  title: string;

  // TODO Descripcion de la tarea
  @ApiProperty({
    description: 'The description of the task',
    minLength: 10,
  })
  @IsString()
  @MinLength(10)
  description: string;

  // TODO Estatus de la tarea
  @ApiProperty({
    description: 'The status of the task',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  status: boolean = true;

  // TODO Prioridad de la tarea
  @ApiProperty({
    description: 'The priority of the task',
    default: 'low',
    enum: ['low', 'medium', 'high'],
  })
  @IsString()
  @IsOptional()
  priority: 'low' | 'medium' | 'high' = 'low';
}
