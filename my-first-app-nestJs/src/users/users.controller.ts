import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UsersController {

    // ! Inyeccion de dependencias de forma abreviada
    constructor(private usersService: UsersService){}

    @Get('/GetUsers')
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/createUser')
    // TODO --> puedo quitar el pipes aqui pues ya lo uso de manera global en el main.ts
    // @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user);
    }
}
