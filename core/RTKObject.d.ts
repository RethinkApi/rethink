export declare abstract class RTKObject {
    private static _obj_id;
    private obj_id;
    private randonString;
    private _hashcode;
    constructor();
    /**
     * Initializes this object with the necessary values to generate the hashcode
     */
    _initialize(): RTKObject;
    cast<T>(): T;
    static cast<T>(obj: any): T;
    /**
     * Returns the hashcode of this object
     */
    readonly hashcode: string;
    deepClone<T extends RTKObject>(): T;
    /**
     * Returns the constructor of this object
     */
    readonly classConstructor: new (...args: any[]) => RTKObject;
    /**
     * Returns the typeof this object
     */
    readonly type: string;
    /**
     * Returns class name of this object
     */
    readonly className: string;
    /**
     * Returns the prototype of this object
     */
    readonly prototype: any;
    /**
     * check if this object is instance of given class
     */
    instanceOf<T extends RTKObject>(clazz: new (...args) => T): boolean;
    json(interceptor?: (key: string, value: any) => any): string;
}
