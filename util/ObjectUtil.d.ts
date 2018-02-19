export declare abstract class ObjectUtil {
    static cast<T extends Object>(obj: Object): T;
    static isNotEmpty(obj: Object): boolean;
    static isEmpty(obj: Object): boolean;
    static isBlank(obj: any): boolean;
    static isPresent(obj: any): boolean;
}
