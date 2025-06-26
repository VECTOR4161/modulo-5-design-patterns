import { AbstractHandler } from ".";

export class CheckTokenExistsHandler extends AbstractHandler {
    public handle(request: any): void {
        if (!request.headers.authorization) {
            throw new Error("Token no enviado.");
        }
        super.handle(request);
    }
}