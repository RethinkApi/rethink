"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RTKException = /** @class */ (function () {
    function RTKException(developerMessage, code, statusCode) {
        this._code = code;
        this._statusCode = statusCode;
        this._developerMessage = developerMessage;
    }
    Object.defineProperty(RTKException.prototype, "developerMessage", {
        get: function () {
            return this._developerMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTKException.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RTKException.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        enumerable: true,
        configurable: true
    });
    RTKException.prototype.toJSON = function () {
        return {
            developerMessage: this.developerMessage,
            code: this.code
        };
    };
    return RTKException;
}());
exports.RTKException = RTKException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlRLRXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUlRLRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFLSSxzQkFBWSxnQkFBd0IsRUFBRSxJQUFZLEVBQUUsVUFBa0I7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0lBQzlDLENBQUM7SUFFRCxzQkFBVywwQ0FBZ0I7YUFBM0I7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsb0NBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELDZCQUFNLEdBQU47UUFDSSxNQUFNLENBQUM7WUFDSCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQixDQUFDO0lBQ04sQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxvQ0FBWSJ9