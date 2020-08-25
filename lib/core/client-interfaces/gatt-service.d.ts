import { Bluez } from "../bluez";
import { GattService1 } from "./generated/GattService1";
import { BaseInterface } from "./models/base-interface";
import { ReadOnlyProperty } from "./models/property";
import { path, Variant, dBusType } from "../types";
import { RetryOptions, InterfaceFilterSet } from "../helper";
import { GattCharacteristic } from "./gatt-characteristic";
export declare class GattService extends BaseInterface<GattService1> {
    /**
    * Hide constructor, initialization shall be done asynchronously with connect
    */
    private constructor();
    static connect(bluez: Bluez, path: String): Promise<GattService>;
    /**
     * Get information about all characteristics.
     *
     * @returns An object of the format {'characteristic_path' : data}.
     */
    getCharacteristicsRaw(): Promise<{
        [K in path]: any;
    }>;
    /**
    * Get a characteristic that matches the given filter.
    *
    * @param filter filter by any given property of `GattCharacteristic`, usally by UUID.
    * @param retryOptions retry this operation with a given number of times and interval in ms.
    *
    * @returns `GattCharacteristic` object or undefined.
    * If multiple services match the filter, the first one is returned.
    */
    getCharacteristic(filter?: InterfaceFilterSet<GattCharacteristic>, options?: RetryOptions): Promise<GattCharacteristic | undefined>;
    /**
     * Get all properties.
     *
     * @returns properties with their respective names and values.
     */
    getAllProperties(): Promise<{
        [K in string]: dBusType;
    }>;
    /**
     * Get all properties as `Variant`s.
     *
     * @returns properties with their respective names, values and signature.
     */
    getAllPropertiesAsVariants(): Promise<{
        [K in string]: Variant;
    }>;
    UUID: ReadOnlyProperty<string>;
    Device: ReadOnlyProperty<string>;
    Primary: ReadOnlyProperty<boolean>;
    Includes: ReadOnlyProperty<string[]>;
}
//# sourceMappingURL=gatt-service.d.ts.map