"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RTKObject_1 = require("./RTKObject");
var ObjectUtil_1 = require("../util/ObjectUtil");
var StringUtil_1 = require("../util/StringUtil");
var Enum_1 = require("./Enum");
var Reflect = window['Reflect'];
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Entity.prototype, "isUpdating", {
        /**
         * Returns a boolean representing if a entity is updating or not
         */
        get: function () {
            return ObjectUtil_1.ObjectUtil.isPresent(this.id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fills this object using the given json
     * @param json The json corresponding this object
     */
    Entity.prototype.fill = function (json) {
        if (ObjectUtil_1.ObjectUtil.isBlank(json)) {
            return;
        }
        var _loop_1 = function (propertyName) {
            if (propertyName === "createdAt") {
                console.log();
            }
            var value = json[propertyName];
            if (ObjectUtil_1.ObjectUtil.isBlank(value) || ObjectUtil_1.ObjectUtil.isPresent(value.id)) {
                return "continue";
            }
            var type = Reflect.getMetadata("design:type", this_1, propertyName);
            if (ObjectUtil_1.ObjectUtil.isPresent(type)) {
                if (type.prototype instanceof Enum_1.Enum) {
                    value = type.parse(json[propertyName]);
                }
                else if ("Date" === type.name) {
                    value = new Date(json[propertyName]);
                }
                else if ("Array" === type.name) {
                    var arrayType_1 = Reflect.getMetadata("design:arrayType", this_1, propertyName);
                    var array_1 = [];
                    json[propertyName].forEach(function (jsonData) {
                        var arrayItem = new arrayType_1();
                        arrayItem.fill(jsonData);
                        array_1.push(arrayItem);
                    });
                    value = array_1;
                }
            }
            this_1[propertyName] = value;
        };
        var this_1 = this;
        for (var propertyName in json) {
            _loop_1(propertyName);
        }
    };
    Entity.prototype.json = function () {
        return _super.prototype.json.call(this, function (key, value) {
            if (value instanceof Entity) {
                return StringUtil_1.StringUtil.isNullEmptyOrUndefined(value.id) ? null : value.id;
            }
        });
    };
    return Entity;
}(RTKObject_1.RTKObject));
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4QyxpREFBZ0Q7QUFDaEQsaURBQWdEO0FBQ2hELCtCQUE4QjtBQUc5QixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFaEM7SUFBNEIsMEJBQVM7SUFFakM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFNRCxzQkFBVyw4QkFBVTtRQUhyQjs7V0FFRzthQUNIO1lBQ0ksTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRztJQUNJLHFCQUFJLEdBQVgsVUFBWSxJQUFTO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLHVCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUM7UUFDWCxDQUFDO2dDQUVRLFlBQVk7WUFDakIsRUFBRSxDQUFBLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQ0QsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXBDLEVBQUUsQ0FBQyxDQUFDLHVCQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHVCQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRWxFLENBQUM7WUFFRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsVUFBUSxZQUFZLENBQUMsQ0FBQztZQUVsRSxFQUFFLENBQUMsQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLFlBQVksV0FBSSxDQUFDLENBQUMsQ0FBQztvQkFDakMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQy9CLElBQUksV0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLFVBQVEsWUFBWSxDQUFDLENBQUM7b0JBQzVFLElBQUksT0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTt3QkFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxXQUFTLEVBQUUsQ0FBQzt3QkFDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekIsT0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsS0FBSyxHQUFHLE9BQUssQ0FBQztnQkFDbEIsQ0FBQztZQUNMLENBQUM7WUFHRCxPQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOztRQS9CRCxHQUFHLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUM7b0JBQXJCLFlBQVk7U0ErQnBCO0lBQ0wsQ0FBQztJQUVNLHFCQUFJLEdBQVg7UUFDSSxNQUFNLENBQUMsaUJBQU0sSUFBSSxZQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3pFLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUE0QixxQkFBUyxHQWlFcEM7QUFqRVksd0JBQU0ifQ==