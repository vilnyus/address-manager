
import { Request, Response } from "express";
import { AddressController } from "../controllers/controller";

export class Routes {
  public addressController: AddressController = new AddressController();
  public routes(app): void {
    
    app.route('/') //Route to home page
      .get((req: Request, res: Response) => {
        res.status(200).send({message: "Home page"});        
      })
    
    app.route('/address')
      .get(this.addressController.getAllAddresses) // Show all addresses list 
      .post(this.addressController.addNewAddress) //Add address
    
    app.route('/address/:addressID') // Editing contact list by ID
      .get(this.addressController.getAddressById) // Get special address useing ID 
      .put(this.addressController.updateAddress)  // Update address useing ID
      .delete(this.addressController.deleteAddressById)  // Delete address useing ID
  } 
}
