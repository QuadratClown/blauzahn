/// <reference types="node" />
import { EventEmitter } from "events";
import { DBusEventEmitter } from "./dbus-event-emitter";
import { dBusType, dict } from "../../types";
export declare class Signal<T extends dict<string, dBusType>> extends DBusEventEmitter<T> {
    constructor(event: string, eventEmitter: EventEmitter, keyProvider: T);
}
//# sourceMappingURL=signal.d.ts.map