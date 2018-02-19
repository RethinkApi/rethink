"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    ObjectUtil.cast = function (obj) {
        return obj;
    };
    ObjectUtil.isNotEmpty = function (obj) {
        return !ObjectUtil.isEmpty(obj);
    };
    ObjectUtil.isEmpty = function (obj) {
        return Object.keys(obj).length == 0;
    };
    ObjectUtil.isBlank = function (obj) {
        return obj === null || obj === undefined;
    };
    ObjectUtil.isPresent = function (obj) {
        return obj !== null && obj !== undefined;
    };
    return ObjectUtil;
}());
exports.ObjectUtil = ObjectUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0VXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9iamVjdFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBcUJBLENBQUM7SUFuQmlCLGVBQUksR0FBbEIsVUFBcUMsR0FBVztRQUM1QyxNQUFNLENBQUksR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFYSxxQkFBVSxHQUF4QixVQUF5QixHQUFXO1FBQ2hDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVhLGtCQUFPLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRWEsa0JBQU8sR0FBckIsVUFBc0IsR0FBUTtRQUMxQixNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFFYSxvQkFBUyxHQUF2QixVQUF3QixHQUFRO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCcUIsZ0NBQVUifQ==