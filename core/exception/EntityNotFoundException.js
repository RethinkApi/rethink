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
var EntityNotFoundException = /** @class */ (function (_super) {
    __extends(EntityNotFoundException, _super);
    function EntityNotFoundException(developerMessage, code) {
        return _super.call(this, developerMessage, code, 404) || this;
    }
    return EntityNotFoundException;
}(RTKException_1.RTKException));
exports.EntityNotFoundException = EntityNotFoundException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5Tm90Rm91bmRFeGNlcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlOb3RGb3VuZEV4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUM7SUFBNkMsMkNBQVk7SUFFckQsaUNBQVksZ0JBQXdCLEVBQUUsSUFBWTtlQUM5QyxrQkFBTSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUFORCxDQUE2QywyQkFBWSxHQU14RDtBQU5ZLDBEQUF1QiJ9