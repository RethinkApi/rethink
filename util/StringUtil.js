"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.isNullEmptyOrUndefined = function (value) {
        if (value == null || value == undefined) {
            return true;
        }
        return value.trim().length == 0;
    };
    StringUtil.isNotNullNotEmptyOrUndefined = function (value) {
        return !StringUtil.isNullEmptyOrUndefined(value);
    };
    StringUtil.toInt = function (value) {
        return typeof value == 'string' ? parseInt(value.replace(/\D/, "")) : undefined;
    };
    StringUtil.randomString = function (length, type) {
        var str = "";
        var i = 0;
        var min = type == RandomStringType.ALPHA ? 10 : 0;
        var max = type == RandomStringType.NUMERIC ? 10 : 62;
        while (i++ < length) {
            var r = Math.random() * (max - min) + min << 0;
            str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
        }
        return str;
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
var RandomStringType;
(function (RandomStringType) {
    RandomStringType[RandomStringType["ALPHA"] = 0] = "ALPHA";
    RandomStringType[RandomStringType["NUMERIC"] = 1] = "NUMERIC";
    RandomStringType[RandomStringType["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
})(RandomStringType = exports.RandomStringType || (exports.RandomStringType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nVXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0cmluZ1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBNEJBLENBQUM7SUExQmlCLGlDQUFzQixHQUFwQyxVQUFxQyxLQUFhO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFYSx1Q0FBNEIsR0FBMUMsVUFBMkMsS0FBYTtRQUNwRCxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVhLGdCQUFLLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwRixDQUFDO0lBRWEsdUJBQVksR0FBMUIsVUFBMkIsTUFBTSxFQUFFLElBQXVCO1FBQ3RELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDL0MsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QnFCLGdDQUFVO0FBOEJoQyxJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDeEIseURBQUssQ0FBQTtJQUNMLDZEQUFPLENBQUE7SUFDUCx1RUFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUkzQiJ9