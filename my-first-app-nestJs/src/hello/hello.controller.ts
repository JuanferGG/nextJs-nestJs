import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller('/hello') //! -------> si se tiene algo aqui, al inicio se pone el nombre de la ruta
export class HelloController {

    @Get('/saludar')
    getHello(@Req() req: Request, @Res() res: Response) {
        console.log(req.url)
        res.status(200).json({ msg: 'Hello World!' })
    }

    @Get('/notFound')
    @HttpCode(400)
    getNotFound(){
        return { msg: 'Not Found' }
    }

    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
        return num + 10
    }

    @Get('/active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status)
        return status
    }

    @Get('/greet')
    getGreet(@Query(ValidateUserPipe) query: { name: string, age: number }) {
        console.log(typeof query.name)
        console.log(typeof query.age)
        return {
            msg: `Hello ${query.name} you are ${query.age} years old`
        }
    }
}
