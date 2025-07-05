import { NextFunction, Request, Response } from "express";
import { CheckTokenValidHandler, Handler } from "../validationChain";
import { ProxyBase } from "./proxybase";

export class AuthProxy implements ProxyBase{
    private chain: Handler;

    constructor() {
        const valid = new CheckTokenValidHandler();
        this.chain = valid;
    }


    verifyTokenExist(request: Request, response: Response, next: NextFunction): void {
        if (!request.headers.authorization) {
            throw new Error("Token no enviado.");
        }
        this.handle(request, response, next)
    }

    public handle(req: Request, res: Response, next: Function) {
        try {
            this.chain.handle(req, res);
            next();
        } catch (err) {
            res.status(401).json({ err });
        }
    }
}