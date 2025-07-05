import { Request, Response } from "express";

export interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: Request, response: Response): void;
}