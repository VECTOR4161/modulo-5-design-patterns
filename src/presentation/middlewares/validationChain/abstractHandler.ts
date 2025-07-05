import { Request, Response } from "express";
import { Handler } from ".";

export abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: Request, response: Response): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request, response);
        }
    }
}