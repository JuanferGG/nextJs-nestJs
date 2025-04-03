import { isString } from "class-validator";

export interface UpdateTaskDto {
    title?: string;
    status?: boolean;
}