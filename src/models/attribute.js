"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var attributeSchema = new mongoose_1.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});
