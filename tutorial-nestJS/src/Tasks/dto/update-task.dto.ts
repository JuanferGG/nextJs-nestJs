import { IsBoolean, IsString, isString, MinLength } from "class-validator";

export class UpdateTaskDto {
    
    @IsString()
    @MinLength(5)
    title?: string;

    @IsBoolean()
    status?: boolean;
}