import { Controller, Get } from '@nestjs/common';

@Controller('hello') //! -------> si se tiene algo aqui, al inicio se pone el nombre de la ruta
export class HelloController {

    @Get('/saludar')
    getHello() {
        return 'Home Page';
    }
}
