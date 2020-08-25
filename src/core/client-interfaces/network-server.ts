import { Bluez } from "../bluez"
import { NetworkServer1 } from "./generated/NetworkServer1"
import { BaseInterface } from "./models/base-interface"
import { int16, uint16, int32, uint32, byte, path, fileDescriptor, dict } from "../types"
import { Variant } from "dbus-next"

export class NetworkServer extends BaseInterface<NetworkServer1> {
     /**
     * Hide constructor, initialization shall be done asynchronously with connect
     */

    private constructor(bluez: Bluez, internal: NetworkServer1) { super(bluez, internal) }

    static async connect(bluez: Bluez, path: String) {
        return new NetworkServer(bluez, await NetworkServer1.Connect(bluez.bus, path))
    }

    /*
    * Direct mappings to introspected properties, methods and signals of internal NetworkServer1
    */

	//@method({ name: 'Register', inSignature: 'ss', outSignature: '' })
	async register(uuid: String, bridge: String) { return this._internal.Register(uuid, bridge) }

	//@method({ name: 'Unregister', inSignature: 's', outSignature: '' })
	async unregister(uuid: String) { return this._internal.Unregister(uuid) }


}