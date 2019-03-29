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
        Address.find({}, function (err, addressList) {
            if (err) {
                res.send(err);
            }
            res.json(addressList);
        });
    }
    getAddressById(req, res) {
        Address.findById /*findOne*/(req.params.addressId, function (err, address) {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
    }
    updateAddress(req, res) {
        Address.findOneAndUpdate({ _id: req.params.addressId }, req.body, { new: true }, function (err, address) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            console.log("success");
            res.json(address);
        });
    }
    deleteAddressById(req, res) {
        console.log("in delete ", req.params);
        Address.deleteOne({ _id: req.params.addressId }, function (err, address) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted" });
        });
    }
}
exports.AddressController = AddressController;
//# sourceMappingURL=controller.js.map