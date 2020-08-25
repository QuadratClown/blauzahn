import { Bluez } from "../bluez";
import { OrgfreedesktopDBusObjectManager } from "./generated/org-freedesktop-DBus-ObjectManager";
import { BaseInterface } from "./models/base-interface";
import { path, dict, Variant } from "../types";
import { Signal } from "./models/signal";
export declare class DBusObjectManager extends BaseInterface<OrgfreedesktopDBusObjectManager> {
    /**
    * Hide constructor, initialization shall be done asynchronously with connect
    */
    private constructor();
    static connect(bluez: Bluez, path: String): Promise<DBusObjectManager>;
    getManagedObjects(): Promise<any>;
    InterfacesAdded: Signal<{
        path: path;
        objects: dict<string, dict<string, Variant>>;
    }>;
    InterfacesRemoved: Signal<{
        path: path;
        interfaceNames: Array<string>;
    }>;
}
//# sourceMappingURL=dbus-object-manager.d.ts.map