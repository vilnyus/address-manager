"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controllers/controller");
class Routes {
    constructor() {
        this.addressController = new controller_1.AddressController();
    }
    routes(app) {
        app.route('/') //Route to home page
            .get((req, res) => {
            res.status(200).send({ message: "Home page" });
        });
        app.route('/address')
            .get(this.addressController.getAllAddresses) // Show all addresses list 
            .post(this.addressController.addNewAddress); //Add address
        app.route('/address/:addressId') // Editing contact list by ID
            .get(this.addressController.getAddressById) // Get special address useing ID 
            .put(this.addressController.updateAddress) // Update address useing ID
            .delete(this.addressController.deleteAddressById); // Delete address useing ID
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map