import { AbstractHandler } from ".";

export class CheckTokenValidHandler extends AbstractHandler {
    public handle(request: any): void {
        try {
            const token = request.headers.authorization.split(" ")[1];
        } catch (e) {
            throw new Error("Token inválido.");
        }
        super.handle(request);
    }
}