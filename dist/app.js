"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routeAddress = new routes_1.Routes();
        this.mongoUrl = 'mongodb://127.0.0.1:27017/addressdb';
        this.app = express();
        this.config();
        this.routeAddress.routes(this.app);
        this.mongosetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongosetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map