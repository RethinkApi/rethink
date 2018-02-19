"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("../util/StringUtil");
var ObjectUtil_1 = require("../util/ObjectUtil");
var _ = require("lodash");
var Reflect = window['Reflect'];
var RTKObject = /** @class */ (function () {
    function RTKObject() {
        this._initialize();
    }
    /**
     * Initializes this object with the necessary values to generate the hashcode
     */
    RTKObject.prototype._initialize = function () {
        if (ObjectUtil_1.ObjectUtil.isBlank(this.obj_id) || StringUtil_1.StringUtil.isNullEmptyOrUndefined(this.randonString)) {
            RTKObject._obj_id++;
            this.obj_id = RTKObject._obj_id;
            this.randonString = StringUtil_1.StringUtil.randomString(16, StringUtil_1.RandomStringType.ALPHANUMERIC);
        }
        return this;
    };
    RTKObject.prototype.cast = function () {
        return RTKObject.cast(this);
    };
    RTKObject.cast = function (obj) {
        return obj;
    };
    Object.defineProperty(RTKObject.prototype, "hashcode", {
        /**
         * Returns the hashcode of this object
         */
        get: function () {
            if (StringUtil_1.StringUtil.isNullEmptyOrUndefined(this._hashcode)) {
                this._hashcode = btoa(typeof this
                    + this.obj_id
                    + this.randonString);
            }
            return this._hashcode;
        },
        enumerable: true,
        configurable: true
    });
    RTKObject.prototype.deepClone = function () {
        var _this = this;
        return RTKObject.cast(_.cloneDeepWith(this, function (element) {
            if (element != _this && element instanceof RTKObject) {
                return element.deepClone();
            }
        })._initialize());
    };
    Object.defineProperty(RTKObject.prototype, "classConstructor", {
        /**
         * Returns the constructor of this object
         */
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTKObject.prototype, "type", {
        /**
         * Returns the typeof this object
         */
        get: function () {
            return typeof this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTKObject.prototype, "className", {
        /**
         * Returns class name of this object
         */
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTKObject.prototype, "prototype", {
        /**
         * Returns the prototype of this object
         */
        get: function () {
            return Object.getPrototypeOf(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * check if this object is instance of given class
     */
    RTKObject.prototype.instanceOf = function (clazz) {
        return this instanceof clazz;
    };
    RTKObject.prototype.json = function (interceptor) {
        var _this = this;
        return JSON.stringify(this, function (key, value) {
            if ("" === key) {
                return value;
            }
            if (value === '') {
                return null;
            }
            var writable = Reflect.getMetadata('writable', _this, key);
            if (ObjectUtil_1.ObjectUtil.isPresent(writable)) {
                if (!writable) {
                    return null;
                }
            }
            if (ObjectUtil_1.ObjectUtil.isPresent(interceptor)) {
                var interceptedValue = interceptor(key, value);
                if (StringUtil_1.StringUtil.isNotNullNotEmptyOrUndefined(interceptedValue)) {
                    return interceptedValue;
                }
            }
            if (value instanceof RTKObject) {
                return value.json();
            }
            if (value instanceof Date) {
                return value.getTime();
            }
            return value;
        });
    };
    RTKObject._obj_id = 0;
    return RTKObject;
}());
exports.RTKObject = RTKObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlRLT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUlRLT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWtFO0FBQ2xFLGlEQUFnRDtBQUNoRCwwQkFBNEI7QUFFNUIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWhDO0lBTUk7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUMsQ0FBQyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsNkJBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHdCQUFJLEdBQVg7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRWEsY0FBSSxHQUFsQixVQUFzQixHQUFRO1FBQzFCLE1BQU0sQ0FBQyxHQUFRLENBQUM7SUFDcEIsQ0FBQztJQUtELHNCQUFXLCtCQUFRO1FBSG5COztXQUVHO2FBQ0g7WUFDSSxFQUFFLENBQUMsQ0FBQyx1QkFBVSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUNqQixPQUFPLElBQUk7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