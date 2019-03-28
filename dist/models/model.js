"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AddressSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter first name'
    },
    lastName: {
        type: String,
        required: 'Enter second name'
    },
    streetName: {
        type: String,
        required: 'Enter street name'
    },
    homeNumber: {
        type: Number,
        required: 'ENter home number'
    },
    aptNumber: {
        type: Number,
        required: 'Enter apartment number'
    },
    telNumber: {
        type: Number
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=model.js.map