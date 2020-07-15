const DBus = require('dbus-next');
const { EventEmitter } = require('events');

/*
 * Generated by dbus-next interface generator
 * Template: javascript-class.js.hbs
 */

// Introspection XML of org.bluez at /org/bluez/*
const XMLObjectData = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN"
"http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">
<node><interface name="org.freedesktop.DBus.Introspectable"><method name="Introspect"><arg name="xml" type="s" direction="out"/>
</method></interface><interface name="org.bluez.GattDescriptor1"><method name="ReadValue"><arg name="options" type="a{sv}" direction="in"/>
<arg name="value" type="ay" direction="out"/>
</method><method name="WriteValue"><arg name="value" type="ay" direction="in"/>
<arg name="options" type="a{sv}" direction="in"/>
</method><property name="UUID" type="s" access="read"></property><property name="Characteristic" type="o" access="read"></property><property name="Value" type="ay" access="read"></property></interface><interface name="org.freedesktop.DBus.Properties"><method name="Get"><arg name="interface" type="s" direction="in"/>
<arg name="name" type="s" direction="in"/>
<arg name="value" type="v" direction="out"/>
</method><method name="Set"><arg name="interface" type="s" direction="in"/>
<arg name="name" type="s" direction="in"/>
<arg name="value" type="v" direction="in"/>
</method><method name="GetAll"><arg name="interface" type="s" direction="in"/>
<arg name="properties" type="a{sv}" direction="out"/>
</method><signal name="PropertiesChanged"><arg name="interface" type="s"/>
<arg name="changed_properties" type="a{sv}"/>
<arg name="invalidated_properties" type="as"/>
</signal>
</interface></node>`;

/**
 * Service: org.bluez
 * ObjectPath: /org/bluez/*
 * Interface: org.bluez.GattDescriptor1
 */
export class GattDescriptor1 extends EventEmitter {

    static Connect(bus, objectPath, xml) { 
        if(!objectPath) { objectPath = "/org/bluez/*"; }
        if(!xml) { xml = XMLObjectData; }
        return bus.getProxyObject('org.bluez', objectPath, xml).then((obj) => new GattDescriptor1(obj));
    }

    constructor(dbusObject) {
        super();
        this.dbusInterfaceName = 'org.bluez.GattDescriptor1';
        this.dbusObject = dbusObject;
        this.thisDBusInterface = dbusObject.getInterface('org.bluez.GattDescriptor1');
        this.propertiesDBusInterface = dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface, changed, invalidated) => {
            if(iface === this.dbusInterfaceName) {
                this.emit('PropertiesChanged', iface, changed, invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event, listener) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.on('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.on(event, listener);
            }
        });
        this.on("removeListener", (event, listener) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.removeListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }

    /***** Properties *****/

    getProperties() {
        return this.propertiesDBusInterface.GetAll(this.dbusInterfaceName);
    }

    getProperty(name) {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, name);
    }

    setProperty(name, value) {
        return this.propertiesDBusInterface.Set(this.dbusInterfaceName, name, value);
    }

    //@property({ name: 'UUID', signature: 's', access: ACCESS_READ })
    UUID() {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'UUID').then((variant) => variant.value);
    }

    //@property({ name: 'Characteristic', signature: 'o', access: ACCESS_READ })
    Characteristic() {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Characteristic').then((variant) => variant.value);
    }

    //@property({ name: 'Value', signature: 'ay', access: ACCESS_READ })
    Value() {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Value').then((variant) => variant.value);
    }


    /***** Methods *****/

    //@method({ name: 'ReadValue', inSignature: 'a{sv}', outSignature: 'ay' })
    ReadValue(options, ) {
        return this.thisDBusInterface.ReadValue(options, );
    }

    //@method({ name: 'WriteValue', inSignature: 'aya{sv}', outSignature: '' })
    WriteValue(value, options) {
        return this.thisDBusInterface.WriteValue(value, options);
    }



    /***** Signals for org.bluez.GattDescriptor1 *****/
}

