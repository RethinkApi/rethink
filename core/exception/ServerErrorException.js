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
var ServerErrorException = /** @class */ (function (_super) {
    __extends(ServerErrorException, _super);
    function ServerErrorException(developerMessage, code) {
        return _super.call(this, developerMessage, code, 500) || this;
    }
    return ServerErrorException;
}(RTKException_1.RTKException));
exports.ServerErrorException = ServerErrorException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyRXJyb3JFeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXJ2ZXJFcnJvckV4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUM7SUFBMEMsd0NBQVk7SUFFbEQsOEJBQVksZ0JBQXdCLEVBQUUsSUFBWTtlQUM5QyxrQkFBTSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUMsQUFORCxDQUEwQywyQkFBWSxHQU1yRDtBQU5ZLG9EQUFvQiJ9