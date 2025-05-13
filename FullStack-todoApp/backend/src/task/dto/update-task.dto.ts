import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    name: 'title',
    description: 'The title of the task',
    type: String,
    required: false,
  })
  title?: string | undefined;
  @ApiProperty({
    name: 'description',
    description: 'The description of the task',
    type: String,
    required: false,
  })
  description?: string | undefined;
  @ApiProperty({
    name: 'status',
    description: 'The status of the task',
    type: Boolean,
    required: false,
  })
  status?: boolean | undefined;
  @ApiProperty({
    name: 'priority',
    description: 'The priority of the task',
    type: String,
    enum: ['low', 'medium', 'high'],
    required: false,
  })
  priority?: 'low' | 'medium' | 'high' | undefined;
  @ApiProperty({
    description: 'The image of the task',
    default: '/uploads/tasks/default_task.jpg',
  })
  @IsOptional()
  // @IsOptional()
  image?: Express.Multer.File;
}
