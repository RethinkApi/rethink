import { Entity } from './Entity';
import { AbstractController } from './AbstractController';
export declare abstract class RegistrationController<T extends Entity> extends AbstractController<T> {
    constructor();
    abstract create(): Promise<any>;
    abstract update(): Promise<any>;
    abstract delete(): Promise<any>;
}
