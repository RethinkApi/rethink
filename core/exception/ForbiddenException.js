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
var RTKException_1 = require("./RTKException");
var ForbiddenException = /** @class */ (function (_super) {
    __extends(ForbiddenException, _super);
    function ForbiddenException(developerMessage, code) {
        return _super.call(this, developerMessage, code, 403) || this;
    }
    return ForbiddenException;
}(RTKException_1.RTKException));
exports.ForbiddenException = ForbiddenException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yYmlkZGVuRXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9yYmlkZGVuRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUU5QztJQUF3QyxzQ0FBWTtJQUVoRCw0QkFBWSxnQkFBd0IsRUFBRSxJQUFZO2VBQzlDLGtCQUFNLGdCQUFnQixFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXdDLDJCQUFZLEdBTW5EO0FBTlksZ0RBQWtCIn0=