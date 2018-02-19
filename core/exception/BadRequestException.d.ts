import { RTKException } from './RTKException';
export declare class BadRequestException extends RTKException {
    constructor(developerMessage: string, code: number);
}
