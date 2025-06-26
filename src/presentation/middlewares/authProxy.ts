import { CheckTokenExistsHandler, CheckTokenValidHandler, Handler } from "./validationChain";

export class AuthProxy {
    private chain: Handler;

    constructor() {
        const exists = new CheckTokenExistsHandler();
        const valid = new CheckTokenValidHandler();

        exists.setNext(valid);
        this.chain = exists;
    }

    public handle(req: any, res: any, next: Function) {
        try {
            this.chain.handle(req);
            next();
        } catch (err) {
            res.status(401).json({ err });
        }
    }
}