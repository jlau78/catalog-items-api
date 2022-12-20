"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 4000;
app.use((0, cors_1["default"])());
app.use(routes_1["default"]);
var uri = "mongodb://".concat(process.env.MONGO_HOST, ":").concat(process.env.MONGO_PORT, "/").concat(process.env.MONGO_DB, "?retryWrites=true&w=majority");
var options = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose.set("useFindAndModify", false)
mongoose_1["default"]
    .connect(uri) //, options)
    .then(function () {
    return app.listen(PORT, function () {
        return console.log("Server running on http://localhost:".concat(PORT));
    });
})["catch"](function (error) {
    throw error;
});
