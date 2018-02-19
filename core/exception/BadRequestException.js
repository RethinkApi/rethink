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
var BadRequestException = /** @class */ (function (_super) {
    __extends(BadRequestException, _super);
    function BadRequestException(developerMessage, code) {
        return _super.call(this, developerMessage, code, 400) || this;
    }
    return BadRequestException;
}(RTKException_1.RTKException));
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFkUmVxdWVzdEV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhZFJlcXVlc3RFeGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRTlDO0lBQXlDLHVDQUFZO0lBRWpELDZCQUFZLGdCQUF3QixFQUFFLElBQVk7ZUFDOUMsa0JBQU0sZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUwsMEJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBeUMsMkJBQVksR0FNcEQ7QUFOWSxrREFBbUIifQ==