"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var itemSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: false
    },
    itemId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    fullDescription: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    areaCodes: {
        type: Array,
        required: true
    }
});
exports["default"] = (0, mongoose_1.model)("Item", itemSchema);
