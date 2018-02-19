import { ServerErrorException } from './ServerErrorException';
export declare class UnregisteredModelException extends ServerErrorException {
    constructor(developerMessage: string, errorCode: number);
}
