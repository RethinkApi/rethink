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
var RTKSingleton = /** @class */ (function (_super) {
    __extends(RTKSingleton, _super);
    function RTKSingleton() {
        return _super.call(this) || this;
    }
    RTKSingleton.instance = function () {
        if (!this._instance.get(this.prototype)) {
            this._instance.set(this.prototype, new this());
        }
        return this._instance.get(this.prototype);
    };
    RTKSingleton._instance = new Map();
    return RTKSingleton;
}(RTKObject_1.RTKObject));
exports.RTKSingleton = RTKSingleton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlRLU2luZ2xldG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUlRLU2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUV4QztJQUFrQyxnQ0FBUztJQUd2QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVhLHFCQUFRLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBZ0IsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELE1BQU0sQ0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFYYyxzQkFBUyxHQUFrQyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztJQVlsRyxtQkFBQztDQUFBLEFBYkQsQ0FBa0MscUJBQVMsR0FhMUM7QUFiWSxvQ0FBWSJ9