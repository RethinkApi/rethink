"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("../core/exception");
var util_1 = require("../util");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handler = function (error, request, response, next) {
        ErrorHandler.handleError(response, error);
    };
    ErrorHandler.handleError = function (response, error) {
        if (error instanceof exception_1.RTKException) {
            util_1.ResponseUtil.produceResponse(response, error);
        }
        else {
            util_1.ResponseUtil.produceResponse(response, new exception_1.ServerErrorException("An unexpected error occurred.", -1));
            if (error.developerMessage) {
                console.log("[RTKException] - [" + new Date() + "] - " + error.developerMessage);
            }
            else {
                console.error("[Error] -[" + new Date() + "] - " + error.message);
                if (error.errors) {
                    for (var _i = 0, _a = error.errors; _i < _a.length; _i++) {
                        var e = _a[_i];
                        this.printStack(e);
                    }
                }
                else {
                    this.printStack(error);
                }
            }
        }
    };
    ErrorHandler.printStack = function (error) {
        if (error.stack) {
            console.log(error.stack);
        }
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXJyb3JIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQW1NO0FBQ25NLGdDQUFtRDtBQUVuRDtJQUFBO0lBaUNBLENBQUM7SUE5QmlCLG9CQUFPLEdBQXJCLFVBQXNCLEtBQTJCLEVBQUUsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCO1FBQ3ZHLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFYSx3QkFBVyxHQUF6QixVQUEwQixRQUFrQixFQUFFLEtBQTJCO1FBQ3JFLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx3QkFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQyxtQkFBWSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osbUJBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksZ0NBQW9CLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RHLEVBQUUsQ0FBQyxDQUFFLEtBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLElBQUksSUFBSSxFQUFFLFlBQVEsS0FBYSxDQUFDLGdCQUFrQixDQUFDLENBQUM7WUFDekYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBYSxJQUFJLElBQUksRUFBRSxZQUFPLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLENBQUUsS0FBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxDQUFVLFVBQXFCLEVBQXJCLEtBQUMsS0FBYSxDQUFDLE1BQU0sRUFBckIsY0FBcUIsRUFBckIsSUFBcUI7d0JBQTlCLElBQUksQ0FBQyxTQUFBO3dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3RCO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7UUFFTCxDQUFDO0lBQ0wsQ0FBQztJQUVhLHVCQUFVLEdBQXhCLFVBQXlCLEtBQVk7UUFDakMsRUFBRSxDQUFDLENBQUUsS0FBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0NBQVkifQ==