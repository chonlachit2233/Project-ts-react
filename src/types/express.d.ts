import { Authcheck } from "./auth-request";

declare  global {
    namespace Express {
        interface Request {
            user? : Authcheck
        }
    }
}

export {}