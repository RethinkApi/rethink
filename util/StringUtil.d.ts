export declare abstract class StringUtil {
    static isNullEmptyOrUndefined(value: string): boolean;
    static isNotNullNotEmptyOrUndefined(value: string): boolean;
    static toInt(value: string): number;
    static randomString(length: any, type?: RandomStringType): string;
}
export declare enum RandomStringType {
    ALPHA = 0,
    NUMERIC = 1,
    ALPHANUMERIC = 2,
}
