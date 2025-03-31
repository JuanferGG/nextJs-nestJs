import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    // ! Inyeccion de dependencias de forma abreviada
    constructor(private usersService: UsersService){}

    @Get('/GetUsers')
    getUsers(){
        return this.usersService.getUsers();
    }
}
