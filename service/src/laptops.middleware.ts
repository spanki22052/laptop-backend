import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express'

@Injectable()
export class LaptopsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log("Logging Delete request IP", req.ip)
    console.log("Logging Delete request Path", req.path)
    console.log("Logging Delete request Headers", req.headers.cookie)
    next( )
  }
}