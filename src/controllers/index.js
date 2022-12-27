"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteItem = exports.updateItem = exports.addItem = exports.getItems = void 0;
var itemSchema_1 = require("./../models/itemSchema");
var getItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var items, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, itemSchema_1["default"].find()];
            case 1:
                items = _a.sent();
                res.status(200).json({ items: items });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getItems = getItems;
var addItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, item, newItem, allItems, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                body = req.body;
                item = new itemSchema_1["default"]({
                    itemId: body.itemId,
                    name: body.name,
                    description: body.description,
                    fullDescription: body.fullDescription,
                    price: body.price,
                    areaCodes: body.areaCodes
                });
                return [4 /*yield*/, item.save()];
            case 1:
                newItem = _a.sent();
                return [4 /*yield*/, itemSchema_1["default"].find()];
            case 2:
                allItems = _a.sent();
                res
                    .status(201)
                    .json({ message: "Item added", item: newItem, items: allItems });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                throw error_2;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addItem = addItem;
var updateItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, body, updateItem_1, allItems, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                itemId = req.params.itemId, body = req.body;
                return [4 /*yield*/, itemSchema_1["default"].findById({ _itemId: itemId }, body)];
            case 1:
                updateItem_1 = _a.sent();
                return [4 /*yield*/, itemSchema_1["default"].find()];
            case 2:
                allItems = _a.sent();
                res.status(200)
                    .json({
                    message: "Item updated",
                    item: updateItem_1,
                    items: allItems
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                throw error_3;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateItem = updateItem;
var deleteItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedItem, allItems, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, itemSchema_1["default"].findById(req.params.itemId)];
            case 1:
                deletedItem = _a.sent();
                return [4 /*yield*/, itemSchema_1["default"].find()];
            case 2:
                allItems = _a.sent();
                res.status(200)
                    .json({
                    message: "Item deleted",
                    item: deletedItem,
                    items: allItems
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                throw error_4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteItem = deleteItem;