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
var ServerErrorException_1 = require("./ServerErrorException");
var UnregisteredModelException = /** @class */ (function (_super) {
    __extends(UnregisteredModelException, _super);
    function UnregisteredModelException(developerMessage, errorCode) {
        return _super.call(this, developerMessage, errorCode) || this;
    }
    return UnregisteredModelException;
}(ServerErrorException_1.ServerErrorException));
exports.UnregisteredModelException = UnregisteredModelException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5yZWdpc3RlcmVkTW9kZWxFeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVbnJlZ2lzdGVyZWRNb2RlbEV4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrREFBOEQ7QUFFOUQ7SUFBZ0QsOENBQW9CO0lBRWhFLG9DQUFZLGdCQUF3QixFQUFFLFNBQWlCO2VBQ25ELGtCQUFNLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRUwsaUNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBZ0QsMkNBQW9CLEdBTW5FO0FBTlksZ0VBQTBCIn0=