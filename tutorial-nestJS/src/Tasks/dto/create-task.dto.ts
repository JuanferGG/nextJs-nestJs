import { IsNumber, IsString, IsBoolean, MinLength } from 'class-validator';

// TODO puede ser class o interface

export class CreateTaskDto {
//   @IsNumber()
//   id?: number;

  @IsString()
  @MinLength(5)
  title: string;

  @IsBoolean()
  status: boolean;
}

