import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // console.log(req.originalUrl);

    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('No authorization token', 401);
    }

    if (authorization !== '12345') {
      throw new HttpException('Invalid authorization token', 402);
    }

    next();
  }
}
