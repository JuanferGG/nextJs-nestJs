import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/hello') //! -------> si se tiene algo aqui, al inicio se pone el nombre de la ruta
export class HelloController {

    @Get('/saludar')
    getHello(@Req() req: Request, @Res() res: Response) {
        console.log(req.url)
        res.status(200).json({ msg: 'Hello World!' })
    }
}
