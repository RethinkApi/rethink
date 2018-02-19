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
var UnprocessableEntityException = /** @class */ (function (_super) {
    __extends(UnprocessableEntityException, _super);
    function UnprocessableEntityException(developerMessage, code) {
        return _super.call(this, developerMessage, code, 422) || this;
    }
    return UnprocessableEntityException;
}(RTKException_1.RTKException));
exports.UnprocessableEntityException = UnprocessableEntityException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5wcm9jZXNzYWJsZUVudGl0eUV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRTlDO0lBQWtELGdEQUFZO0lBRTFELHNDQUFZLGdCQUF3QixFQUFFLElBQVk7ZUFDOUMsa0JBQU0sZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUwsbUNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBa0QsMkJBQVksR0FNN0Q7QUFOWSxvRUFBNEIifQ==