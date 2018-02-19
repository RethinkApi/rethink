export declare class RTKException {
    protected _developerMessage: string;
    protected _code: number;
    protected _statusCode: number;
    constructor(developerMessage: string, code: number, statusCode: number);
    readonly developerMessage: string;
    readonly code: number;
    readonly statusCode: number;
    toJSON(): any;
}
