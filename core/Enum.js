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
var ObjectUtil_1 = require("../util/ObjectUtil");
var StringUtil_1 = require("../util/StringUtil");
var RTKObject_1 = require("./RTKObject");
var language = "pt-BR";
var Reflect = window['Reflect'];
var Enum = /** @class */ (function (_super) {
    __extends(Enum, _super);
    function Enum(name, enumInfo) {
        var _this = _super.call(this) || this;
        _this._name = name;
        _this.enumInfo = enumInfo;
        return _this;
    }
    Object.defineProperty(Enum.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Enum.prototype, "label", {
        get: function () {
            return this.enumInfo[language];
        },
        enumerable: true,
        configurable: true
    });
    Enum.values = function () {
        var _this = this;
        if (ObjectUtil_1.ObjectUtil.isBlank(this.prototype["serialID"])) {
            this.prototype["serialId"] = StringUtil_1.StringUtil.randomString(16, StringUtil_1.RandomStringType.ALPHANUMERIC);
        }
        if (ObjectUtil_1.ObjectUtil.isBlank(this._values[this.prototype["serialID"]])) {
            this._values[this.prototype["serialID"]] = [];
            var properties = Object.keys(this);
            properties.forEach(function (property) {
                if (_this[property] instanceof Enum) {
                    _this._values[_this.prototype["serialID"]].push(_this[property]);
                }
            });
            this._values[this.prototype["serialID"]].sort(function (propertyA, propertyB) {
                if (propertyA.label < propertyB.label) {
                    return -1;
                }
                if (propertyA.label > propertyB.label) {
                    return 1;
                }
                return 0;
            });
        }
        return this._values[this.prototype["serialID"]];
    };
    Enum.parse = function (value) {
        for (var _i = 0, _a = this.values(); _i < _a.length; _i++) {
            var type = _a[_i];
            if (type.name === value) {
                return type;
            }
        }
        return undefined;
    };
    /* public static fromOrdinal<T extends Enum>(index: number): T {
         let key: string = Object.keys(this)[index];
         return ObjectUtil.cast<T>(this[key]);
     }
 
     public static ordinal<T extends Enum>(value: string): number {
         let index: number = 0;
         for (let type of this.values<T>()) {
             if (type.name === value) {
                 return index;
             }else {
                 index++;
             }
         }
         return -1;
     }*/
    Enum.prototype.json = function () {
        return this._name;
    };
    Enum.prototype.deepClone = function () {
        return this;
    };
    Enum._values = new Map();
    return Enum;
}(RTKObject_1.RTKObject));
exports.Enum = Enum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBQ2hELGlEQUFrRTtBQUNsRSx5Q0FBd0M7QUFFeEMsSUFBTSxRQUFRLEdBQVcsT0FBTyxDQUFDO0FBRWpDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVoQztJQUFtQyx3QkFBUztJQUt4QyxjQUFZLElBQVksRUFBRSxRQUFrQjtRQUE1QyxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7SUFDN0IsQ0FBQztJQUVELHNCQUFXLHNCQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFYSxXQUFNLEdBQXBCO1FBQUEsaUJBK0JDO1FBN0JHLEVBQUUsQ0FBQyxDQUFDLHVCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsNkJBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUYsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHVCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QyxJQUFJLFVBQVUsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFTLEVBQUUsU0FBUztnQkFFL0QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVhLFVBQUssR0FBbkIsVUFBb0MsS0FBVTtRQUMxQyxHQUFHLENBQUMsQ0FBYSxVQUFhLEVBQWIsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsY0FBYSxFQUFiLElBQWE7WUFBekIsSUFBSSxJQUFJLFNBQUE7WUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFXLENBQUM7WUFDdkIsQ0FBQztTQUNKO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUY7Ozs7Ozs7Ozs7Ozs7OztRQWVJO0lBRUksbUJBQUksR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWxGYyxZQUFPLEdBQXFDLElBQUksR0FBRyxFQUErQixDQUFDO0lBbUZ0RyxXQUFDO0NBQUEsQUF0RkQsQ0FBbUMscUJBQVMsR0FzRjNDO0FBdEZxQixvQkFBSSJ9