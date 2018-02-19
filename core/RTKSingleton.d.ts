import { RTKObject } from './RTKObject';
export declare class RTKSingleton extends RTKObject {
    private static _instance;
    protected constructor();
    static instance<E>(): E;
}
