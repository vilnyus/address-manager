"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../models/model");
const Address = mongoose.model('Address', model_1.AddressSchema); //Why out of class AddressController
class AddressController {
    addNewAddress(req, res) {
        let newAddress = new Address(req.body);
        newAddress.save((err, address) => {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
    }
    getAllAddresses(req, res) {
        Address.find({}, (err, addressList) => {
            if (err) {
                res.send(err);
            }
            res.json(addressList);
        });
    }
    getAddressById(req, res) {
        Address.findOne(req.params.addressId, (err, address) => {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
    }
    updateAddress(req, res) {
        Address.findOneAndUpdate({ _id: req.params.addressId }, (err, address) => {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
    }
    deleteAddressById(req, res) {
        Address.remove({ _id: req.params.addressId }, (err, address) => {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
    }
}
exports.AddressController = AddressController;
//# sourceMappingURL=controller.js.map