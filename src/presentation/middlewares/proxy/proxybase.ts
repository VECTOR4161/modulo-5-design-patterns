import { NextFunction, Request, Response } from "express";

export interface ProxyBase {
    handle(req: Request, res: Response, next: Function): void;
    verifyTokenExist(request: Request, response: Response, next: NextFunction): void;
}