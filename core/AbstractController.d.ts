import { Entity } from './Entity';
import { RTKObject } from './RTKObject';
export declare abstract class AbstractController<T extends Entity> extends RTKObject {
    entity: T;
    busy: boolean;
    constructor();
    abstract clean(): any;
}
