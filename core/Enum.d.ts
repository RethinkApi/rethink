import { RTKObject } from './RTKObject';
export declare abstract class Enum extends RTKObject {
    private _name;
    private enumInfo;
    private static _values;
    constructor(name: string, enumInfo: EnumInfo);
    readonly name: string;
    readonly label: string;
    static values<T extends Enum>(): T[];
    static parse<T extends Enum>(value: any): T;
    json(): string;
    deepClone(): any;
}
export interface EnumInfo {
    [key: string]: string;
}
