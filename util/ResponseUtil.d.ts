/// <reference types="express" />
import { Response } from 'express';
import { RTKException } from '../core/exception';
import { Entity } from '../core/Entity';
export declare abstract class ResponseUtil {
    static produceResponse(response: Response, error: RTKException): void;
    static getItems<T extends Entity>(jsonArray: any, clazz: new (...args) => T): T[];
    static getItem<T extends Entity>(json: any, clazz: new (...args) => T): T;
}
