import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateTaskDto {
  // TODO Titulo de la tarea
  @ApiProperty({
    description: 'The title of the task',
    default: 'Titulo por defecto',
    minLength: 4,
  })
  @IsString()
  @MinLength(4)
  title: string;

  // TODO Descripcion de la tarea
  @ApiProperty({
    description: 'The description of the task',
    default: 'Descripcion por defecto',
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
  @Transform(({ value }) =>{
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  status?: boolean = true;

  // TODO Prioridad de la tarea
  @ApiProperty({
    description: 'The priority of the task',
    default: 'low',
    enum: ['low', 'medium', 'high'],
  })
  @IsString()
  @IsOptional()
  priority?: 'low' | 'medium' | 'high' = 'low';

  // TODO Imagen de la tarea
  @ApiProperty({
    description: 'The image of the task',
    type: 'string',
    format: 'binary',
    required: false
  })
  @IsOptional()
  image?: Express.Multer.File | string;
}
