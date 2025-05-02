import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';

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
}
