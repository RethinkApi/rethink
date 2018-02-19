import { RTKObject } from './RTKObject';
export declare class Entity extends RTKObject {
    constructor();
    id: string;
    /**
     * Returns a boolean representing if a entity is updating or not
     */
    readonly isUpdating: boolean;
    /**
     * Fills this object using the given json
     * @param json The json corresponding this object
     */
    fill(json: any): void;
    json(): string;
}
