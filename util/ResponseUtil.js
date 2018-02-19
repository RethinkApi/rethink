"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtil_1 = require("../util/ObjectUtil");
var ResponseUtil = /** @class */ (function () {
    function ResponseUtil() {
    }
    ResponseUtil.produceResponse = function (response, error) {
        response.statusCode = error.statusCode;
        response.json(error);
    };
    ResponseUtil.getItems = function (jsonArray, clazz) {
        var items = [];
        if (ObjectUtil_1.ObjectUtil.isBlank(jsonArray) || ObjectUtil_1.ObjectUtil.isBlank(jsonArray.items)) {
            return [];
        }
        for (var i = 0; i < jsonArray.items.length; i++) {
            var item = this.getItem(jsonArray.items[i], clazz);
            items.push(item);
        }
        return items;
    };
    ResponseUtil.getItem = function (json, clazz) {
        var item = new clazz();
        item.fill(json);
        return item;
    };
    return ResponseUtil;
}());
exports.ResponseUtil = ResponseUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzcG9uc2VVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsaURBQWdEO0FBRWhEO0lBQUE7SUEyQkEsQ0FBQztJQXpCaUIsNEJBQWUsR0FBN0IsVUFBOEIsUUFBa0IsRUFBRSxLQUFtQjtRQUNqRSxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRWEscUJBQVEsR0FBdEIsVUFBeUMsU0FBUyxFQUFFLEtBQXlCO1FBQ3pFLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztRQUVwQixFQUFFLENBQUMsQ0FBQyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFYSxvQkFBTyxHQUFyQixVQUF3QyxJQUFJLEVBQUUsS0FBeUI7UUFDbkUsSUFBSSxJQUFJLEdBQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCcUIsb0NBQVkifQ==