import { RTKException } from './RTKException';
export declare class ServerErrorException extends RTKException {
    constructor(developerMessage: string, code: number);
}
