"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routeAddress = new routes_1.Routes();
        this.mongoUrl = "mongodb:127.0.0.1:27017/addressdb";
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongosetup() {
        mongoose.connect(this.mongoUrl);
        mongoose.Promise = global.Promise;
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map