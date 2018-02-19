/// <reference types="express" />
import { Request, Response, NextFunction } from 'express';
import { RTKException } from '../core/exception';
export declare class ErrorHandler {
    static handler(error: Error | RTKException, request: Request, response: Response, next: NextFunction): void;
    static handleError(response: Response, error: Error | RTKException): void;
    static printStack(error: Error): void;
}
