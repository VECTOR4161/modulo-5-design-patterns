import { Request, Response } from "express";
import { AbstractHandler } from ".";
import { JwtAdapter } from "../../../config";

export class CheckTokenValidHandler extends AbstractHandler {
    public handle(request: Request, response: Response): void {
        try {
            const token = request.headers.authorization?.split(" ")[1];
            const validacion = JwtAdapter.validateToken(token!)
            if (validacion == null) response.send('Acceso Denegado Token expirado o incorrecto')
        } catch (e) {
            throw new Error("Token inválido.");
        }
        super.handle(request, response);
    }
}